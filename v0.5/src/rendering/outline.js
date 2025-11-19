// Four different methods for generating red outline/silhouette

// Method 1: Angular Binning (current method)
function createOutlineAngularBinning(allLines, camera, params) {
    if (allLines.length === 0) return [];
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    function project3DTo2D(point) {
        const vector = point.clone();
        vector.project(camera);
        const x = (vector.x + 1) / 2 * width;
        const y = (-vector.y + 1) / 2 * height;
        return { x, y, z: -vector.z };
    }
    
    const elements = [];
    allLines.forEach(line => {
        const positions = line.geometry.attributes.position;
        const points = [];
        for (let i = 0; i < positions.count; i++) {
            const point = new THREE.Vector3(
                positions.getX(i),
                positions.getY(i),
                positions.getZ(i)
            );
            point.applyMatrix4(line.matrixWorld);
            points.push(point);
        }
        
        for (let i = 0; i < points.length - 1; i++) {
            const p1 = project3DTo2D(points[i]);
            const p2 = project3DTo2D(points[i + 1]);
            const edgeKey = `${p1.x.toFixed(2)},${p1.y.toFixed(2)}-${p2.x.toFixed(2)},${p2.y.toFixed(2)}`;
            const reverseKey = `${p2.x.toFixed(2)},${p2.y.toFixed(2)}-${p1.x.toFixed(2)},${p1.y.toFixed(2)}`;
            
            elements.push({
                p1, p2,
                worldP1: points[i],
                worldP2: points[i + 1],
                edgeKey, reverseKey
            });
        }
    });
    
    if (elements.length === 0) return [];
    
    let centerX = 0, centerY = 0, pointCount = 0;
    elements.forEach(el => {
        centerX += el.p1.x + el.p2.x;
        centerY += el.p1.y + el.p2.y;
        pointCount += 2;
    });
    centerX /= pointCount;
    centerY /= pointCount;
    
    const angularBins = 720;
    const maxDistances = new Array(angularBins).fill(0);
    const maxDistanceEdges = new Array(angularBins).fill(null);
    const minDistances = new Array(angularBins).fill(Infinity);
    const minDistanceEdges = new Array(angularBins).fill(null);
    const edgeContributions = new Map();
    
    elements.forEach(el => {
        const samples = Math.max(10, Math.ceil(Math.sqrt(
            Math.pow(el.p2.x - el.p1.x, 2) + Math.pow(el.p2.y - el.p1.y, 2)
        )));
        const contributingBins = new Set();
        
        for (let s = 0; s <= samples; s++) {
            const t = s / samples;
            const x = el.p1.x + (el.p2.x - el.p1.x) * t;
            const y = el.p1.y + (el.p2.y - el.p1.y) * t;
            const dx = x - centerX;
            const dy = y - centerY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            let angle = Math.atan2(dy, dx) * 180 / Math.PI;
            if (angle < 0) angle += 360;
            const bin = Math.floor(angle * angularBins / 360) % angularBins;
            contributingBins.add(bin);
            
            // Track maximum distance (outer edge)
            if (dist > maxDistances[bin]) {
                maxDistances[bin] = dist;
                maxDistanceEdges[bin] = el;
            }
            
            // Track minimum distance (inner edge)
            if (dist < minDistances[bin]) {
                minDistances[bin] = dist;
                minDistanceEdges[bin] = el;
            }
        }
        edgeContributions.set(el.edgeKey, contributingBins);
    });
    
    const silhouetteEdges = new Set();
    const innerEdges = new Set();
    
    // Outer edges (maximum distance)
    maxDistanceEdges.forEach((edge, bin) => {
        if (edge && edgeContributions.has(edge.edgeKey)) {
            const bins = edgeContributions.get(edge.edgeKey);
            if (bins.has(bin)) {
                silhouetteEdges.add(edge.edgeKey);
                silhouetteEdges.add(edge.reverseKey);
            }
        }
    });
    
    // Inner edges (minimum distance) - only if significantly closer than average
    const avgDist = elements.reduce((sum, el) => {
        const midX = (el.p1.x + el.p2.x) / 2;
        const midY = (el.p1.y + el.p2.y) / 2;
        const dx = midX - centerX;
        const dy = midY - centerY;
        return sum + Math.sqrt(dx * dx + dy * dy);
    }, 0) / elements.length;
    
    minDistanceEdges.forEach((edge, bin) => {
        if (edge && edgeContributions.has(edge.edgeKey)) {
            const bins = edgeContributions.get(edge.edgeKey);
            if (bins.has(bin) && minDistances[bin] < avgDist * 0.7) {
                // Only mark as inner edge if it's significantly closer than average
                innerEdges.add(edge.edgeKey);
                innerEdges.add(edge.reverseKey);
            }
        }
    });
    
    const outlineLines = [];
    // Outline width scales with lineWidth - make it 2.5x thicker for visibility
    const outlineWidth = params.lineWidth * 2.5;
    
    // Helper to create a thick line (workaround for WebGL linewidth limitation)
    // Uses multiple parallel lines to simulate thickness
    function createThickLine(worldP1, worldP2, width) {
        // Get camera position and calculate view direction
        const camPos = new THREE.Vector3();
        camera.getWorldPosition(camPos);
        
        // Calculate line direction in 3D
        const lineDir = worldP2.clone().sub(worldP1).normalize();
        const toCam = camPos.clone().sub(worldP1).normalize();
        
        // Calculate perpendicular direction (in plane perpendicular to camera view)
        let perp = new THREE.Vector3().crossVectors(lineDir, toCam);
        if (perp.length() < 0.1) {
            // Fallback if vectors are parallel - use arbitrary perpendicular
            const temp = new THREE.Vector3(1, 0, 0);
            if (Math.abs(lineDir.dot(temp)) > 0.9) {
                temp.set(0, 1, 0);
            }
            perp = new THREE.Vector3().crossVectors(lineDir, temp);
        }
        perp.normalize();
        
        // Create multiple parallel lines to simulate thickness
        const lines = [];
        const numLines = Math.max(1, Math.ceil(width / 3)); // More lines for thicker appearance
        
        // Calculate distance from camera to scale the offset appropriately
        const dist1 = worldP1.distanceTo(camPos);
        const dist2 = worldP2.distanceTo(camPos);
        const avgDist = (dist1 + dist2) / 2;
        
        // Convert pixel width to world space (approximate)
        // This is a rough conversion - adjust based on your scene scale
        const worldScale = (avgDist / 1000) * (width / 100); // Adjust these constants as needed
        const spacing = worldScale / numLines;
        
        for (let i = 0; i < numLines; i++) {
            const offset = (i - (numLines - 1) / 2) * spacing;
            const offsetVec = perp.clone().multiplyScalar(offset);
            
            const offsetP1 = worldP1.clone().add(offsetVec);
            const offsetP2 = worldP2.clone().add(offsetVec);
            
            const outlinePoints = [offsetP1, offsetP2];
            const outlineGeometry = new THREE.BufferGeometry().setFromPoints(outlinePoints);
            const outlineLine = new THREE.Line(outlineGeometry, new THREE.LineBasicMaterial({
                color: 0xff0000,
                linewidth: 1,
                depthTest: true,
                depthWrite: false
            }));
            outlineLine.renderOrder = 2;
            lines.push(outlineLine);
        }
        return lines;
    }
    
    // Outer edges
    elements.forEach(el => {
        if (silhouetteEdges.has(el.edgeKey) || silhouetteEdges.has(el.reverseKey)) {
            const thickLines = createThickLine(el.worldP1, el.worldP2, outlineWidth);
            if (thickLines) {
                outlineLines.push(...thickLines);
            } else {
                // Fallback to single line
                const outlinePoints = [el.worldP1, el.worldP2];
                const outlineGeometry = new THREE.BufferGeometry().setFromPoints(outlinePoints);
                const outlineLine = new THREE.Line(outlineGeometry, new THREE.LineBasicMaterial({
                    color: 0xff0000,
                    linewidth: 1,
                    depthTest: true,
                    depthWrite: false
                }));
                outlineLine.renderOrder = 2;
                outlineLines.push(outlineLine);
            }
        }
    });
    
    // Inner edges (hole boundary)
    elements.forEach(el => {
        if (innerEdges.has(el.edgeKey) || innerEdges.has(el.reverseKey)) {
            const thickLines = createThickLine(el.worldP1, el.worldP2, outlineWidth);
            if (thickLines) {
                outlineLines.push(...thickLines);
            } else {
                const outlinePoints = [el.worldP1, el.worldP2];
                const outlineGeometry = new THREE.BufferGeometry().setFromPoints(outlinePoints);
                const outlineLine = new THREE.Line(outlineGeometry, new THREE.LineBasicMaterial({
                    color: 0xff0000,
                    linewidth: 1,
                    depthTest: true,
                    depthWrite: false
                }));
                outlineLine.renderOrder = 2;
                outlineLines.push(outlineLine);
            }
        }
    });
    
    return outlineLines;
}

