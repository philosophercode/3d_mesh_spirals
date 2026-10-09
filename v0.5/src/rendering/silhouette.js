// Automatic cut-line extraction for laser cutting.
//
// The cut line is the boundary of the shape's 2D projection: its outer
// perimeter plus any holes where the background shows through. Rather than
// guessing which wireframe segments lie on that boundary, every triangle of
// the solid is rasterized into a coverage mask, the mask boundary is traced
// with marching squares, and the traced loops are simplified. The result is a
// set of closed polylines in screen coordinates, independent of path type,
// cross-section or modifiers.

const SILHOUETTE_DEFAULTS = {
    resolution: 4000,    // Mask pixels along the longest side of the shape
    simplify: 0.5,       // Ramer-Douglas-Peucker tolerance, in mask pixels
    minFeature: 0.01,    // Drop loops smaller than (minFeature * longest side)^2
    includeHoles: true   // Also cut interior holes
};

// Triangles of everything solid in the group; built from params if the
// current render style left no meshes (wireframe without occlusion).
function collectSilhouetteGeometries(meshGroup, params) {
    const entries = [];
    meshGroup.updateMatrixWorld(true);
    meshGroup.traverse((child) => {
        if (child.isMesh && child.geometry.index) {
            entries.push({ geometry: child.geometry, matrixWorld: child.matrixWorld, owned: false });
        }
    });
    if (entries.length > 0) return entries;

    const uMax = 2 * Math.PI * params.N;
    const built = [
        buildOuterTubeGeometry(params),
        buildTubeCapGeometry(params, 0),
        buildTubeCapGeometry(params, uMax)
    ];
    if (params.showInnerSurface) {
        built.push(buildInnerTubeGeometry(params));
    }
    const identity = new THREE.Matrix4();
    return built.map(geometry => ({ geometry, matrixWorld: identity, owned: true }));
}

// Fill mask pixels whose sample point (integer coords) lies inside the triangle
function rasterizeTriangle(mask, W, H, ax, ay, bx, by, cx, cy) {
    const area = (bx - ax) * (cy - ay) - (by - ay) * (cx - ax);
    if (Math.abs(area) < 1e-12) return;
    if (area < 0) {
        // Make winding consistent so "inside" means all edge functions >= 0
        let t = bx; bx = cx; cx = t;
        t = by; by = cy; cy = t;
    }

    const minY = Math.max(0, Math.ceil(Math.min(ay, by, cy)));
    const maxY = Math.min(H - 1, Math.floor(Math.max(ay, by, cy)));
    const minX = Math.min(ax, bx, cx);
    const maxX = Math.max(ax, bx, cx);
    const EPS = 1e-6;

    // Each edge function is linear in x for a fixed row: A * x + B >= 0
    const edges = [ax, ay, bx, by, bx, by, cx, cy, cx, cy, ax, ay];

    for (let y = minY; y <= maxY; y++) {
        let xl = minX;
        let xr = maxX;
        for (let e = 0; e < 12; e += 4) {
            const x0 = edges[e], y0 = edges[e + 1], x1 = edges[e + 2], y1 = edges[e + 3];
            const A = -(y1 - y0);
            const B = (x1 - x0) * (y - y0) + (y1 - y0) * x0;
            if (A > 0) {
                xl = Math.max(xl, (-EPS - B) / A);
            } else if (A < 0) {
                xr = Math.min(xr, (-EPS - B) / A);
            } else if (B < -EPS) {
                xr = xl - 1;
            }
        }
        const start = Math.max(0, Math.ceil(xl));
        const end = Math.min(W - 1, Math.floor(xr));
        if (start <= end) {
            mask.fill(1, y * W + start, y * W + end + 1);
        }
    }
}

