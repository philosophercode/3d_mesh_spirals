// SVG export that exactly matches camera view
// Uses the same outline methods as the 3D view

function exportSVG(renderer, scene, camera, meshGroup, params, orbitControls) {
    // Use the selected outline method from params
    const outlineMethod = params.outlineMethod || 'Angular Binning';
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
    const depthBuffer = new Map(); // Map of "x,y" -> maxDepth (closest to camera)
    
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
                                
                                const depth = w * p1.z + u * p2.z + v * p3.z;
                                const key = `${Math.floor(x)},${Math.floor(y)}`;
                                
                                // Store maximum depth (closest to camera)
                                if (!depthBuffer.has(key) || depthBuffer.get(key) < depth) {
                                    depthBuffer.set(key, depth);
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
                                    
                                    const depth = w * p1_back.z + u * p2_back.z + v * p3_back.z;
                                    const key = `${Math.floor(x)},${Math.floor(y)}`;
                                    
                                    if (!depthBuffer.has(key) || depthBuffer.get(key) < depth) {
                                        depthBuffer.set(key, depth);
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
    function isOccluded(x, y, depth, tolerance = 0.0001) {
        const key = `${Math.floor(x)},${Math.floor(y)}`;
        const bufferDepth = depthBuffer.get(key);
        if (bufferDepth === undefined) return false; // No occlusion data, assume visible
        
        // Larger z values are closer to camera in this coordinate system
        return depth < bufferDepth - tolerance;
    }
    
    // Collect all line segments with depth for sorting
    const elements = [];
    const silhouetteEdges = new Set(); // Store keys for silhouette edges
    
    // First pass: collect all visible line segments
    meshGroup.traverse((child) => {
        if (child.isLine) {
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
                const avgZ = (p1.z + p2.z) / 2;
                
                // Check if line segment is visible
                let isVisible = false;
                const samples = Math.max(10, Math.ceil(Math.sqrt(
                    Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)
                )));
                
                for (let s = 0; s <= samples; s++) {
                    const t = s / samples;
                    const x = p1.x + (p2.x - p1.x) * t;
                    const y = p1.y + (p2.y - p1.y) * t;
                    const z = p1.z + (p2.z - p1.z) * t;
                    
                    // Check viewport bounds
                    if (x < 0 || x >= width || y < 0 || y >= height) {
                        continue;
                    }
                    
                    // If any sample point is not occluded, the line is visible
                    if (!isOccluded(x, y, z, 0.0001)) {
                        isVisible = true;
                        break;
                    }
                }
                
                if (isVisible) {
                    // Create a unique key for this edge segment
                    const edgeKey = `${p1.x.toFixed(2)},${p1.y.toFixed(2)}-${p2.x.toFixed(2)},${p2.y.toFixed(2)}`;
                    const reverseKey = `${p2.x.toFixed(2)},${p2.y.toFixed(2)}-${p1.x.toFixed(2)},${p1.y.toFixed(2)}`;
                    
                    elements.push({
                        type: 'line',
                        depth: avgZ,
                        p1, p2,
                        color, opacity, lineWidth,
                        edgeKey, reverseKey
                    });
                }
            }
        }
    });
    
    // Detect silhouette edges - only edges on the true perimeter/silhouette
    // Method: For each angular direction, find ONLY the edge with maximum distance from center
    if (elements.length > 0) {
        // Calculate center of all visible points
        let centerX = 0, centerY = 0, pointCount = 0;
        elements.forEach(el => {
            centerX += el.p1.x + el.p2.x;
            centerY += el.p1.y + el.p2.y;
            pointCount += 2;
        });
        centerX /= pointCount;
        centerY /= pointCount;
        
        // For each edge, check if it's on the silhouette
        // An edge is on the silhouette if it's at the maximum distance from center in its angular direction
        const angularBins = 720; // Use more bins for better accuracy (2 per degree)
        const maxDistances = new Array(angularBins).fill(0);
        const maxDistanceEdges = new Array(angularBins).fill(null);
        const minDistances = new Array(angularBins).fill(Infinity);
        const minDistanceEdges = new Array(angularBins).fill(null);
        const edgeContributions = new Map(); // Track which edges contribute to which bins
        
        elements.forEach(el => {
            // Sample points along the edge
            const samples = Math.max(10, Math.ceil(Math.sqrt(
                Math.pow(el.p2.x - el.p1.x, 2) + Math.pow(el.p2.y - el.p1.y, 2)
            )));
            
            const contributingBins = new Set();
            
            for (let s = 0; s <= samples; s++) {
                const t = s / samples;
                const x = el.p1.x + (el.p2.x - el.p1.x) * t;
                const y = el.p1.y + (el.p2.y - el.p1.y) * t;
                
                // Calculate distance from center
                const dx = x - centerX;
                const dy = y - centerY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                // Calculate angle (0-360 degrees)
                let angle = Math.atan2(dy, dx) * 180 / Math.PI;
                if (angle < 0) angle += 360;
                
                // Map to bin (0 to angularBins-1)
                const bin = Math.floor(angle * angularBins / 360) % angularBins;
                contributingBins.add(bin);
                
                // Update if this is the maximum distance for this angle (outer edge)
                if (dist > maxDistances[bin]) {
                    maxDistances[bin] = dist;
                    maxDistanceEdges[bin] = el;
                }
                
                // Update if this is the minimum distance for this angle (inner edge)
                if (dist < minDistances[bin]) {
                    minDistances[bin] = dist;
                    minDistanceEdges[bin] = el;
                }
            }
            
            // Store which bins this edge contributes to
            edgeContributions.set(el.edgeKey, contributingBins);
        });
        
        // Mark edges that are at maximum distance in any angular direction
        // These are the edges on the perimeter/silhouette
        maxDistanceEdges.forEach((edge) => {
            if (edge) {
                silhouetteEdges.add(edge.edgeKey);
                silhouetteEdges.add(edge.reverseKey);
            }
        });
        
        // Mark inner edges (minimum distance) - only if significantly closer than average
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
                    silhouetteEdges.add(edge.edgeKey);
                    silhouetteEdges.add(edge.reverseKey);
                }
            }
        });
        
        // Count how many angular bins each edge is the maximum for
        const edgeSilhouetteCount = new Map();
        maxDistanceEdges.forEach((edge, bin) => {
            if (edge && edgeContributions.has(edge.edgeKey)) {
                const bins = edgeContributions.get(edge.edgeKey);
                if (bins.has(bin)) {
                    const count = edgeSilhouetteCount.get(edge.edgeKey) || 0;
                    edgeSilhouetteCount.set(edge.edgeKey, count + 1);
                }
            }
        });
        
        // Filter to only keep edges that are consistently on the perimeter
        // An edge must be max distance in at least 1 bin (be more permissive initially)
        const minBinCount = 1; // Edge must be max in at least 1 angular bin
        const edgesToRemove = new Set();
        silhouetteEdges.forEach(key => {
            const count = edgeSilhouetteCount.get(key) || 0;
            if (count < minBinCount) {
                edgesToRemove.add(key);
            }
        });
        
        // Remove edges that don't meet the threshold
        edgesToRemove.forEach(key => {
            silhouetteEdges.delete(key);
        });
        
        // Also remove corresponding reverse keys
        elements.forEach(el => {
            if (edgesToRemove.has(el.edgeKey)) {
                silhouetteEdges.delete(el.reverseKey);
            }
            if (edgesToRemove.has(el.reverseKey)) {
                silhouetteEdges.delete(el.edgeKey);
            }
        });
        
        console.log(`Silhouette detection: ${silhouetteEdges.size} edges marked as perimeter`);
    }
    
    // Sort by depth (back to front - lower z values first)
    elements.sort((a, b) => a.depth - b.depth);
    
    // Render all elements in sorted order
    // First render regular lines, then render silhouette edges on top
    const regularLines = [];
    const outlineLines = [];
    
    elements.forEach(element => {
        if (element.type === 'line') {
            const isSilhouette = silhouetteEdges.has(element.edgeKey) || silhouetteEdges.has(element.reverseKey);
            if (isSilhouette) {
                outlineLines.push(element);
            } else {
                regularLines.push(element);
            }
        }
    });
    
    console.log(`Rendering: ${regularLines.length} regular lines, ${outlineLines.length} outline lines`);
    
    // Calculate bounding box of all elements
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    const allElements = [...regularLines, ...outlineLines];
    
    if (allElements.length === 0) {
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
    
    allElements.forEach(element => {
        minX = Math.min(minX, element.p1.x, element.p2.x);
        minY = Math.min(minY, element.p1.y, element.p2.y);
        maxX = Math.max(maxX, element.p1.x, element.p2.x);
        maxY = Math.max(maxY, element.p1.y, element.p2.y);
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
<svg width="${squareSize}" height="${squareSize}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${squareSize} ${squareSize}">
<rect width="100%" height="100%" fill="${params.backgroundColor}"/>
<rect x="0" y="0" width="${squareSize}" height="${squareSize}" fill="none" stroke="red" stroke-width="${borderWidth}"/>
<g id="mesh">
`;
    
    // Render regular lines first (with coordinate transformation)
    regularLines.forEach(element => {
        const x1 = transformX(element.p1.x);
        const y1 = transformY(element.p1.y);
        const x2 = transformX(element.p2.x);
        const y2 = transformY(element.p2.y);
        svg += `<line x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}" stroke="${element.color}" stroke-width="${element.lineWidth}" stroke-opacity="${element.opacity}" stroke-linecap="round"/>\n`;
    });
    
    // Render silhouette edges in red with thicker stroke on top
    // Outline width scales with lineWidth - make it 2.5x thicker for visibility
    const outlineWidth = params.lineWidth * 2.5;
    outlineLines.forEach(element => {
        const x1 = transformX(element.p1.x);
        const y1 = transformY(element.p1.y);
        const x2 = transformX(element.p2.x);
        const y2 = transformY(element.p2.y);
        svg += `<line x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}" stroke="red" stroke-width="${outlineWidth}" stroke-opacity="1.0" stroke-linecap="round"/>\n`;
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

