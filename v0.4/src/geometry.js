function computeRadiusAtU(u, params) {
    let r;
    if (params.mode === 'Exponential') {
        r = params.r0 * Math.exp(-params.k * u);
    } else {
        r = params.r0 - params.alpha * u;
    }
    return Math.max(r, params.rMin);
}

function buildGeometry(params) {
    const vertices = [];
    const indices = [];
    const uMax = 2 * Math.PI * params.N;

    // Generate vertices for outer surface
    for (let i = 0; i <= params.uDiv; i++) {
        const u = uMax * i / params.uDiv;
        const rTube = computeRadiusAtU(u, params);

        for (let j = 0; j <= params.vDiv; j++) {
            const vBase = 2 * Math.PI * j / params.vDiv;
            const v = vBase + params.twist * (u / (2 * Math.PI));

            const rt = rTube * (1 + params.epsilon * Math.cos(v));
            const x = (params.R + rt * Math.cos(v)) * Math.cos(u);
            const y = (params.R + rt * Math.cos(v)) * Math.sin(u);
            const z = rt * Math.sin(v) + params.h * (u / (2 * Math.PI));

            vertices.push(x, y, z);
        }
    }

    // Generate indices for outer surface triangles
    for (let i = 0; i < params.uDiv; i++) {
        for (let j = 0; j < params.vDiv; j++) {
            const a = i * (params.vDiv + 1) + j;
            const b = (i + 1) * (params.vDiv + 1) + j;
            const c = (i + 1) * (params.vDiv + 1) + (j + 1);
            const d = i * (params.vDiv + 1) + (j + 1);

            indices.push(a, b, d);
            indices.push(b, c, d);
        }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();

    return geometry;
}

function buildThickWallGeometry(params) {
    const vertices = [];
    const indices = [];
    const uMax = 2 * Math.PI * params.N;
    const numOuterVerts = (params.uDiv + 1) * (params.vDiv + 1);

    // Generate vertices for OUTER surface
    for (let i = 0; i <= params.uDiv; i++) {
        const u = uMax * i / params.uDiv;
        const rTube = computeRadiusAtU(u, params);

        for (let j = 0; j <= params.vDiv; j++) {
            const vBase = 2 * Math.PI * j / params.vDiv;
            const v = vBase + params.twist * (u / (2 * Math.PI));

            const rt = rTube * (1 + params.epsilon * Math.cos(v));
            const x = (params.R + rt * Math.cos(v)) * Math.cos(u);
            const y = (params.R + rt * Math.cos(v)) * Math.sin(u);
            const z = rt * Math.sin(v) + params.h * (u / (2 * Math.PI));

            vertices.push(x, y, z);
        }
    }

    // Generate vertices for INNER surface
    for (let i = 0; i <= params.uDiv; i++) {
        const u = uMax * i / params.uDiv;
        const rTube = computeRadiusAtU(u, params);
        const rTubeInner = rTube - params.wallThickness;

        for (let j = 0; j <= params.vDiv; j++) {
            const vBase = 2 * Math.PI * j / params.vDiv;
            const v = vBase + params.twist * (u / (2 * Math.PI));

            const rt = rTubeInner * (1 + params.epsilon * Math.cos(v));
            const x = (params.R + rt * Math.cos(v)) * Math.cos(u);
            const y = (params.R + rt * Math.cos(v)) * Math.sin(u);
            const z = rt * Math.sin(v) + params.h * (u / (2 * Math.PI));

            vertices.push(x, y, z);
        }
    }

    // Outer surface triangles
    for (let i = 0; i < params.uDiv; i++) {
        for (let j = 0; j < params.vDiv; j++) {
            const a = i * (params.vDiv + 1) + j;
            const b = (i + 1) * (params.vDiv + 1) + j;
            const c = (i + 1) * (params.vDiv + 1) + (j + 1);
            const d = i * (params.vDiv + 1) + (j + 1);

            indices.push(a, b, d);
            indices.push(b, c, d);
        }
    }

    // Inner surface triangles (reversed winding)
    for (let i = 0; i < params.uDiv; i++) {
        for (let j = 0; j < params.vDiv; j++) {
            const a = numOuterVerts + i * (params.vDiv + 1) + j;
            const b = numOuterVerts + (i + 1) * (params.vDiv + 1) + j;
            const c = numOuterVerts + (i + 1) * (params.vDiv + 1) + (j + 1);
            const d = numOuterVerts + i * (params.vDiv + 1) + (j + 1);

            indices.push(a, d, b);
            indices.push(b, d, c);
        }
    }

    // Cap at start (u=0)
    for (let j = 0; j < params.vDiv; j++) {
        const outerA = j;
        const outerB = j + 1;
        const innerA = numOuterVerts + j;
        const innerB = numOuterVerts + j + 1;

        indices.push(outerA, innerA, outerB);
        indices.push(outerB, innerA, innerB);
    }

    // Cap at end (u=uMax)
    const lastRing = params.uDiv * (params.vDiv + 1);
    for (let j = 0; j < params.vDiv; j++) {
        const outerA = lastRing + j;
        const outerB = lastRing + j + 1;
        const innerA = numOuterVerts + lastRing + j;
        const innerB = numOuterVerts + lastRing + j + 1;

        indices.push(outerA, outerB, innerA);
        indices.push(outerB, innerB, innerA);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();

    return geometry;
}

function buildWireframeLines(params) {
    const uMax = 2 * Math.PI * params.N;

    // Helper to compute position with optional inner surface offset
    function getPosition(u, v, isInner = false) {
        const rTube = computeRadiusAtU(u, params);
        const vTwisted = v + params.twist * (u / (2 * Math.PI));

        // Apply wall thickness for inner surface
        const effectiveRTube = isInner ? rTube - params.wallThickness : rTube;
        const rt = effectiveRTube * (1 + params.epsilon * Math.cos(vTwisted));

        const x = (params.R + rt * Math.cos(vTwisted)) * Math.cos(u);
        const y = (params.R + rt * Math.cos(vTwisted)) * Math.sin(u);
        const z = rt * Math.sin(vTwisted) + params.h * (u / (2 * Math.PI));
        return new THREE.Vector3(x, y, z);
    }

    // Build lines for a surface (outer or inner)
    function buildSurfaceLines(isInner, color) {
        const surfaceLines = [];

        // Meridians (constant v, varying u) - show many more lines for Denes look
        if (params.showMeridians) {
            const vStep = Math.max(1, Math.floor(params.vDiv / 48)); // doubled density
            for (let j = 0; j < params.vDiv; j += vStep) {
                const points = [];
                const v = 2 * Math.PI * j / params.vDiv;
                for (let i = 0; i <= params.uDiv; i++) {
                    const u = uMax * i / params.uDiv;
                    points.push(getPosition(u, v, isInner));
                }
                const geometry = new THREE.BufferGeometry().setFromPoints(points);
                const line = new THREE.Line(geometry, new THREE.LineBasicMaterial({
                    color: color,
                    linewidth: params.lineWidth,
                    transparent: isInner,
                    opacity: isInner ? 0.7 : 1.0
                }));
                surfaceLines.push(line);
            }
        }

        // Parallels (constant u, varying v) - show many more lines for Denes look
        if (params.showParallels) {
            const uStep = Math.max(1, Math.floor(params.uDiv / 80)); // much denser
            for (let i = 0; i <= params.uDiv; i += uStep) {
                const points = [];
                const u = uMax * i / params.uDiv;
                for (let j = 0; j <= params.vDiv; j++) {
                    const v = 2 * Math.PI * j / params.vDiv;
                    points.push(getPosition(u, v, isInner));
                }
                const geometry = new THREE.BufferGeometry().setFromPoints(points);
                const line = new THREE.Line(geometry, new THREE.LineBasicMaterial({
                    color: color,
                    linewidth: params.lineWidth,
                    transparent: isInner,
                    opacity: isInner ? 0.7 : 1.0
                }));
                surfaceLines.push(line);
            }
        }

        return surfaceLines;
    }

    // Build outer surface
    const outerColor = new THREE.Color(params.outerColor);
    const outerLines = buildSurfaceLines(false, outerColor);

    // Build inner surface if enabled
    const innerLines = params.showInnerSurface ? buildSurfaceLines(true, new THREE.Color(params.innerColor)) : [];

    // Build wall depth lines at caps (start and end)
    const depthLines = [];
    if (params.showInnerSurface) {
        // Start cap (u=0) - outer edge
        const startOuterPoints = [];
        for (let j = 0; j <= params.vDiv; j++) {
            const v = 2 * Math.PI * j / params.vDiv;
            startOuterPoints.push(getPosition(0, v, false));
        }
        const startOuterGeom = new THREE.BufferGeometry().setFromPoints(startOuterPoints);
        const startOuterLine = new THREE.Line(startOuterGeom, new THREE.LineBasicMaterial({
            color: outerColor,
            linewidth: params.lineWidth
        }));
        depthLines.push(startOuterLine);

        // Start cap (u=0) - inner edge
        const startInnerPoints = [];
        for (let j = 0; j <= params.vDiv; j++) {
            const v = 2 * Math.PI * j / params.vDiv;
            startInnerPoints.push(getPosition(0, v, true));
        }
        const startInnerGeom = new THREE.BufferGeometry().setFromPoints(startInnerPoints);
        const startInnerLine = new THREE.Line(startInnerGeom, new THREE.LineBasicMaterial({
            color: new THREE.Color(params.innerColor),
            linewidth: params.lineWidth,
            transparent: true,
            opacity: 0.7
        }));
        depthLines.push(startInnerLine);

        // End cap (u=uMax) - outer edge
        const endOuterPoints = [];
        for (let j = 0; j <= params.vDiv; j++) {
            const v = 2 * Math.PI * j / params.vDiv;
            endOuterPoints.push(getPosition(uMax, v, false));
        }
        const endOuterGeom = new THREE.BufferGeometry().setFromPoints(endOuterPoints);
        const endOuterLine = new THREE.Line(endOuterGeom, new THREE.LineBasicMaterial({
            color: outerColor,
            linewidth: params.lineWidth
        }));
        depthLines.push(endOuterLine);

        // End cap (u=uMax) - inner edge
        const endInnerPoints = [];
        for (let j = 0; j <= params.vDiv; j++) {
            const v = 2 * Math.PI * j / params.vDiv;
            endInnerPoints.push(getPosition(uMax, v, true));
        }
        const endInnerGeom = new THREE.BufferGeometry().setFromPoints(endInnerPoints);
        const endInnerLine = new THREE.Line(endInnerGeom, new THREE.LineBasicMaterial({
            color: new THREE.Color(params.innerColor),
            linewidth: params.lineWidth,
            transparent: true,
            opacity: 0.7
        }));
        depthLines.push(endInnerLine);
    }

    return { outerLines, innerLines, depthLines };
}

function buildCrossSectionWall(params, u) {
    const rTube = computeRadiusAtU(u, params);

    const vertices = [];
    const indices = [];

    // Generate vertices for the cross-section ring (outer and inner edges)
    for (let j = 0; j <= params.vDiv; j++) {
        const vBase = 2 * Math.PI * j / params.vDiv;
        const v = vBase + params.twist * (u / (2 * Math.PI));

        // Outer edge vertex
        const rtOuter = rTube * (1 + params.epsilon * Math.cos(v));
        const xOuter = (params.R + rtOuter * Math.cos(v)) * Math.cos(u);
        const yOuter = (params.R + rtOuter * Math.cos(v)) * Math.sin(u);
        const zOuter = rtOuter * Math.sin(v) + params.h * (u / (2 * Math.PI));
        vertices.push(xOuter, yOuter, zOuter);

        // Inner edge vertex
        const rTubeInner = rTube - params.wallThickness;
        const rtInner = rTubeInner * (1 + params.epsilon * Math.cos(v));
        const xInner = (params.R + rtInner * Math.cos(v)) * Math.cos(u);
        const yInner = (params.R + rtInner * Math.cos(v)) * Math.sin(u);
        const zInner = rtInner * Math.sin(v) + params.h * (u / (2 * Math.PI));
        vertices.push(xInner, yInner, zInner);
    }

    // Generate triangles for the cross-section wall
    for (let j = 0; j < params.vDiv; j++) {
        const outerA = j * 2;
        const innerA = j * 2 + 1;
        const outerB = (j + 1) * 2;
        const innerB = (j + 1) * 2 + 1;

        // Create quad as two triangles
        indices.push(outerA, outerB, innerA);
        indices.push(outerB, innerB, innerA);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();

    return geometry;
}

function buildCrossSectionWireframe(params, u) {
    const rTube = computeRadiusAtU(u, params);

    const outerPoints = [];
    const innerPoints = [];

    for (let j = 0; j <= params.vDiv; j++) {
        const vBase = 2 * Math.PI * j / params.vDiv;
        const v = vBase + params.twist * (u / (2 * Math.PI));

        // Outer edge
        const rtOuter = rTube * (1 + params.epsilon * Math.cos(v));
        const xOuter = (params.R + rtOuter * Math.cos(v)) * Math.cos(u);
        const yOuter = (params.R + rtOuter * Math.cos(v)) * Math.sin(u);
        const zOuter = rtOuter * Math.sin(v) + params.h * (u / (2 * Math.PI));
        outerPoints.push(new THREE.Vector3(xOuter, yOuter, zOuter));

        // Inner edge
        const rTubeInner = rTube - params.wallThickness;
        const rtInner = rTubeInner * (1 + params.epsilon * Math.cos(v));
        const xInner = (params.R + rtInner * Math.cos(v)) * Math.cos(u);
        const yInner = (params.R + rtInner * Math.cos(v)) * Math.sin(u);
        const zInner = rtInner * Math.sin(v) + params.h * (u / (2 * Math.PI));
        innerPoints.push(new THREE.Vector3(xInner, yInner, zInner));
    }

    const lines = [];

    // Outer edge line (thicker)
    const outerGeom = new THREE.BufferGeometry().setFromPoints(outerPoints);
    const outerLine = new THREE.Line(outerGeom, new THREE.LineBasicMaterial({
        color: new THREE.Color(params.crossSectionColor),
        linewidth: params.lineWidth * 2
    }));
    lines.push(outerLine);

    // Inner edge line (thicker)
    const innerGeom = new THREE.BufferGeometry().setFromPoints(innerPoints);
    const innerLine = new THREE.Line(innerGeom, new THREE.LineBasicMaterial({
        color: new THREE.Color(params.crossSectionColor),
        linewidth: params.lineWidth * 2
    }));
    lines.push(innerLine);

    // Dense radial spokes connecting outer to inner
    const spokeStep = Math.max(1, Math.floor(params.vDiv / params.crossSectionSpokes));
    for (let j = 0; j < params.vDiv; j += spokeStep) {
        const spokePoints = [outerPoints[j], innerPoints[j]];
        const spokeGeom = new THREE.BufferGeometry().setFromPoints(spokePoints);
        const spokeLine = new THREE.Line(spokeGeom, new THREE.LineBasicMaterial({
            color: new THREE.Color(params.crossSectionColor),
            linewidth: params.lineWidth
        }));
        lines.push(spokeLine);
    }

    // Concentric circles at different radii
    for (let c = 1; c <= params.crossSectionCircles; c++) {
        const t = c / (params.crossSectionCircles + 1);
        const circlePoints = [];

        for (let j = 0; j <= params.vDiv; j++) {
            const vBase = 2 * Math.PI * j / params.vDiv;
            const v = vBase + params.twist * (u / (2 * Math.PI));

            // Interpolate between inner and outer
            const rTubeInner = rTube - params.wallThickness;
            const rtOuter = rTube * (1 + params.epsilon * Math.cos(v));
            const rtInner = rTubeInner * (1 + params.epsilon * Math.cos(v));
            const rt = rtInner + t * (rtOuter - rtInner);

            const x = (params.R + rt * Math.cos(v)) * Math.cos(u);
            const y = (params.R + rt * Math.cos(v)) * Math.sin(u);
            const z = rt * Math.sin(v) + params.h * (u / (2 * Math.PI));
            circlePoints.push(new THREE.Vector3(x, y, z));
        }

        const circleGeom = new THREE.BufferGeometry().setFromPoints(circlePoints);
        const circleLine = new THREE.Line(circleGeom, new THREE.LineBasicMaterial({
            color: new THREE.Color(params.crossSectionColor),
            linewidth: params.lineWidth,
            transparent: true,
            opacity: 0.6
        }));
        lines.push(circleLine);
    }

    return lines;
}