// Marching squares over a 0/1 mask with a zero border. Returns closed loops
// of points in mask coordinates (pixel sample points are at integer coords).
function traceMaskContours(mask, W, H) {
    // Boundary crossings are identified by the pixel edge they sit on:
    // horizontal edge (x,y)-(x+1,y) -> 2*(y*W+x), vertical (x,y)-(x,y+1) -> 2*(y*W+x)+1
    const neighbors = new Map();
    function link(a, b) {
        const na = neighbors.get(a);
        if (na) na.push(b); else neighbors.set(a, [b]);
        const nb = neighbors.get(b);
        if (nb) nb.push(a); else neighbors.set(b, [a]);
    }

    for (let y = 0; y < H - 1; y++) {
        const row = y * W;
        for (let x = 0; x < W - 1; x++) {
            const tl = mask[row + x];
            const tr = mask[row + x + 1];
            const bl = mask[row + W + x];
            const br = mask[row + W + x + 1];
            const c = (tl << 3) | (tr << 2) | (br << 1) | bl;
            if (c === 0 || c === 15) continue;

            const T = 2 * (row + x);
            const B = 2 * (row + W + x);
            const L = 2 * (row + x) + 1;
            const R = 2 * (row + x + 1) + 1;

            switch (c) {
                case 1: case 14: link(L, B); break;
                case 2: case 13: link(B, R); break;
                case 3: case 12: link(L, R); break;
                case 4: case 11: link(T, R); break;
                case 6: case 9: link(T, B); break;
                case 7: case 8: link(L, T); break;
                // Saddles: treat diagonal neighbours as connected
                case 5: link(L, T); link(B, R); break;
                case 10: link(T, R); link(L, B); break;
            }
        }
    }

    function toPoint(id) {
        const cell = id >> 1;
        const x = cell % W;
        const y = (cell - x) / W;
        return (id & 1) ? [x, y + 0.5] : [x + 0.5, y];
    }

    const loops = [];
    const visited = new Set();
    neighbors.forEach((_, start) => {
        if (visited.has(start)) return;
        const loop = [];
        let prev = -1;
        let cur = start;
        while (!visited.has(cur)) {
            visited.add(cur);
            loop.push(toPoint(cur));
            const nb = neighbors.get(cur);
            const next = nb[0] !== prev ? nb[0] : nb[1];
            prev = cur;
            cur = next;
        }
        if (loop.length >= 3) loops.push(loop);
    });
    return loops;
}

// Ramer-Douglas-Peucker on a closed loop
function simplifyClosedLoop(points, tolerance) {
    const n = points.length;
    if (n < 4 || tolerance <= 0) return points;

    // Split the loop at the point farthest from points[0]
    let far = 0;
    let farDist = -1;
    for (let i = 1; i < n; i++) {
        const dx = points[i][0] - points[0][0];
        const dy = points[i][1] - points[0][1];
        const d = dx * dx + dy * dy;
        if (d > farDist) { farDist = d; far = i; }
    }

    const keep = new Uint8Array(n + 1);
    keep[0] = keep[far] = keep[n] = 1;
    const at = (i) => points[i % n];
    const stack = [[0, far], [far, n]];
    const tol2 = tolerance * tolerance;

    while (stack.length) {
        const [s, e] = stack.pop();
        const [sx, sy] = at(s);
        const [ex, ey] = at(e);
        const dx = ex - sx;
        const dy = ey - sy;
        const len2 = dx * dx + dy * dy;
        let maxD = -1;
        let idx = -1;
        for (let i = s + 1; i < e; i++) {
            const [px, py] = at(i);
            let d;
            if (len2 === 0) {
                d = (px - sx) * (px - sx) + (py - sy) * (py - sy);
            } else {
                const cross = dx * (py - sy) - dy * (px - sx);
                d = cross * cross / len2;
            }
            if (d > maxD) { maxD = d; idx = i; }
        }
        if (idx !== -1 && maxD > tol2) {
            keep[idx] = 1;
            stack.push([s, idx], [idx, e]);
        }
    }

    const out = [];
    for (let i = 0; i < n; i++) {
        if (keep[i]) out.push(points[i]);
    }
    return out;
}

function loopArea(points) {
    let a = 0;
    for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
        a += (points[j][0] + points[i][0]) * (points[j][1] - points[i][1]);
    }
    return a / 2;
}

function pointInLoop(x, y, points) {
    let inside = false;
    for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
        const [xi, yi] = points[i];
        const [xj, yj] = points[j];
        if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) {
            inside = !inside;
        }
    }
    return inside;
}

