// Mesh creation and updates - combines inner tube, outer tube, and caps

function buildWireframeLines(params) {
    const uMax = 2 * Math.PI * params.N;
    
    // Helper to get position
    function getPosition(u, v, isInner = false) {
        const rTube = computeRadiusAtU(u, params);
        return computePosition(u, v, rTube, params, isInner);
    }
    
    // Build lines for a surface (outer or inner)
    function buildSurfaceLines(isInner, color) {
        const surfaceLines = [];
        
        // Meridians (constant v, varying u)
        if (params.showMeridians) {
            const vStep = Math.max(1, Math.floor(params.vDiv / 48));
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
        
        // Parallels (constant u, varying v)
        if (params.showParallels) {
            const uStep = Math.max(1, Math.floor(params.uDiv / 80));
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
    const innerLines = params.showInnerSurface 
        ? buildSurfaceLines(true, new THREE.Color(params.innerColor)) 
        : [];
    
    // Build wall depth lines at caps (start and end)
    const depthLines = [];
    
    // Build cap lines (always show caps, not just when inner surface is shown)
    function buildCapLines(u, isStart) {
        const capLines = [];
        
        // Outer edge circle - always visible
        const outerPoints = [];
        for (let j = 0; j <= params.vDiv; j++) {
            const v = 2 * Math.PI * j / params.vDiv;
            outerPoints.push(getPosition(u, v, false));
        }
        const outerGeom = new THREE.BufferGeometry().setFromPoints(outerPoints);
        const outerLine = new THREE.Line(outerGeom, new THREE.LineBasicMaterial({
            color: outerColor,
            linewidth: params.lineWidth
        }));
        capLines.push(outerLine);
        
        // Inner edge circle (if inner surface is shown)
        if (params.showInnerSurface) {
            const innerPoints = [];
            for (let j = 0; j <= params.vDiv; j++) {
                const v = 2 * Math.PI * j / params.vDiv;
                innerPoints.push(getPosition(u, v, true));
            }
            const innerGeom = new THREE.BufferGeometry().setFromPoints(innerPoints);
            const innerLine = new THREE.Line(innerGeom, new THREE.LineBasicMaterial({
                color: new THREE.Color(params.innerColor),
                linewidth: params.lineWidth,
                transparent: true,
                opacity: 0.7
            }));
            capLines.push(innerLine);
            
            // Radial lines connecting outer to inner edge
            const radialStep = Math.max(1, Math.floor(params.vDiv / 24)); // Show radial spokes
            for (let j = 0; j < params.vDiv; j += radialStep) {
                const v = 2 * Math.PI * j / params.vDiv;
                const outerPos = getPosition(u, v, false);
                const innerPos = getPosition(u, v, true);
                const radialPoints = [outerPos, innerPos];
                const radialGeom = new THREE.BufferGeometry().setFromPoints(radialPoints);
                const radialLine = new THREE.Line(radialGeom, new THREE.LineBasicMaterial({
                    color: outerColor,
                    linewidth: params.lineWidth,
                    transparent: true,
                    opacity: 0.8
                }));
                capLines.push(radialLine);
            }
        } else {
            // When inner surface is not shown, add radial lines from center to outer edge
            // to make the cap more visible
            const centerPos = getPosition(u, 0, false);
            // Use the position at the major radius as the center
            const rTube = computeRadiusAtU(u, params);
            const centerX = params.R * Math.cos(u);
            const centerY = params.R * Math.sin(u);
            const centerZ = params.h * (u / (2 * Math.PI));
            const center = new THREE.Vector3(centerX, centerY, centerZ);
            
            const radialStep = Math.max(1, Math.floor(params.vDiv / 16)); // Show radial spokes
            for (let j = 0; j < params.vDiv; j += radialStep) {
                const v = 2 * Math.PI * j / params.vDiv;
                const outerPos = getPosition(u, v, false);
                const radialPoints = [center, outerPos];
                const radialGeom = new THREE.BufferGeometry().setFromPoints(radialPoints);
                const radialLine = new THREE.Line(radialGeom, new THREE.LineBasicMaterial({
                    color: outerColor,
                    linewidth: params.lineWidth,
                    transparent: true,
                    opacity: 0.6
                }));
                capLines.push(radialLine);
            }
        }
        
        return capLines;
    }
    
    // Add start cap lines (u=0)
    depthLines.push(...buildCapLines(0, true));
    
    // Add end cap lines (u=uMax)
    depthLines.push(...buildCapLines(uMax, false));
    
    return { outerLines, innerLines, depthLines };
}

function adjustExternalSurfaceOpacity(group, renderStyle) {
    group.traverse((child) => {
        if (child.isMesh && child.material) {
            const mat = child.material;
            if (!mat.userData) mat.userData = {};
            if (mat.userData.baseOpacity === undefined) {
                mat.userData.baseOpacity = mat.opacity !== undefined ? mat.opacity : 1;
            }
            const base = mat.userData.baseOpacity;
            if (renderStyle === 'Wireframe') {
                mat.transparent = true;
                mat.opacity = Math.min(base, 0.3);
            } else if (renderStyle === 'Hidden-line') {
                mat.transparent = true;
                mat.opacity = 0.0;
            } else {
                mat.opacity = base;
                mat.transparent = base < 1;
            }
        }
    });
}

function attachEdgeOverlay(group, params, opacity = 0.9) {
    group.traverse((child) => {
        if (child.isMesh && child.geometry) {
            const edgesGeom = new THREE.EdgesGeometry(child.geometry, 18);
            const lineMat = new THREE.LineBasicMaterial({
                color: params.outerColor || '#ffffff',
                linewidth: params.lineWidth,
                transparent: true,
                opacity,
                depthTest: true,
                depthWrite: false
            });
            const edges = new THREE.LineSegments(edgesGeom, lineMat);
            edges.renderOrder = 2;
            edges.position.set(0, 0, 0);
            edges.rotation.set(0, 0, 0);
            edges.scale.set(1, 1, 1);
            child.add(edges);
        }
    });
}

function attachDepthOccluders(group) {
    group.traverse((child) => {
        if (child.isMesh && child.geometry) {
            const depthMaterial = new THREE.MeshBasicMaterial({
                colorWrite: false,
                depthWrite: true,
                depthTest: true,
                side: THREE.DoubleSide
            });
            const depthMesh = new THREE.Mesh(child.geometry, depthMaterial);
            depthMesh.renderOrder = 0;
            depthMesh.position.set(0, 0, 0);
            depthMesh.rotation.set(0, 0, 0);
            depthMesh.scale.set(1, 1, 1);
            child.add(depthMesh);
        }
    });
}

function createPlaceholderMesh() {
    const group = new THREE.Group();
    const ico = new THREE.IcosahedronGeometry(0.8, 0);
    const material = new THREE.MeshBasicMaterial({
        color: 0xff0080,
        wireframe: true
    });
    const mesh = new THREE.Mesh(ico, material);
    group.add(mesh);
    const axes = new THREE.AxesHelper(1.5);
    group.add(axes);
    return {
        group,
        animations: [
            (time) => {
                mesh.rotation.y = time * 0.4;
                mesh.rotation.x = Math.sin(time * 0.7) * 0.2;
            }
        ]
    };
}

function renderExternalMesh(meshGroup, params) {
    let instance = null;
    if (params.meshSource === 'preset' && typeof createPresetMeshInstance === 'function') {
        instance = createPresetMeshInstance(params.presetMeshId);
    } else if (params.meshSource === 'custom' && typeof getUploadedCustomMeshInstance === 'function') {
        instance = getUploadedCustomMeshInstance();
    }
    if (!instance || !instance.group) {
        const placeholder = createPlaceholderMesh();
        meshGroup.add(placeholder.group);
        meshGroup.userData.animations = placeholder.animations;
        return;
    }

    const root = instance.group;
    adjustExternalSurfaceOpacity(root, params.renderStyle);
    if (params.renderStyle === 'Wireframe' || params.renderStyle === 'Hidden-line') {
        if (params.renderStyle === 'Hidden-line') {
            attachDepthOccluders(root);
        }
        attachEdgeOverlay(root, params, params.renderStyle === 'Wireframe' ? 0.9 : 1.0);
    }

    meshGroup.add(root);
    meshGroup.userData.animations = instance.animations || [];
}

// Outline creation is now in outline.js - using createOutlineLines from there

function updateMesh(meshGroup, params, camera = null) {
    // Clear existing mesh
    meshGroup.clear();
    meshGroup.userData.animations = [];

    if (params.meshSource && params.meshSource !== 'procedural') {
        renderExternalMesh(meshGroup, params);
        return;
    }
    
    if (params.renderStyle === 'Solid') {
        // Solid rendering: use geometry meshes
        const outerGeometry = buildOuterTubeGeometry(params);
        const outerMaterial = new THREE.MeshStandardMaterial({
            color: params.outerColor,
            side: THREE.DoubleSide,
            metalness: 0.3,
            roughness: 0.6
        });
        const outerMesh = new THREE.Mesh(outerGeometry, outerMaterial);
        meshGroup.add(outerMesh);
        
        if (params.showInnerSurface) {
            const innerGeometry = buildInnerTubeGeometry(params);
            const innerMaterial = new THREE.MeshStandardMaterial({
                color: params.innerColor,
                side: THREE.DoubleSide,
                metalness: 0.3,
                roughness: 0.6
            });
            const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
            meshGroup.add(innerMesh);
        }
        
        // Add caps
        const uMax = 2 * Math.PI * params.N;
        const startCapGeometry = buildTubeCapGeometry(params, 0);
        const endCapGeometry = buildTubeCapGeometry(params, uMax);
        const capMaterial = new THREE.MeshStandardMaterial({
            color: params.outerColor,
            side: THREE.DoubleSide,
            metalness: 0.5,
            roughness: 0.4
        });
        meshGroup.add(new THREE.Mesh(startCapGeometry, capMaterial));
        meshGroup.add(new THREE.Mesh(endCapGeometry, capMaterial));
        
    } else if (params.renderStyle === 'Wireframe') {
        // Wireframe rendering
        const { outerLines, innerLines, depthLines } = buildWireframeLines(params);
        
        // If occlusion is enabled, use depth meshes
        if (params.occludeInner) {
            // Create depth meshes for occlusion
            const outerGeometry = buildOuterTubeGeometry(params);
            const depthMaterial = new THREE.MeshBasicMaterial({
                colorWrite: false,
                depthWrite: true,  // Explicitly write to depth buffer
                depthTest: true,
                side: THREE.FrontSide
            });
            const depthMesh = new THREE.Mesh(outerGeometry, depthMaterial);
            depthMesh.renderOrder = 0;  // Render first
            meshGroup.add(depthMesh);
            
            // Add cap depth meshes BEFORE inner surface so caps occlude inner surface
            // Use DoubleSide so caps occlude from both viewing angles
            const capDepthMaterial = new THREE.MeshBasicMaterial({
                colorWrite: false,
                depthWrite: true,  // Explicitly write to depth buffer
                depthTest: true,
                side: THREE.DoubleSide  // DoubleSide so caps occlude from both sides
            });
            const uMax = 2 * Math.PI * params.N;
            const startCapGeometry = buildTubeCapGeometry(params, 0);
            const endCapGeometry = buildTubeCapGeometry(params, uMax);
            const startCapDepthMesh = new THREE.Mesh(startCapGeometry, capDepthMaterial);
            const endCapDepthMesh = new THREE.Mesh(endCapGeometry, capDepthMaterial);
            startCapDepthMesh.renderOrder = 0;  // Render first
            endCapDepthMesh.renderOrder = 0;    // Render first
            meshGroup.add(startCapDepthMesh);
            meshGroup.add(endCapDepthMesh);
            
            if (params.showInnerSurface) {
                const innerGeometry = buildInnerTubeGeometry(params);
                const innerDepthMesh = new THREE.Mesh(innerGeometry, depthMaterial);
                innerDepthMesh.renderOrder = 0;  // Render first
                meshGroup.add(innerDepthMesh);
            }
            
            // Render lines with depth testing
            const allLines = [...outerLines, ...innerLines, ...depthLines];
            allLines.forEach(line => {
                line.material.depthTest = true;
                line.material.depthWrite = false;
                line.renderOrder = 1;  // Render after depth meshes
                meshGroup.add(line);
            });
            
            // Add outline lines if enabled
            if (params.showOutline && camera) {
                const outlineLines = createOutlineLines(meshGroup, allLines, camera, params);
                outlineLines.forEach(line => meshGroup.add(line));
            }
        } else {
            // No occlusion - render lines normally
            const allLines = [...outerLines, ...innerLines, ...depthLines];
            allLines.forEach(line => meshGroup.add(line));
            
            // Add outline lines if enabled
            if (params.showOutline && camera) {
                const outlineLines = createOutlineLines(meshGroup, allLines, camera, params);
                outlineLines.forEach(line => meshGroup.add(line));
            }
        }
        
    } else if (params.renderStyle === 'Hidden-line') {
        // Hidden-line always uses depth meshes
        const outerGeometry = buildOuterTubeGeometry(params);
        const depthMaterial = new THREE.MeshBasicMaterial({
            colorWrite: false,
            depthWrite: true,  // Explicitly write to depth buffer
            depthTest: true,
            side: THREE.FrontSide
        });
        const depthMesh = new THREE.Mesh(outerGeometry, depthMaterial);
        depthMesh.renderOrder = 0;  // Render first
        meshGroup.add(depthMesh);
        
        // Add cap depth meshes BEFORE inner surface so caps occlude inner surface
        // Use DoubleSide so caps occlude from both viewing angles
        const capDepthMaterial = new THREE.MeshBasicMaterial({
            colorWrite: false,
            depthWrite: true,  // Explicitly write to depth buffer
            depthTest: true,
            side: THREE.DoubleSide  // DoubleSide so caps occlude from both sides
        });
        const uMax = 2 * Math.PI * params.N;
        const startCapGeometry = buildTubeCapGeometry(params, 0);
        const endCapGeometry = buildTubeCapGeometry(params, uMax);
        const startCapDepthMesh = new THREE.Mesh(startCapGeometry, capDepthMaterial);
        const endCapDepthMesh = new THREE.Mesh(endCapGeometry, capDepthMaterial);
        startCapDepthMesh.renderOrder = 0;  // Render first
        endCapDepthMesh.renderOrder = 0;    // Render first
        meshGroup.add(startCapDepthMesh);
        meshGroup.add(endCapDepthMesh);
        
        if (params.showInnerSurface) {
            const innerGeometry = buildInnerTubeGeometry(params);
            const innerDepthMesh = new THREE.Mesh(innerGeometry, depthMaterial);
            innerDepthMesh.renderOrder = 0;  // Render first
            meshGroup.add(innerDepthMesh);
        }
        
        // Wireframe on top with depth testing
        const { outerLines, innerLines, depthLines } = buildWireframeLines(params);
        const allLines = [...outerLines, ...innerLines, ...depthLines];
        allLines.forEach(line => {
            line.material.depthTest = true;
            line.material.depthWrite = false;
            line.renderOrder = 1;  // Render after depth meshes
            meshGroup.add(line);
        });
        
        // Add outline lines if enabled
        if (params.showOutline && camera) {
            const outlineLines = createOutlineLines(meshGroup, allLines, camera, params);
            outlineLines.forEach(line => meshGroup.add(line));
        }
    }
}

