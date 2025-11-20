// Psychedelic mesh presets and custom upload helpers

(function () {
    if (typeof THREE === 'undefined') {
        console.warn('THREE.js not found - custom mesh helpers disabled.');
        return;
    }

    const tempColor = new THREE.Color();
    const tempVec = new THREE.Vector3();
    const palettes = {
        neon: ['#ff0080', '#ff8c00', '#ffe600', '#00ffd5', '#5400ff'],
        aurora: ['#00ffaa', '#00aaff', '#7c00ff', '#ff008c'],
        solar: ['#ff5f6d', '#ffc371', '#5d00ff', '#00f7ff'],
        cosmic: ['#00ffd2', '#8a2be2', '#ff7aff', '#2bffea']
    };

    function samplePalette(palette, t) {
        if (!palette || palette.length === 0) {
            tempColor.setHSL(t, 0.8, 0.5);
            return tempColor.clone();
        }
        const scaled = t * (palette.length - 1);
        const idx = Math.floor(scaled);
        const frac = scaled - idx;
        const c1 = new THREE.Color(palette[idx]);
        const c2 = new THREE.Color(palette[Math.min(idx + 1, palette.length - 1)]);
        return c1.lerp(c2, frac);
    }

    function applyGradient(geometry, palette, axis = 'y') {
        if (!geometry || !geometry.attributes || !geometry.attributes.position) return;
        const position = geometry.attributes.position;
        const axisValues = [];
        let min = Infinity;
        let max = -Infinity;

        for (let i = 0; i < position.count; i++) {
            tempVec.fromBufferAttribute(position, i);
            let value = tempVec[axis] || tempVec.y;
            if (axis === 'radius') {
                value = Math.sqrt(tempVec.x * tempVec.x + tempVec.z * tempVec.z);
            }
            axisValues.push(value);
            if (value < min) min = value;
            if (value > max) max = value;
        }

        const range = Math.max(0.0001, max - min);
        const colors = new Float32Array(position.count * 3);

        for (let i = 0; i < position.count; i++) {
            const t = (axisValues[i] - min) / range;
            const color = samplePalette(palette, t);
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }

        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.attributes.position.needsUpdate = true;
    }

    function applyRadialNoise(geometry, amplitude = 0.2, frequency = 2.0) {
        if (!geometry || !geometry.attributes || !geometry.attributes.position) return;
        const position = geometry.attributes.position;
        for (let i = 0; i < position.count; i++) {
            tempVec.fromBufferAttribute(position, i);
            const distortion =
                Math.sin(tempVec.x * frequency) +
                Math.sin(tempVec.y * frequency * 1.3) +
                Math.sin(tempVec.z * frequency * 0.7);
            const factor = 1 + (distortion / 3) * amplitude;
            tempVec.multiplyScalar(factor);
            position.setXYZ(i, tempVec.x, tempVec.y, tempVec.z);
        }
        position.needsUpdate = true;
        geometry.computeVertexNormals();
    }

    function normalizeGroup(root) {
        const box = new THREE.Box3().setFromObject(root);
        if (!isFinite(box.min.x) || !isFinite(box.max.x)) return;
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const largest = Math.max(size.x, size.y, size.z) || 1;

        root.traverse((child) => {
            if (child.geometry && child.geometry.isBufferGeometry) {
                child.geometry.translate(-center.x, -center.y, -center.z);
            }
        });

        const scale = 2.6 / largest;
        root.scale.setScalar(scale);
    }

    function buildNeonKnot() {
        const group = new THREE.Group();
        const knotGeometry = new THREE.TorusKnotGeometry(1.2, 0.35, 512, 64, 2, 3);
        applyGradient(knotGeometry, palettes.neon, 'y');
        const knotMaterial = new THREE.MeshStandardMaterial({
            vertexColors: true,
            metalness: 0.2,
            roughness: 0.3,
            emissive: new THREE.Color('#8c00ff'),
            emissiveIntensity: 0.45,
            transparent: true,
            opacity: 0.95
        });
        const knotMesh = new THREE.Mesh(knotGeometry, knotMaterial);
        group.add(knotMesh);

        const haloGeometry = new THREE.TorusGeometry(2.0, 0.015, 16, 256);
        const haloMaterial = new THREE.MeshBasicMaterial({
            color: '#ffffff',
            transparent: true,
            opacity: 0.25,
            depthWrite: false
        });
        const halo = new THREE.Mesh(haloGeometry, haloMaterial);
        group.add(halo);

        return {
            group,
            animations: [
                (time) => {
                    knotMesh.rotation.y = time * 0.4;
                    knotMesh.rotation.x = Math.sin(time * 0.3) * 0.3;
                    knotMaterial.emissiveIntensity = 0.45 + 0.15 * Math.sin(time * 2.0);
                    halo.rotation.x = time * 0.2;
                }
            ]
        };
    }

    function buildAuroraBloom() {
        const group = new THREE.Group();
        const shellGeometry = new THREE.IcosahedronGeometry(1.35, 3);
        applyRadialNoise(shellGeometry, 0.25, 3.2);
        applyGradient(shellGeometry, palettes.aurora, 'radius');
        const shellMaterial = new THREE.MeshStandardMaterial({
            vertexColors: true,
            metalness: 0.15,
            roughness: 0.35,
            emissive: new THREE.Color('#00f7ff'),
            emissiveIntensity: 0.35,
            transparent: true,
            opacity: 0.9
        });
        const shell = new THREE.Mesh(shellGeometry, shellMaterial);
        group.add(shell);

        const innerGeometry = new THREE.OctahedronGeometry(0.65, 2);
        applyGradient(innerGeometry, palettes.solar, 'y');
        const innerMaterial = new THREE.MeshStandardMaterial({
            vertexColors: true,
            metalness: 0.4,
            roughness: 0.2,
            emissive: new THREE.Color('#ff00c8'),
            emissiveIntensity: 0.4
        });
        const inner = new THREE.Mesh(innerGeometry, innerMaterial);
        group.add(inner);

        return {
            group,
            animations: [
                (time) => {
                    shell.rotation.y = time * 0.18;
                    shell.rotation.x = Math.sin(time * 0.4) * 0.2;
                    inner.rotation.y = -time * 0.35;
                    inner.rotation.x = Math.cos(time * 0.5) * 0.25;
                    innerMaterial.emissiveIntensity = 0.4 + 0.15 * Math.sin(time * 3.0);
                }
            ]
        };
    }

    function buildSolarRibbon() {
        const group = new THREE.Group();
        const pathPoints = [];
        const turns = 5;
        for (let i = 0; i <= 600; i++) {
            const t = (i / 600) * Math.PI * 2 * turns;
            const radius = 0.8 + 0.3 * Math.sin(t * 0.5);
            const x = radius * Math.cos(t);
            const y = 0.5 * Math.sin(t * 0.3);
            const z = radius * Math.sin(t);
            pathPoints.push(new THREE.Vector3(x, y, z));
        }
        const curve = new THREE.CatmullRomCurve3(pathPoints);
        const ribbonGeometry = new THREE.TubeGeometry(curve, 800, 0.18, 24, false);
        applyGradient(ribbonGeometry, palettes.solar, 'y');
        const ribbonMaterial = new THREE.MeshStandardMaterial({
            vertexColors: true,
            metalness: 0.3,
            roughness: 0.25,
            emissive: new THREE.Color('#ff7b00'),
            emissiveIntensity: 0.5,
            transparent: true,
            opacity: 0.93
        });
        const ribbon = new THREE.Mesh(ribbonGeometry, ribbonMaterial);
        group.add(ribbon);

        return {
            group,
            animations: [
                (time) => {
                    ribbon.rotation.y = time * 0.25;
                    ribbon.rotation.z = Math.sin(time * 0.3) * 0.2;
                    ribbonMaterial.emissiveIntensity = 0.45 + 0.2 * Math.sin(time * 4.0);
                }
            ]
        };
    }

    const psychedelicMeshPresets = [
        { id: 'neon-knot', name: 'Neon Torus Knot', build: buildNeonKnot },
        { id: 'aurora-bloom', name: 'Aurora Bloom', build: buildAuroraBloom },
        { id: 'solar-ribbon', name: 'Solar Ribbon', build: buildSolarRibbon }
    ];

    const customMeshState = {
        group: null,
        name: null,
        stats: null
    };

    function computeStats(group) {
        let vertices = 0;
        group.traverse((child) => {
            if (child.isMesh && child.geometry && child.geometry.attributes && child.geometry.attributes.position) {
                vertices += child.geometry.attributes.position.count;
            }
        });
        return {
            vertices,
            faces: Math.max(1, Math.round(vertices / 3))
        };
    }

    function prepareCustomGroup(sourceGroup) {
        const clone = sourceGroup.clone(true);
        clone.traverse((child) => {
            if (child.isMesh) {
                let geom = child.geometry;
                if (!geom.isBufferGeometry) {
                    geom = new THREE.BufferGeometry().fromGeometry(geom);
                } else {
                    geom = geom.clone();
                }
                geom.computeVertexNormals();
                applyGradient(geom, palettes.cosmic, 'radius');
                child.geometry = geom;
                child.material = new THREE.MeshStandardMaterial({
                    vertexColors: true,
                    metalness: 0.2,
                    roughness: 0.35,
                    emissive: new THREE.Color('#00ffe0'),
                    emissiveIntensity: 0.3,
                    transparent: true,
                    opacity: 0.9
                });
            }
        });
        normalizeGroup(clone);
        return clone;
    }

    function createPresetMeshInstance(presetId) {
        const preset = psychedelicMeshPresets.find((p) => p.id === presetId) || psychedelicMeshPresets[0];
        if (!preset) return null;
        return preset.build();
    }

    function setUploadedCustomMesh(sourceGroup, name = 'custom.obj') {
        if (!sourceGroup) return;
        const prepared = prepareCustomGroup(sourceGroup);
        customMeshState.group = prepared;
        customMeshState.name = name;
        customMeshState.stats = computeStats(prepared);
    }

    function getUploadedCustomMeshInstance() {
        if (!customMeshState.group) return null;
        const group = customMeshState.group.clone(true);
        return {
            group,
            animations: [
                (time) => {
                    group.rotation.y = time * 0.15;
                    group.rotation.x = Math.sin(time * 0.2) * 0.2;
                }
            ],
            metadata: {
                name: customMeshState.name,
                stats: customMeshState.stats
            }
        };
    }

    function getUploadedMeshStatus() {
        if (!customMeshState.group) {
            return 'No mesh uploaded yet.';
        }
        const stats = customMeshState.stats;
        if (stats) {
            const faceText = stats.faces.toLocaleString();
            return `${customMeshState.name} • ${faceText} faces`;
        }
        return `${customMeshState.name} ready`;
    }

    window.psychedelicMeshPresets = psychedelicMeshPresets;
    window.createPresetMeshInstance = createPresetMeshInstance;
    window.setUploadedCustomMesh = setUploadedCustomMesh;
    window.getUploadedCustomMeshInstance = getUploadedCustomMeshInstance;
    window.getUploadedMeshStatus = getUploadedMeshStatus;
})();