// Main entry: closed cut loops in screen coordinates (same space as the SVG
// export's project3DTo2D). Holes come first, ordered innermost-first, so a
// laser cuts interior features before the part is freed from the sheet.
function computeCutContours(meshGroup, params, camera, width, height, options = {}) {
    const opts = { ...SILHOUETTE_DEFAULTS, ...options };
    camera.updateMatrixWorld();

    const entries = collectSilhouetteGeometries(meshGroup, params);
    const viewProjection = new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    const mvp = new THREE.Matrix4();

    // Project every vertex to screen space
    const projected = entries.map(({ geometry, matrixWorld }) => {
        mvp.multiplyMatrices(viewProjection, matrixWorld);
        const e = mvp.elements;
        const pos = geometry.attributes.position;
        const xy = new Float64Array(pos.count * 2);
        const valid = new Uint8Array(pos.count);
        for (let i = 0; i < pos.count; i++) {
            const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
            const w = e[3] * x + e[7] * y + e[11] * z + e[15];
            if (w <= 0) continue; // Behind a perspective camera
            const cx = (e[0] * x + e[4] * y + e[8] * z + e[12]) / w;
            const cy = (e[1] * x + e[5] * y + e[9] * z + e[13]) / w;
            xy[i * 2] = (cx + 1) / 2 * width;
            xy[i * 2 + 1] = (-cy + 1) / 2 * height;
            valid[i] = 1;
        }
        return { xy, valid, index: geometry.index };
    });

    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    projected.forEach(({ xy, valid }) => {
        for (let i = 0; i < valid.length; i++) {
            if (!valid[i]) continue;
            minX = Math.min(minX, xy[i * 2]);
            maxX = Math.max(maxX, xy[i * 2]);
            minY = Math.min(minY, xy[i * 2 + 1]);
            maxY = Math.max(maxY, xy[i * 2 + 1]);
        }
    });

    // Only what's on screen gets cut, matching the engrave lines in the export
    minX = Math.max(minX, 0);
    minY = Math.max(minY, 0);
    maxX = Math.min(maxX, width);
    maxY = Math.min(maxY, height);

    if (!isFinite(minX) || maxX - minX <= 0 || maxY - minY <= 0) {
        entries.forEach(({ geometry, owned }) => { if (owned) geometry.dispose(); });
        return [];
    }

    // Mask covering the projected shape with a blank border so loops close
    const pad = 2;
    const scale = opts.resolution / Math.max(maxX - minX, maxY - minY);
    const W = Math.ceil((maxX - minX) * scale) + 2 * pad + 1;
    const H = Math.ceil((maxY - minY) * scale) + 2 * pad + 1;
    const mask = new Uint8Array(W * H);
    const toMaskX = (x) => (x - minX) * scale + pad;
    const toMaskY = (y) => (y - minY) * scale + pad;

    projected.forEach(({ xy, valid, index }) => {
        for (let t = 0; t < index.count; t += 3) {
            const a = index.getX(t), b = index.getX(t + 1), c = index.getX(t + 2);
            if (!valid[a] || !valid[b] || !valid[c]) continue;
            rasterizeTriangle(mask, W, H,
                toMaskX(xy[a * 2]), toMaskY(xy[a * 2 + 1]),
                toMaskX(xy[b * 2]), toMaskY(xy[b * 2 + 1]),
                toMaskX(xy[c * 2]), toMaskY(xy[c * 2 + 1]));
        }
    });
    entries.forEach(({ geometry, owned }) => { if (owned) geometry.dispose(); });

    // Triangles running off screen spill into the border; clear it so loops
    // close along the screen edge
    mask.fill(0, 0, pad * W);
    mask.fill(0, (H - pad) * W);
    for (let y = pad; y < H - pad; y++) {
        mask.fill(0, y * W, y * W + pad);
        mask.fill(0, (y + 1) * W - pad, (y + 1) * W);
    }

    // Trace, drop specks, simplify
    const minArea = Math.pow(opts.minFeature * opts.resolution, 2);
    const loops = traceMaskContours(mask, W, H)
        .map(points => ({ points, area: Math.abs(loopArea(points)) }))
        .filter(loop => loop.area >= minArea)
        .map(loop => ({ ...loop, points: simplifyClosedLoop(loop.points, opts.simplify) }))
        .filter(loop => loop.points.length >= 3);

    // Nesting depth decides outer boundary (even) vs hole (odd)
    loops.forEach(loop => {
        let bx0 = Infinity, by0 = Infinity, bx1 = -Infinity, by1 = -Infinity;
        loop.points.forEach(([x, y]) => {
            bx0 = Math.min(bx0, x); bx1 = Math.max(bx1, x);
            by0 = Math.min(by0, y); by1 = Math.max(by1, y);
        });
        loop.bbox = [bx0, by0, bx1, by1];
    });
    loops.forEach(loop => {
        const [px, py] = loop.points[0];
        loop.depth = loops.filter(other => other !== loop &&
            px >= other.bbox[0] && px <= other.bbox[2] &&
            py >= other.bbox[1] && py <= other.bbox[3] &&
            pointInLoop(px, py, other.points)).length;
    });

    return loops
        .filter(loop => opts.includeHoles || loop.depth % 2 === 0)
        .sort((a, b) => b.depth - a.depth)
        .map(loop => ({
            isHole: loop.depth % 2 === 1,
            depth: loop.depth,
            area: loop.area / (scale * scale),
            points: loop.points.map(([x, y]) => ({
                x: minX + (x - pad) / scale,
                y: minY + (y - pad) / scale
            }))
        }));
}
