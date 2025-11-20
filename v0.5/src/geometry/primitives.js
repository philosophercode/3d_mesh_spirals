// Primitive geometry generators and deformation helpers

const primitiveGenerators = {
    'circle-disc': {
        name: 'Circle / Disc',
        buildGeometry: (params) => {
            const radius = params.primitiveRadius || 1.5;
            const segments = Math.max(3, Math.floor(params.primitiveSegments || 48));
            return new THREE.CircleGeometry(radius, segments);
        },
        params: {
            primitiveRadius: { type: 'range', min: 0.2, max: 4, step: 0.01, label: 'Radius' },
            primitiveSegments: { type: 'range', min: 8, max: 160, step: 1, label: 'Segments' }
        }
    },
    'sphere': {
        name: 'Sphere',
        buildGeometry: (params) => {
            const radius = params.primitiveRadius || 1.8;
            const widthSegs = Math.max(8, Math.floor(params.primitiveWidthSegments || 32));
            const heightSegs = Math.max(6, Math.floor(params.primitiveHeightSegments || 24));
            return new THREE.SphereGeometry(radius, widthSegs, heightSegs);
        },
        params: {
            primitiveRadius: { type: 'range', min: 0.2, max: 4, step: 0.01, label: 'Radius' },
            primitiveWidthSegments: { type: 'range', min: 8, max: 160, step: 1, label: 'Horizontal Segments' },
            primitiveHeightSegments: { type: 'range', min: 6, max: 160, step: 1, label: 'Vertical Segments' }
        }
    },
    'cube': {
        name: 'Cube',
        buildGeometry: (params) => {
            const size = params.primitiveBoxSize || 2;
            const subdivisions = Math.max(1, Math.floor(params.primitiveBoxSubdivisions || 1));
            return new THREE.BoxGeometry(size, size, size, subdivisions, subdivisions, subdivisions);
        },
        params: {
            primitiveBoxSize: { type: 'range', min: 0.2, max: 4, step: 0.01, label: 'Size' },
            primitiveBoxSubdivisions: { type: 'range', min: 1, max: 12, step: 1, label: 'Subdivisions' }
        }
    },
    'pentagonal-prism': {
        name: 'Pentagonal Prism',
        buildGeometry: (params) => {
            const radius = params.primitiveRadius || 1.6;
            const height = params.primitiveHeight || 2.5;
            const stacks = Math.max(1, Math.floor(params.primitiveStackSegments || 1));
            return new THREE.CylinderGeometry(radius, radius, height, 5, stacks, false);
        },
        params: {
            primitiveRadius: { type: 'range', min: 0.2, max: 4, step: 0.01, label: 'Radius' },
            primitiveHeight: { type: 'range', min: 0.2, max: 5, step: 0.01, label: 'Height' },
            primitiveStackSegments: { type: 'range', min: 1, max: 20, step: 1, label: 'Height Segments' }
        }
    },
    'decagonal-prism': {
        name: 'Decagonal Prism (Decahedron)',
        buildGeometry: (params) => {
            const radiusTop = params.primitiveTopRadius || params.primitiveRadius || 1.4;
            const radiusBottom = params.primitiveBottomRadius || params.primitiveRadius || 1.4;
            const height = params.primitiveHeight || 2.2;
            const stacks = Math.max(1, Math.floor(params.primitiveStackSegments || 1));
            return new THREE.CylinderGeometry(radiusTop, radiusBottom, height, 10, stacks, false);
        },
        params: {
            primitiveTopRadius: { type: 'range', min: 0.2, max: 4, step: 0.01, label: 'Top Radius' },
            primitiveBottomRadius: { type: 'range', min: 0.2, max: 4, step: 0.01, label: 'Bottom Radius' },
            primitiveHeight: { type: 'range', min: 0.2, max: 5, step: 0.01, label: 'Height' },
            primitiveStackSegments: { type: 'range', min: 1, max: 20, step: 1, label: 'Height Segments' }
        }
    },
    'dodecahedron': {
        name: 'Dodecahedron',
        buildGeometry: (params) => {
            const radius = params.primitiveRadius || 1.8;
            const detail = Math.max(0, Math.floor(params.primitiveDetail || 0));
            return new THREE.DodecahedronGeometry(radius, detail);
        },
        params: {
            primitiveRadius: { type: 'range', min: 0.2, max: 4, step: 0.01, label: 'Radius' },
            primitiveDetail: { type: 'range', min: 0, max: 4, step: 1, label: 'Detail' }
        }
    }
};

const primitiveDeformers = {
    primitiveTwistAmount: { type: 'range', min: -4, max: 4, step: 0.01, label: 'Twist (turns)' },
    primitiveTaperAmount: { type: 'range', min: -1, max: 1, step: 0.01, label: 'Taper' },
    primitiveBendAmount: { type: 'range', min: -Math.PI, max: Math.PI, step: 0.01, label: 'Bend (radians)' },
    primitiveNoiseAmplitude: { type: 'range', min: 0, max: 1, step: 0.01, label: 'Noise Amplitude' },
    primitiveNoiseFrequency: { type: 'range', min: 0.5, max: 8, step: 0.1, label: 'Noise Frequency' },
    primitiveInflate: { type: 'range', min: -0.8, max: 1.5, step: 0.01, label: 'Inflate' }
};