// Method 2: Face Normal Silhouette Extraction
function createOutlineFaceNormals(meshGroup, camera, params) {
    const outlineLines = [];
    const cameraPosition = new THREE.Vector3();
    camera.getWorldPosition(cameraPosition);
    
    // Get all meshes (geometry, not lines)
    const meshes = [];
    meshGroup.traverse((child) => {
        if (child.isMesh && child.material.colorWrite !== false) {
            meshes.push(child);
        }
    });
    
    if (meshes.length === 0) return [];
    
    // Build edge map: edge -> [face1, face2]
    const edgeMap = new Map();
    
    meshes.forEach(mesh => {
        const geometry = mesh.geometry;
        const index = geometry.index;
        const positions = geometry.attributes.position;
        
        if (!index) return;
        
        // Compute face normals
        const faceNormals = [];
        for (let i = 0; i < index.count; i += 3) {
            const i1 = index.getX(i);
            const i2 = index.getX(i + 1);
            const i3 = index.getX(i + 2);
            
            const v1 = new THREE.Vector3(
                positions.getX(i1),
                positions.getY(i1),
                positions.getZ(i1)
            ).applyMatrix4(mesh.matrixWorld);
            
            const v2 = new THREE.Vector3(
                positions.getX(i2),
                positions.getY(i2),
                positions.getZ(i2)
            ).applyMatrix4(mesh.matrixWorld);
            
            const v3 = new THREE.Vector3(
                positions.getX(i3),
                positions.getY(i3),
                positions.getZ(i3)
            ).applyMatrix4(mesh.matrixWorld);
            
            const normal = new THREE.Vector3();
            normal.crossVectors(
                v2.clone().sub(v1),
                v3.clone().sub(v1)
            ).normalize();
            
            faceNormals.push(normal);
            
            // Add edges
            const edges = [
                [Math.min(i1, i2), Math.max(i1, i2)],
                [Math.min(i2, i3), Math.max(i2, i3)],
                [Math.min(i3, i1), Math.max(i3, i1)]
            ];
            
            edges.forEach(([v1Idx, v2Idx]) => {
                const key = `${v1Idx}-${v2Idx}`;
                if (!edgeMap.has(key)) {
                    edgeMap.set(key, {
                        v1: v1Idx,
                        v2: v2Idx,
                        faces: [],
                        positions: positions
                    });
                }
                edgeMap.get(key).faces.push({
                    normal: normal,
                    faceIdx: i / 3,
                    mesh: mesh
                });
            });
        }
    });
    
    // Find silhouette edges (edges where faces have opposite facing)
    edgeMap.forEach((edge, key) => {
        if (edge.faces.length === 1) {
            // Boundary edge - always silhouette
            const face = edge.faces[0];
            const pos = face.mesh.geometry.attributes.position;
            const v1 = new THREE.Vector3(
                pos.getX(edge.v1),
                pos.getY(edge.v1),
                pos.getZ(edge.v1)
            ).applyMatrix4(face.mesh.matrixWorld);
            const v2 = new THREE.Vector3(
                pos.getX(edge.v2),
                pos.getY(edge.v2),
                pos.getZ(edge.v2)
            ).applyMatrix4(face.mesh.matrixWorld);
            
            const faceCenter = v1.clone().add(v2).multiplyScalar(0.5);
            const toCamera = cameraPosition.clone().sub(faceCenter).normalize();
            const facing = face.normal.dot(toCamera);
            
            if (facing < 0) { // Front facing
                const outlinePoints = [v1, v2];
                const outlineGeometry = new THREE.BufferGeometry().setFromPoints(outlinePoints);
                const outlineLine = new THREE.Line(outlineGeometry, new THREE.LineBasicMaterial({
                    color: 0xff0000,
                    linewidth: params.lineWidth * 2.5,
                    depthTest: true,
                    depthWrite: false
                }));
                outlineLine.renderOrder = 2;
                outlineLines.push(outlineLine);
            }
        } else if (edge.faces.length === 2) {
            // Edge shared by two faces
            const face1 = edge.faces[0];
            const face2 = edge.faces[1];
            
            const pos = face1.mesh.geometry.attributes.position;
            const v1 = new THREE.Vector3(
                pos.getX(edge.v1),
                pos.getY(edge.v1),
                pos.getZ(edge.v1)
            ).applyMatrix4(face1.mesh.matrixWorld);
            const v2 = new THREE.Vector3(
                pos.getX(edge.v2),
                pos.getY(edge.v2),
                pos.getZ(edge.v2)
            ).applyMatrix4(face1.mesh.matrixWorld);
            
            const faceCenter = v1.clone().add(v2).multiplyScalar(0.5);
            const toCamera = cameraPosition.clone().sub(faceCenter).normalize();
            
            const facing1 = face1.normal.dot(toCamera);
            const facing2 = face2.normal.dot(toCamera);
            
            // Silhouette if one face is front-facing and other is back-facing
            if (facing1 * facing2 < 0) {
                const outlinePoints = [v1, v2];
                const outlineGeometry = new THREE.BufferGeometry().setFromPoints(outlinePoints);
                const outlineLine = new THREE.Line(outlineGeometry, new THREE.LineBasicMaterial({
                    color: 0xff0000,
                    linewidth: params.lineWidth * 2.5,
                    depthTest: true,
                    depthWrite: false
                }));
                outlineLine.renderOrder = 2;
                outlineLines.push(outlineLine);
            }
        }
    });
    
    return outlineLines;
}

