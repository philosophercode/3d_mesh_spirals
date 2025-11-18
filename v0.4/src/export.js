function downloadPNG(renderer, scene, camera, canvas) {
    renderer.render(scene, camera);
    canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `snail_pyramid_${Date.now()}.png`;
        a.click();
        URL.revokeObjectURL(url);
    });
}

function downloadOBJ(meshGroup) {
    console.log('=== OBJ Export Debug ===');
    console.log('Starting OBJ export...');
    
    // Check if OBJExporter is available
    if (typeof THREE === 'undefined' || !THREE.OBJExporter) {
        console.error('OBJExporter is not available. Make sure the OBJExporter script is loaded.');
        alert('OBJExporter is not available. Make sure the OBJExporter script is loaded.');
        return;
    }
    console.log('✓ OBJExporter is available');

    // Update matrix world for all children
    meshGroup.updateMatrixWorld(true);
    console.log('✓ Updated meshGroup matrix world');

    // Create a temporary group with only mesh objects (exclude lines)
    const exportGroup = new THREE.Group();
    const meshInfo = [];
    let totalVertices = 0;
    let totalFaces = 0;
    
    meshGroup.traverse((child) => {
        if (child.isMesh) {
            const geometry = child.geometry;
            const positionAttribute = geometry.attributes.position;
            const index = geometry.index;
            const vertexCount = positionAttribute ? positionAttribute.count : 0;
            const faceCount = index ? index.count / 3 : 0;
            
            totalVertices += vertexCount;
            totalFaces += faceCount;
            
            meshInfo.push({
                name: child.name || 'Unnamed',
                vertices: vertexCount,
                faces: faceCount,
                hasNormals: !!geometry.attributes.normal,
                hasUVs: !!geometry.attributes.uv,
                material: child.material ? {
                    type: child.material.type,
                    color: child.material.color ? child.material.color.getHexString() : 'N/A'
                } : 'N/A'
            });
            
            // Clone the mesh to avoid modifying the original
            const clonedMesh = child.clone();
            // Apply world matrix to geometry
            clonedMesh.geometry = child.geometry.clone();
            clonedMesh.geometry.applyMatrix4(child.matrixWorld);
            // Reset position/rotation/scale since they're baked into geometry
            clonedMesh.position.set(0, 0, 0);
            clonedMesh.rotation.set(0, 0, 0);
            clonedMesh.scale.set(1, 1, 1);
            clonedMesh.updateMatrix();
            exportGroup.add(clonedMesh);
        }
    });

    console.log(`Found ${meshInfo.length} mesh(es) to export:`);
    meshInfo.forEach((info, index) => {
        console.log(`  Mesh ${index + 1}:`, info);
    });
    console.log(`Total vertices: ${totalVertices}`);
    console.log(`Total faces: ${totalFaces}`);

    // Export using OBJExporter
    console.log('Exporting to OBJ format...');
    const exporter = new THREE.OBJExporter();
    const objString = exporter.parse(exportGroup);
    
    // Debug OBJ string
    const objLines = objString.split('\n');
    const objVertices = objLines.filter(line => line.startsWith('v ')).length;
    const objFaces = objLines.filter(line => line.startsWith('f ')).length;
    const objNormals = objLines.filter(line => line.startsWith('vn ')).length;
    const objUVs = objLines.filter(line => line.startsWith('vt ')).length;
    
    console.log('OBJ Export Statistics:');
    console.log(`  OBJ file size: ${(objString.length / 1024).toFixed(2)} KB`);
    console.log(`  Total lines: ${objLines.length}`);
    console.log(`  Vertices (v): ${objVertices}`);
    console.log(`  Faces (f): ${objFaces}`);
    console.log(`  Normals (vn): ${objNormals}`);
    console.log(`  UVs (vt): ${objUVs}`);
    console.log('OBJ file preview (first 20 lines):');
    console.log(objLines.slice(0, 20).join('\n'));

    // Download OBJ file
    const blob = new Blob([objString], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const filename = `snail_pyramid_${Date.now()}.obj`;
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
    
    console.log(`✓ OBJ file downloaded: ${filename}`);
    console.log('=== Export Complete ===');
}

function downloadSVG(renderer, scene, camera, meshGroup, params, orbitControls) {
    console.log('=== SVG Export Debug ===');
    console.log('Starting SVG export...');
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    console.log(`Canvas dimensions: ${width} x ${height}`);
    console.log('Camera info:', {
        type: camera.constructor.name,
        position: camera.position.toArray(),
        target: orbitControls.target ? orbitControls.target.toArray() : 'N/A'
    });
    console.log('Background color:', params.backgroundColor);

    // Update orbit controls to sync camera position
    orbitControls.update();
    console.log('✓ Updated orbit controls');

    // Render current frame to ensure camera and scene are synced
    renderer.render(scene, camera);
    console.log('✓ Rendered current frame');

    // Update camera and scene matrices to match current view
    camera.updateMatrixWorld();
    camera.updateProjectionMatrix();
    meshGroup.updateMatrixWorld(true);
    console.log('✓ Updated camera and meshGroup matrices');

    // Create SVG header
    let svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
<rect width="100%" height="100%" fill="${params.backgroundColor}"/>
<g id="mesh">
`;

    // Helper to project 3D point to 2D screen coordinates
    function project3DTo2D(point) {
        const vector = point.clone();
        vector.project(camera);
        const x = (vector.x + 1) / 2 * width;
        const y = (-vector.y + 1) / 2 * height;
        return { x, y, z: -vector.z };
    }

    // Collect all elements (triangles and line segments) with depth for sorting
    const elements = [];
    let occludingMeshCount = 0;
    let occludingTriangleCount = 0;
    let lineObjectCount = 0;
    let totalLineSegments = 0;
    const lineColors = new Set();

    // Collect occluding triangles
    console.log('Collecting occluding triangles...');
    meshGroup.traverse((child) => {
        if (child.isMesh && child.material.colorWrite === false) {
            occludingMeshCount++;
            const geometry = child.geometry;
            const index = geometry.index;
            const positions = geometry.attributes.position;

            if (index) {
                const triangles = index.count / 3;
                occludingTriangleCount += triangles;
                
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

                    const p1 = project3DTo2D(v1);
                    const p2 = project3DTo2D(v2);
                    const p3 = project3DTo2D(v3);

                    const avgZ = (p1.z + p2.z + p3.z) / 3;

                    elements.push({
                        type: 'triangle',
                        depth: avgZ,
                        p1, p2, p3
                    });
                }
            }
        }
    });
    console.log(`  Found ${occludingMeshCount} occluding mesh(es) with ${occludingTriangleCount} triangles`);

    // Collect line segments
    console.log('Collecting line segments...');
    meshGroup.traverse((child) => {
        if (child.isLine) {
            lineObjectCount++;
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
            lineColors.add(color);

            // Break into segments
            const segments = points.length - 1;
            totalLineSegments += segments;
            for (let i = 0; i < points.length - 1; i++) {
                const p1 = project3DTo2D(points[i]);
                const p2 = project3DTo2D(points[i + 1]);
                const avgZ = (p1.z + p2.z) / 2;

                elements.push({
                    type: 'line',
                    depth: avgZ,
                    p1, p2,
                    color, opacity, lineWidth
                });
            }
        }
    });
    console.log(`  Found ${lineObjectCount} line object(s) with ${totalLineSegments} total segments`);
    console.log(`  Line colors: ${Array.from(lineColors).join(', ')}`);

    console.log(`Total elements collected: ${elements.length} (${occludingTriangleCount} triangles, ${totalLineSegments} lines)`);

    // Sort by depth (back to front - lower z values first)
    console.log('Sorting elements by depth...');
    elements.sort((a, b) => a.depth - b.depth);
    const depthRange = elements.length > 0 ? {
        min: elements[0].depth,
        max: elements[elements.length - 1].depth
    } : { min: 0, max: 0 };
    console.log(`  Depth range: ${depthRange.min.toFixed(3)} to ${depthRange.max.toFixed(3)}`);

    // Render all elements in sorted order
    console.log('Generating SVG content...');
    let triangleCount = 0;
    let lineCount = 0;
    elements.forEach(element => {
        if (element.type === 'triangle') {
            svg += `<polygon points="${element.p1.x.toFixed(2)},${element.p1.y.toFixed(2)} ${element.p2.x.toFixed(2)},${element.p2.y.toFixed(2)} ${element.p3.x.toFixed(2)},${element.p3.y.toFixed(2)}" fill="${params.backgroundColor}"/>\n`;
            triangleCount++;
        } else if (element.type === 'line') {
            svg += `<line x1="${element.p1.x.toFixed(2)}" y1="${element.p1.y.toFixed(2)}" x2="${element.p2.x.toFixed(2)}" y2="${element.p2.y.toFixed(2)}" stroke="${element.color}" stroke-width="${element.lineWidth}" stroke-opacity="${element.opacity}" stroke-linecap="round"/>\n`;
            lineCount++;
        }
    });

    svg += `</g>\n</svg>`;

    // Debug SVG content
    const svgLines = svg.split('\n');
    const svgPolygons = svgLines.filter(line => line.includes('<polygon')).length;
    const svgLines_count = svgLines.filter(line => line.includes('<line')).length;
    
    console.log('SVG Export Statistics:');
    console.log(`  SVG file size: ${(svg.length / 1024).toFixed(2)} KB`);
    console.log(`  Total lines: ${svgLines.length}`);
    console.log(`  Polygons rendered: ${svgPolygons}`);
    console.log(`  Lines rendered: ${svgLines_count}`);
    console.log('SVG file preview (first 30 lines):');
    console.log(svgLines.slice(0, 30).join('\n'));

    // Download SVG
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const filename = `snail_pyramid_${Date.now()}.svg`;
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
    
    console.log(`✓ SVG file downloaded: ${filename}`);
    console.log('=== Export Complete ===');
}

function copyJSON(params) {
    const json = JSON.stringify(params, null, 2);
    navigator.clipboard.writeText(json);
    console.log('Preset copied to clipboard:', json);
}

function saveJSON(params) {
    const json = JSON.stringify(params, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `snail_pyramid_preset_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function loadJSON(onLoad) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const loaded = JSON.parse(event.target.result);
                onLoad(loaded);
                console.log('Preset loaded successfully');
            } catch (error) {
                console.error('Error loading preset:', error);
                alert('Error loading preset file');
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