function getPrimitiveGenerator(type) {
    return primitiveGenerators[type] || primitiveGenerators['sphere'];
}

function needsPrimitiveDeformation(params) {
    return (
        (params.primitiveTwistAmount && Math.abs(params.primitiveTwistAmount) > 0.0001) ||
        (params.primitiveTaperAmount && Math.abs(params.primitiveTaperAmount) > 0.0001) ||
        (params.primitiveBendAmount && Math.abs(params.primitiveBendAmount) > 0.0001) ||
        (params.primitiveNoiseAmplitude && Math.abs(params.primitiveNoiseAmplitude) > 0.0001) ||
        (params.primitiveInflate && Math.abs(params.primitiveInflate) > 0.0001)
    );
}

function pseudoNoise3(x, y, z, frequency) {
    const f = frequency;
    return Math.sin(f * x + 0.53) * Math.cos(f * y - 1.21) * Math.sin(f * z + 2.17);
}

function applyPrimitiveDeformations(geometry, params) {
    if (!geometry || !geometry.attributes || !geometry.attributes.position || !needsPrimitiveDeformation(params)) {
        return;
    }
    
    geometry.computeBoundingBox();
    const bbox = geometry.boundingBox || new THREE.Box3(
        new THREE.Vector3(-1, -1, -1),
        new THREE.Vector3(1, 1, 1)
    );
    const center = new THREE.Vector3();
    bbox.getCenter(center);
    const size = new THREE.Vector3();
    bbox.getSize(size);
    const halfSize = size.clone().multiplyScalar(0.5);
    
    const positions = geometry.attributes.position;
    const vertex = new THREE.Vector3();
    const radial = new THREE.Vector3();
    
    const twistTurns = params.primitiveTwistAmount || 0;
    const twistRadians = twistTurns * Math.PI * 2;
    const taperAmount = params.primitiveTaperAmount || 0;
    const bendAmount = params.primitiveBendAmount || 0;
    const noiseAmplitude = params.primitiveNoiseAmplitude || 0;
    const noiseFrequency = params.primitiveNoiseFrequency || 0;
    const inflateAmount = params.primitiveInflate || 0;
    
    const halfY = halfSize.y || 1;
    const halfX = halfSize.x || 1;
    
    for (let i = 0; i < positions.count; i++) {
        vertex.set(positions.getX(i), positions.getY(i), positions.getZ(i));
        vertex.sub(center);
        
        if (inflateAmount !== 0) {
            vertex.multiplyScalar(1 + inflateAmount);
        }
        
        if (taperAmount !== 0) {
            const normalizedY = halfY === 0 ? 0 : ((vertex.y / halfY) + 1) * 0.5; // 0..1
            const taperScale = 1 + taperAmount * (normalizedY - 0.5);
            vertex.x *= taperScale;
            vertex.z *= taperScale;
        }
        
        if (twistRadians !== 0) {
            const normalizedY = halfY === 0 ? 0.5 : ((vertex.y / halfY) + 1) * 0.5;
            const angle = twistRadians * (normalizedY - 0.5);
            const cos = Math.cos(angle);
            const sin = Math.sin(angle);
            const x = vertex.x * cos - vertex.z * sin;
            const z = vertex.x * sin + vertex.z * cos;
            vertex.x = x;
            vertex.z = z;
        }
        
        if (bendAmount !== 0) {
            const normalizedX = halfX === 0 ? 0.5 : ((vertex.x / halfX) + 1) * 0.5;
            const angle = bendAmount * (normalizedX - 0.5);
            const cos = Math.cos(angle);
            const sin = Math.sin(angle);
            const y = vertex.y * cos - vertex.z * sin;
            const z = vertex.y * sin + vertex.z * cos;
            vertex.y = y;
            vertex.z = z;
        }
        
        if (noiseAmplitude !== 0 && noiseFrequency !== 0) {
            const noise = pseudoNoise3(vertex.x, vertex.y, vertex.z, noiseFrequency) * noiseAmplitude;
            radial.copy(vertex);
            const len = radial.length();
            if (len > 0.0001) {
                radial.multiplyScalar(1 / len);
            } else {
                radial.set(0, 1, 0);
            }
            vertex.addScaledVector(radial, noise);
        }
        
        vertex.add(center);
        positions.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }
    
    positions.needsUpdate = true;
    geometry.computeVertexNormals();
    geometry.computeBoundingSphere();
    geometry.computeBoundingBox();
}

function buildPrimitiveGeometry(params) {
    const generator = getPrimitiveGenerator(params.primitiveType || 'sphere');
    if (!generator || typeof generator.buildGeometry !== 'function') {
        return new THREE.BufferGeometry();
    }
    
    let geometry = generator.buildGeometry(params);
    if (!geometry) {
        geometry = new THREE.BufferGeometry();
    }
    
    if (geometry && !geometry.isBufferGeometry && geometry.toBufferGeometry) {
        geometry = geometry.toBufferGeometry();
    }
    
    applyPrimitiveDeformations(geometry, params);
    return geometry;
}

