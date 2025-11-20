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

// Outline creation is now in outline.js - using createOutlineLines from there

function buildPrimitiveWireframeLines(geometry, params) {
    const edgesGeometry = new THREE.EdgesGeometry(geometry);
    const material = new THREE.LineBasicMaterial({
        color: new THREE.Color(params.outerColor),
        linewidth: params.lineWidth,
        transparent: false
    });
    return new THREE.LineSegments(edgesGeometry, material);
}

function updatePrimitiveMesh(meshGroup, params, camera) {
    const geometry = buildPrimitiveGeometry(params);
    if (!geometry) return;
    
    if (params.renderStyle === 'Solid') {
        const material = new THREE.MeshStandardMaterial({
            color: params.outerColor,
            side: THREE.DoubleSide,
            metalness: 0.35,
            roughness: 0.55
        });
        const mesh = new THREE.Mesh(geometry, material);
        meshGroup.add(mesh);
        return;
    }
    
    const lineSegments = buildPrimitiveWireframeLines(geometry, params);
    const allLines = [lineSegments];
    
    if (params.renderStyle === 'Wireframe') {
        if (params.occludeInner) {
            const depthMaterial = new THREE.MeshBasicMaterial({
                colorWrite: false,
                depthWrite: true,
                depthTest: true,
                side: THREE.DoubleSide
            });
            const depthMesh = new THREE.Mesh(geometry, depthMaterial);
            depthMesh.renderOrder = 0;
            meshGroup.add(depthMesh);
            
            lineSegments.material.depthTest = true;
            lineSegments.material.depthWrite = false;
            lineSegments.renderOrder = 1;
        }
        
        meshGroup.add(lineSegments);
        
        if (params.showOutline && camera) {
            const outlineLines = createOutlineLines(meshGroup, allLines, camera, params);
            outlineLines.forEach(line => meshGroup.add(line));
        }
        return;
    }
    
    if (params.renderStyle === 'Hidden-line') {
        const depthMaterial = new THREE.MeshBasicMaterial({
            colorWrite: false,
            depthWrite: true,
            depthTest: true,
            side: THREE.DoubleSide
        });
        const depthMesh = new THREE.Mesh(geometry, depthMaterial);
        depthMesh.renderOrder = 0;
        meshGroup.add(depthMesh);
        
        lineSegments.material.depthTest = true;
        lineSegments.material.depthWrite = false;
        lineSegments.renderOrder = 1;
        meshGroup.add(lineSegments);
        
        if (params.showOutline && camera) {
            const outlineLines = createOutlineLines(meshGroup, allLines, camera, params);
            outlineLines.forEach(line => meshGroup.add(line));
        }
    }
}

function updateMesh(meshGroup, params, camera = null) {
    // Clear existing mesh
    meshGroup.clear();
    
    if ((params.geometryMode || 'tube') === 'primitive') {
        updatePrimitiveMesh(meshGroup, params, camera);
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