// Method 3: Post-Projection Boundary Detection
function createOutlinePostProjection(allLines, camera, params) {
    if (allLines.length === 0) return [];
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    function project3DTo2D(point) {
        const vector = point.clone();
        vector.project(camera);
        const x = (vector.x + 1) / 2 * width;
        const y = (-vector.y + 1) / 2 * height;
        return { x, y, z: -vector.z };
    }
    
    // Collect all projected segments
    const segments = [];
    allLines.forEach(line => {
        const positions = line.geometry.attributes.position;
        const points = [];
        for (let i = 0; i < positions.count; i++) {
            const point = new THREE.Vector3(
                positions.getX(i),
                positions.getY(i),
                positions.getZ(i)
            );
            point.applyMatrix4(line.matrixWorld);
            points.push(point);
        }
        
        for (let i = 0; i < points.length - 1; i++) {
            const p1 = project3DTo2D(points[i]);
            const p2 = project3DTo2D(points[i + 1]);
            segments.push({
                p1: p1,
                p2: p2,
                worldP1: points[i],
                worldP2: points[i + 1],
                midZ: (p1.z + p2.z) / 2
            });
        }
    });
    
    if (segments.length === 0) return [];
    
    // Build a spatial grid to find nearby segments
    const gridSize = 50;
    const grid = new Map();
    
    segments.forEach((seg, idx) => {
        const midX = (seg.p1.x + seg.p2.x) / 2;
        const midY = (seg.p1.y + seg.p2.y) / 2;
        const gridX = Math.floor(midX / gridSize);
        const gridY = Math.floor(midY / gridSize);
        const key = `${gridX},${gridY}`;
        
        if (!grid.has(key)) {
            grid.set(key, []);
        }
        grid.get(key).push(idx);
    });
    
    // Find boundary segments (segments that are on the outer edge)
    const boundarySegments = new Set();
    
    segments.forEach((seg, idx) => {
        const midX = (seg.p1.x + seg.p2.x) / 2;
        const midY = (seg.p1.y + seg.p2.y) / 2;
        
        // Check 8 directions around this segment
        const directions = [
            [1, 0], [-1, 0], [0, 1], [0, -1],
            [1, 1], [-1, -1], [1, -1], [-1, 1]
        ];
        
        let isBoundary = false;
        for (const [dx, dy] of directions) {
            const checkX = midX + dx * gridSize;
            const checkY = midY + dy * gridSize;
            const checkGridX = Math.floor(checkX / gridSize);
            const checkGridY = Math.floor(checkY / gridSize);
            const checkKey = `${checkGridX},${checkGridY}`;
            
            if (!grid.has(checkKey)) {
                isBoundary = true;
                break;
            }
            
            // Check if there are segments further out in this direction
            const nearbySegs = grid.get(checkKey) || [];
            let hasFurtherSegment = false;
            
            for (const otherIdx of nearbySegs) {
                const other = segments[otherIdx];
                const otherMidX = (other.p1.x + other.p2.x) / 2;
                const otherMidY = (other.p1.y + other.p2.y) / 2;
                
                const dirX = checkX - midX;
                const dirY = checkY - midY;
                const toOtherX = otherMidX - midX;
                const toOtherY = otherMidY - midY;
                
                const dot = dirX * toOtherX + dirY * toOtherY;
                if (dot > 0) {
                    const distToOther = Math.sqrt(toOtherX * toOtherX + toOtherY * toOtherY);
                    const distToCheck = Math.sqrt(dirX * dirX + dirY * dirY);
                    if (distToOther > distToCheck * 0.8) {
                        hasFurtherSegment = true;
                        break;
                    }
                }
            }
            
            if (!hasFurtherSegment) {
                isBoundary = true;
                break;
            }
        }
        
        if (isBoundary) {
            boundarySegments.add(idx);
        }
    });
    
    // Also use angular binning as fallback for better coverage
    let centerX = 0, centerY = 0, pointCount = 0;
    segments.forEach(seg => {
        centerX += seg.p1.x + seg.p2.x;
        centerY += seg.p1.y + seg.p2.y;
        pointCount += 2;
    });
    centerX /= pointCount;
    centerY /= pointCount;
    
    const angularBins = 720;
    const maxDistances = new Array(angularBins).fill(0);
    const maxDistanceIndices = new Array(angularBins).fill(null);
    
    segments.forEach((seg, idx) => {
        const samples = 20;
        for (let s = 0; s <= samples; s++) {
            const t = s / samples;
            const x = seg.p1.x + (seg.p2.x - seg.p1.x) * t;
            const y = seg.p1.y + (seg.p2.y - seg.p1.y) * t;
            const dx = x - centerX;
            const dy = y - centerY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            let angle = Math.atan2(dy, dx) * 180 / Math.PI;
            if (angle < 0) angle += 360;
            const bin = Math.floor(angle * angularBins / 360) % angularBins;
            
            if (dist > maxDistances[bin]) {
                maxDistances[bin] = dist;
                maxDistanceIndices[bin] = idx;
            }
        }
    });
    
    maxDistanceIndices.forEach(idx => {
        if (idx !== null) {
            boundarySegments.add(idx);
        }
    });
    
    // Create outline lines
    const outlineLines = [];
    boundarySegments.forEach(idx => {
        const seg = segments[idx];
        const outlinePoints = [seg.worldP1, seg.worldP2];
        const outlineGeometry = new THREE.BufferGeometry().setFromPoints(outlinePoints);
        const outlineLine = new THREE.Line(outlineGeometry, new THREE.LineBasicMaterial({
            color: 0xff0000,
            linewidth: Math.max(params.lineWidth * 2, 2),
            depthTest: true,
            depthWrite: false
        }));
        outlineLine.renderOrder = 2;
        outlineLines.push(outlineLine);
    });
    
    return outlineLines;
}

