// SVG export that exactly matches camera view
// Uses the same outline methods as the 3D view

function exportSVG(renderer, scene, camera, meshGroup, params, orbitControls) {
    // Update controls and matrices to ensure sync
    orbitControls.update();
    camera.updateMatrixWorld();
    camera.updateProjectionMatrix();
    meshGroup.updateMatrixWorld(true);
    renderer.render(scene, camera);
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // SVG will be created later after we calculate the bounding box
    let svg = '';
    
    // Helper to project 3D point to 2D screen coordinates
    function project3DTo2D(point) {
        const vector = point.clone();
        vector.project(camera);
        const x = (vector.x + 1) / 2 * width;
        const y = (-vector.y + 1) / 2 * height;
        return { x, y, z: -vector.z };
    }
    
    // Build depth buffer from occluding triangles
    // Per-pixel depth of the closest surface (larger = closer); -Infinity = empty
    const depthBuffer = new Float64Array(width * height).fill(-Infinity);
    
    meshGroup.traverse((child) => {
        if (child.isMesh && child.material.colorWrite === false) {
            const geometry = child.geometry;
            const index = geometry.index;
            const positions = geometry.attributes.position;
            const isDoubleSide = child.material.side === THREE.DoubleSide;
            
            if (index) {
                for (let i = 0; i < index.count; i += 3) {
                    const v1 = new THREE.Vector3(
                        positions.getX(index.getX(i)),
                        positions.getY(index.getX(i)),
                        positions.getZ(index.getX(i))
                    ).applyMatrix4(child.matrixWorld);
                    
                    const v2 = new THREE.Vector3(
                        positions.getX(index.getX(i + 1)),
                        positions.getY(index.getX(i + 1)),
                        positions.getZ(index.getX(i + 1))
                    ).applyMatrix4(child.matrixWorld);
                    
                    const v3 = new THREE.Vector3(
                        positions.getX(index.getX(i + 2)),
                        positions.getY(index.getX(i + 2)),
                        positions.getZ(index.getX(i + 2))
                    ).applyMatrix4(child.matrixWorld);
                    
                    // Project to 2D
                    const p1 = project3DTo2D(v1);
                    const p2 = project3DTo2D(v2);
                    const p3 = project3DTo2D(v3);
                    
                    // Rasterize triangle into depth buffer
                    const minX = Math.max(0, Math.floor(Math.min(p1.x, p2.x, p3.x)));
                    const maxX = Math.min(width - 1, Math.ceil(Math.max(p1.x, p2.x, p3.x)));
                    const minY = Math.max(0, Math.floor(Math.min(p1.y, p2.y, p3.y)));
                    const maxY = Math.min(height - 1, Math.ceil(Math.max(p1.y, p2.y, p3.y)));
                    
                    // Barycentric coordinates helper
                    function pointInTriangle(px, py) {
                        const v0x = p3.x - p1.x;
                        const v0y = p3.y - p1.y;
                        const v1x = p2.x - p1.x;
                        const v1y = p2.y - p1.y;
                        const v2x = px - p1.x;
                        const v2y = py - p1.y;
                        
                        const dot00 = v0x * v0x + v0y * v0y;
                        const dot01 = v0x * v1x + v0y * v1y;
                        const dot02 = v0x * v2x + v0y * v2y;
                        const dot11 = v1x * v1x + v1y * v1y;
                        const dot12 = v1x * v2x + v1y * v2y;
                        
                        const invDenom = 1 / (dot00 * dot11 - dot01 * dot01);
                        const u = (dot11 * dot02 - dot01 * dot12) * invDenom;
                        const v = (dot00 * dot12 - dot01 * dot02) * invDenom;
                        
                        return (u >= 0) && (v >= 0) && (u + v <= 1);
                    }
                    
                    // Rasterize front face
                    for (let y = minY; y <= maxY; y++) {
                        for (let x = minX; x <= maxX; x++) {
                            if (pointInTriangle(x, y)) {
                                // Interpolate depth using barycentric coordinates
                                const v0x = p3.x - p1.x;
                                const v0y = p3.y - p1.y;
                                const v1x = p2.x - p1.x;
                                const v1y = p2.y - p1.y;
                                const v2x = x - p1.x;
                                const v2y = y - p1.y;
                                
                                const dot00 = v0x * v0x + v0y * v0y;
                                const dot01 = v0x * v1x + v0y * v1y;
                                const dot02 = v0x * v2x + v0y * v2y;
                                const dot11 = v1x * v1x + v1y * v1y;
                                const dot12 = v1x * v2x + v1y * v2y;
                                
                                const invDenom = 1 / (dot00 * dot11 - dot01 * dot01);
                                const u = (dot11 * dot02 - dot01 * dot12) * invDenom;
                                const v = (dot00 * dot12 - dot01 * dot02) * invDenom;
                                const w = 1 - u - v;
                                
                                const depth = w * p1.z + v * p2.z + u * p3.z; // u weights p3, v weights p2
                                
                                // Store maximum depth (closest to camera)
                                const idx = Math.floor(y) * width + Math.floor(x);
                                if (depthBuffer[idx] < depth) {
                                    depthBuffer[idx] = depth;
                                }
                            }
                        }
                    }
                    
                    // For DoubleSide meshes, also rasterize back face
                    if (isDoubleSide) {
                        const p1_back = project3DTo2D(v1);
                        const p2_back = project3DTo2D(v3); // Swap for back face
                        const p3_back = project3DTo2D(v2);
                        
                        const minX_back = Math.max(0, Math.floor(Math.min(p1_back.x, p2_back.x, p3_back.x)));
                        const maxX_back = Math.min(width - 1, Math.ceil(Math.max(p1_back.x, p2_back.x, p3_back.x)));
                        const minY_back = Math.max(0, Math.floor(Math.min(p1_back.y, p2_back.y, p3_back.y)));
                        const maxY_back = Math.min(height - 1, Math.ceil(Math.max(p1_back.y, p2_back.y, p3_back.y)));
                        
                        function pointInTriangleBack(px, py) {
                            const v0x = p3_back.x - p1_back.x;
                            const v0y = p3_back.y - p1_back.y;
                            const v1x = p2_back.x - p1_back.x;
                            const v1y = p2_back.y - p1_back.y;
                            const v2x = px - p1_back.x;
                            const v2y = py - p1_back.y;
                            
                            const dot00 = v0x * v0x + v0y * v0y;
                            const dot01 = v0x * v1x + v0y * v1y;
                            const dot02 = v0x * v2x + v0y * v2y;
                            const dot11 = v1x * v1x + v1y * v1y;
                            const dot12 = v1x * v2x + v1y * v2y;
                            
                            const invDenom = 1 / (dot00 * dot11 - dot01 * dot01);
                            const u = (dot11 * dot02 - dot01 * dot12) * invDenom;
                            const v = (dot00 * dot12 - dot01 * dot02) * invDenom;
                            
                            return (u >= 0) && (v >= 0) && (u + v <= 1);
                        }
                        
                        for (let y = minY_back; y <= maxY_back; y++) {
                            for (let x = minX_back; x <= maxX_back; x++) {
                                if (pointInTriangleBack(x, y)) {
                                    const v0x = p3_back.x - p1_back.x;
                                    const v0y = p3_back.y - p1_back.y;
                                    const v1x = p2_back.x - p1_back.x;
                                    const v1y = p2_back.y - p1_back.y;
                                    const v2x = x - p1_back.x;
                                    const v2y = y - p1_back.y;
                                    
                                    const dot00 = v0x * v0x + v0y * v0y;
                                    const dot01 = v0x * v1x + v0y * v1y;
                                    const dot02 = v0x * v2x + v0y * v2y;
                                    const dot11 = v1x * v1x + v1y * v1y;
                                    const dot12 = v1x * v2x + v1y * v2y;
                                    
                                    const invDenom = 1 / (dot00 * dot11 - dot01 * dot01);
                                    const u = (dot11 * dot02 - dot01 * dot12) * invDenom;
                                    const v = (dot00 * dot12 - dot01 * dot02) * invDenom;
                                    const w = 1 - u - v;
                                    
                                    const depth = w * p1_back.z + v * p2_back.z + u * p3_back.z;
                                    
                                    const idx = Math.floor(y) * width + Math.floor(x);
                                    if (depthBuffer[idx] < depth) {
                                        depthBuffer[idx] = depth;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    });
    
    // Helper to check if a point is occluded
    // A point is hidden only if every pixel around it has a surface in front of
    // it. Checking the 3x3 neighbourhood absorbs the sub-pixel offset between a
    // line and the surface it lies on, which otherwise dashes lines on steep faces
    function isOccluded(x, y, depth, tolerance = 1e-6) {
        const px = Math.floor(x);
        const py = Math.floor(y);
        for (let dy = -1; dy <= 1; dy++) {
            const row = py + dy;
            if (row < 0 || row >= height) return false;
            for (let dx = -1; dx <= 1; dx++) {
                const col = px + dx;
                if (col < 0 || col >= width) return false;
                // Larger z values are closer to camera in this coordinate system
                if (depth >= depthBuffer[row * width + col] - tolerance) return false;
            }
        }
        return true;
    }
    
    // Collect all visible line segments - these become the black engrave layer
    const elements = [];
    
    meshGroup.traverse((child) => {
        // Skip the on-screen red outline preview; the cut layer is traced below
        if (child.isLine && !child.userData.isOutline) {
            const positions = child.geometry.attributes.position;
            const points = [];
            for (let i = 0; i < positions.count; i++) {
                const point = new THREE.Vector3(
                    positions.getX(i),
                    positions.getY(i),
                    positions.getZ(i)
                );
                point.applyMatrix4(child.matrixWorld);
                points.push(point);
            }
            
            const color = child.material.color.getStyle();
            const opacity = child.material.opacity !== undefined ? child.material.opacity : 1.0;
            const lineWidth = child.material.linewidth || 1;
            
            // Break into segments and test visibility
            for (let i = 0; i < points.length - 1; i++) {
                const p1 = project3DTo2D(points[i]);
                const p2 = project3DTo2D(points[i + 1]);
                
                // Sample the segment about once per pixel and keep only the parts
                // that are visible, so lines stop where a surface hides them
                // instead of being drawn whole when any point shows
                const samples = Math.max(10, Math.ceil(Math.sqrt(
                    Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)
                )));
                const visible = new Uint8Array(samples + 1);
                for (let s = 0; s <= samples; s++) {
                    const t = s / samples;
                    const x = p1.x + (p2.x - p1.x) * t;
                    const y = p1.y + (p2.y - p1.y) * t;
                    const z = p1.z + (p2.z - p1.z) * t;
                    const onScreen = x >= 0 && x < width && y >= 0 && y < height;
                    visible[s] = onScreen && !isOccluded(x, y, z) ? 1 : 0;
                }
                
                // Bridge one- or two-sample gaps (depth-buffer noise), then emit each visible run
                for (let s = 1; s < samples; s++) {
                    if (visible[s]) continue;
                    let e = s;
                    while (e <= samples && !visible[e]) e++;
                    if (visible[s - 1] && e <= samples && e - s <= 2) visible.fill(1, s, e);
                    s = e;
                }
                
                const lerp = (t) => ({
                    x: p1.x + (p2.x - p1.x) * t,
                    y: p1.y + (p2.y - p1.y) * t,
                    z: p1.z + (p2.z - p1.z) * t
                });
                for (let s = 0; s <= samples; s++) {
                    if (!visible[s]) continue;
                    let e = s;
                    while (e + 1 <= samples && visible[e + 1]) e++;
                    if (e > s) {
                        const a = lerp(s / samples);
                        const b = lerp(e / samples);
                        elements.push({
                            type: 'line',
                            depth: (a.z + b.z) / 2,
                            p1: a, p2: b,
                            color, opacity, lineWidth
                        });
                    }
                    s = e;
                }
            }
        }
    });
    
    // Red cut layer: closed loops around the projected shape and its holes
    const cutContours = computeCutContours(meshGroup, params, camera, width, height);
    const holeCount = cutContours.filter(c => c.isHole).length;
    console.log(`Cut contours: ${cutContours.length - holeCount} outer, ${holeCount} holes`);
    
    // Sort by depth (back to front - lower z values first)
    elements.sort((a, b) => a.depth - b.depth);
    
    console.log(`Rendering: ${elements.length} engrave lines, ${cutContours.length} cut paths`);
    
    // Calculate bounding box of all elements
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    
    if (elements.length === 0 && cutContours.length === 0) {
        // No elements to render - create empty square with border
        const borderWidth = 3;
        const squareSize = 1000; // Default size
        svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${squareSize}" height="${squareSize}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${squareSize} ${squareSize}">
<rect width="100%" height="100%" fill="${params.backgroundColor}"/>
<rect x="0" y="0" width="${squareSize}" height="${squareSize}" fill="none" stroke="red" stroke-width="${borderWidth}"/>
</svg>`;
        
        const blob = new Blob([svg], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        const filename = `spiral_export_${Date.now()}.svg`;
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
        return;
    }
    
    elements.forEach(element => {
        minX = Math.min(minX, element.p1.x, element.p2.x);
        minY = Math.min(minY, element.p1.y, element.p2.y);
        maxX = Math.max(maxX, element.p1.x, element.p2.x);
        maxY = Math.max(maxY, element.p1.y, element.p2.y);
    });
    cutContours.forEach(contour => {
        contour.points.forEach(p => {
            minX = Math.min(minX, p.x);
            minY = Math.min(minY, p.y);
            maxX = Math.max(maxX, p.x);
            maxY = Math.max(maxY, p.y);
        });
    });
    
    // Add padding around the shape (10% of the size)
    const padding = Math.max((maxX - minX), (maxY - minY)) * 0.1;
    minX -= padding;
    minY -= padding;
    maxX += padding;
    maxY += padding;
    
    // Calculate dimensions and center
    const contentWidth = maxX - minX;
    const contentHeight = maxY - minY;
    const contentSize = Math.max(contentWidth, contentHeight); // Make it square
    
    // Calculate offset to center the content in the square
    const offsetX = (contentSize - contentWidth) / 2;
    const offsetY = (contentSize - contentHeight) / 2;
    
    // Final square dimensions (add border width to viewBox)
    const borderWidth = 3;
    const squareSize = contentSize + (borderWidth * 2);
    const finalMinX = minX - offsetX - borderWidth;
    const finalMinY = minY - offsetY - borderWidth;
    
    // Helper function to transform coordinates
    const transformX = (x) => x - finalMinX;
    const transformY = (y) => y - finalMinY;
    
    // Create new SVG with square viewBox and red border
    svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${squareSize}" height="${squareSize}" xmlns="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" viewBox="0 0 ${squareSize} ${squareSize}">
<rect width="100%" height="100%" fill="${params.backgroundColor}"/>
<rect x="0" y="0" width="${squareSize}" height="${squareSize}" fill="none" stroke="red" stroke-width="${borderWidth}"/>
<g id="engrave" inkscape:groupmode="layer" inkscape:label="Engrave">
`;
    
    // Engrave layer: visible wireframe lines (with coordinate transformation)
    elements.forEach(element => {
        const x1 = transformX(element.p1.x);
        const y1 = transformY(element.p1.y);
        const x2 = transformX(element.p2.x);
        const y2 = transformY(element.p2.y);
        svg += `<line x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}" stroke="${element.color}" stroke-width="${element.lineWidth}" stroke-opacity="${element.opacity}" stroke-linecap="round"/>\n`;
    });
    
    svg += `</g>\n<g id="cut" inkscape:groupmode="layer" inkscape:label="Cut">\n`;
    
    // Cut layer: one closed red path per contour, holes first so the part
    // is cut free last. Outline width scales with lineWidth for visibility
    const outlineWidth = params.lineWidth * 2.5;
    cutContours.forEach(contour => {
        const d = contour.points.map((p, i) =>
            `${i === 0 ? 'M' : 'L'}${transformX(p.x).toFixed(2)} ${transformY(p.y).toFixed(2)}`
        ).join(' ') + ' Z';
        svg += `<path d="${d}" fill="none" stroke="#ff0000" stroke-width="${outlineWidth}" stroke-linejoin="round"/>\n`;
    });
    
    svg += `</g>\n</svg>`;
    
    // Download SVG
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const filename = `spiral_export_${Date.now()}.svg`;
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}

