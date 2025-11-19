// Generate tube cap geometry for start (u=0) and end (u=uMax)

function buildTubeCapGeometry(params, u) {
    const vertices = [];
    const indices = [];
    const rTube = computeRadiusAtU(u, params);
    
    // Generate vertices for outer and inner edges of the cap
    for (let j = 0; j <= params.vDiv; j++) {
        const v = 2 * Math.PI * j / params.vDiv;
        
        // Outer edge vertex
        const outerPos = computePosition(u, v, rTube, params, false);
        vertices.push(outerPos.x, outerPos.y, outerPos.z);
        
        // Inner edge vertex
        const innerPos = computePosition(u, v, rTube, params, true);
        vertices.push(innerPos.x, innerPos.y, innerPos.z);
    }
    
    // Generate triangles connecting outer to inner edge
    for (let j = 0; j < params.vDiv; j++) {
        const outerA = j * 2;
        const innerA = j * 2 + 1;
        const outerB = (j + 1) * 2;
        const innerB = (j + 1) * 2 + 1;
        
        // Create quad as two triangles
        // Winding depends on whether this is start (u=0) or end (u=uMax)
        if (u === 0) {
            // Start cap: outer to inner
            indices.push(outerA, innerA, outerB);
            indices.push(outerB, innerA, innerB);
        } else {
            // End cap: outer to inner (reversed)
            indices.push(outerA, outerB, innerA);
            indices.push(outerB, innerB, innerA);
        }
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    
    return geometry;
}