// Method 4: NPR Back-Face Expansion
function createOutlineNPR(meshGroup, camera, params) {
    const outlineLines = [];
    
    // Get all meshes
    const meshes = [];
    meshGroup.traverse((child) => {
        if (child.isMesh && child.material.colorWrite !== false) {
            meshes.push(child);
        }
    });
    
    if (meshes.length === 0) return [];
    
    const cameraPosition = new THREE.Vector3();
    camera.getWorldPosition(cameraPosition);
    
    meshes.forEach(mesh => {
        const geometry = mesh.geometry;
        const index = geometry.index;
        const positions = geometry.attributes.position;
        
        if (!index) return;
        
        // Find back-facing edges
        for (let i = 0; i < index.count; i += 3) {
            const i1 = index.getX(i);
            const i2 = index.getX(i + 1);
            const i3 = index.getX(i + 2);
            
            const v1 = new THREE.Vector3(
                positions.getX(i1),
                positions.getY(i1),
                positions.getZ(i1)
            ).applyMatrix4(mesh.matrixWorld);
            
            const v2 = new THREE.Vector3(
                positions.getX(i2),
                positions.getY(i2),
                positions.getZ(i2)
            ).applyMatrix4(mesh.matrixWorld);
            
            const v3 = new THREE.Vector3(
                positions.getX(i3),
                positions.getY(i3),
                positions.getZ(i3)
            ).applyMatrix4(mesh.matrixWorld);
            
            const faceCenter = v1.clone().add(v2).add(v3).multiplyScalar(1/3);
            const normal = new THREE.Vector3();
            normal.crossVectors(
                v2.clone().sub(v1),
                v3.clone().sub(v1)
            ).normalize();
            
            const toCamera = cameraPosition.clone().sub(faceCenter).normalize();
            const facing = normal.dot(toCamera);
            
            // If back-facing, draw edges in red (expanded)
            if (facing > 0) {
                const edges = [
                    [v1, v2],
                    [v2, v3],
                    [v3, v1]
                ];
                
                edges.forEach(([p1, p2]) => {
                    // Expand edge outward slightly
                    const edgeDir = p2.clone().sub(p1).normalize();
                    const expandDir = normal.clone().multiplyScalar(0.01);
                    const expandedP1 = p1.clone().add(expandDir);
                    const expandedP2 = p2.clone().add(expandDir);
                    
                    const outlinePoints = [expandedP1, expandedP2];
                    const outlineGeometry = new THREE.BufferGeometry().setFromPoints(outlinePoints);
                    const outlineLine = new THREE.Line(outlineGeometry, new THREE.LineBasicMaterial({
                        color: 0xff0000,
                        linewidth: params.lineWidth * 2.5,
                        depthTest: false, // NPR doesn't use depth test
                        depthWrite: false
                    }));
                    outlineLine.renderOrder = 2;
                    outlineLines.push(outlineLine);
                });
            }
        }
    });
    
    return outlineLines;
}

// Main function to create outline based on method
function createOutlineLines(meshGroup, allLines, camera, params) {
    if (!params.showOutline) {
        return [];
    }
    
    switch (params.outlineMethod) {
        case 'Angular Binning':
            return createOutlineAngularBinning(allLines, camera, params);
        case 'Face Normals':
            return createOutlineFaceNormals(meshGroup, camera, params);
        case 'Post-Projection':
            return createOutlinePostProjection(allLines, camera, params);
        case 'NPR Back-Face':
            return createOutlineNPR(meshGroup, camera, params);
        default:
            return createOutlineAngularBinning(allLines, camera, params);
    }
}

