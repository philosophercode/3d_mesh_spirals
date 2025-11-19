// Generate outer tube surface geometry

function buildOuterTubeGeometry(params) {
    const vertices = [];
    const indices = [];
    const uMax = 2 * Math.PI * params.N;
    
    // Generate vertices for outer surface
    for (let i = 0; i <= params.uDiv; i++) {
        const u = uMax * i / params.uDiv;
        const rTube = computeRadiusAtU(u, params);
        
        for (let j = 0; j <= params.vDiv; j++) {
            const v = 2 * Math.PI * j / params.vDiv;
            const pos = computePosition(u, v, rTube, params, false);
            vertices.push(pos.x, pos.y, pos.z);
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

