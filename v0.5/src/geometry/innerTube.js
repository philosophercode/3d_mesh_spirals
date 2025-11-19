// Generate inner tube surface geometry

function buildInnerTubeGeometry(params) {
    const vertices = [];
    const indices = [];
    const uMax = 2 * Math.PI * params.N;
    
    // Generate vertices for inner surface
    for (let i = 0; i <= params.uDiv; i++) {
        const u = uMax * i / params.uDiv;
        const rTube = computeRadiusAtU(u, params);
        
        for (let j = 0; j <= params.vDiv; j++) {
            const v = 2 * Math.PI * j / params.vDiv;
            const pos = computePosition(u, v, rTube, params, true);
            vertices.push(pos.x, pos.y, pos.z);
        }
    }
    
    // Generate indices for inner surface triangles (reversed winding for inside)
    for (let i = 0; i < params.uDiv; i++) {
        for (let j = 0; j < params.vDiv; j++) {
            const a = i * (params.vDiv + 1) + j;
            const b = (i + 1) * (params.vDiv + 1) + j;
            const c = (i + 1) * (params.vDiv + 1) + (j + 1);
            const d = i * (params.vDiv + 1) + (j + 1);
            
            // Reversed winding for inner surface
            indices.push(a, d, b);
            indices.push(b, d, c);
        }
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    
    return geometry;
}

