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

function downloadSVG(renderer, scene, camera, meshGroup, params, orbitControls) {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Update orbit controls to sync camera position
    orbitControls.update();

    // Render current frame to ensure camera and scene are synced
    renderer.render(scene, camera);

    // Update camera and scene matrices to match current view
    camera.updateMatrixWorld();
    camera.updateProjectionMatrix();
    meshGroup.updateMatrixWorld(true);

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

    // Collect occluding triangles
    meshGroup.traverse((child) => {
        if (child.isMesh && child.material.colorWrite === false) {
            const geometry = child.geometry;
            const index = geometry.index;
            const positions = geometry.attributes.position;

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

    // Collect line segments
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

            // Break into segments
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

    // Sort by depth (back to front - lower z values first)
    elements.sort((a, b) => a.depth - b.depth);

    // Render all elements in sorted order
    elements.forEach(element => {
        if (element.type === 'triangle') {
            svg += `<polygon points="${element.p1.x.toFixed(2)},${element.p1.y.toFixed(2)} ${element.p2.x.toFixed(2)},${element.p2.y.toFixed(2)} ${element.p3.x.toFixed(2)},${element.p3.y.toFixed(2)}" fill="${params.backgroundColor}"/>\n`;
        } else if (element.type === 'line') {
            svg += `<line x1="${element.p1.x.toFixed(2)}" y1="${element.p1.y.toFixed(2)}" x2="${element.p2.x.toFixed(2)}" y2="${element.p2.y.toFixed(2)}" stroke="${element.color}" stroke-width="${element.lineWidth}" stroke-opacity="${element.opacity}" stroke-linecap="round"/>\n`;
        }
    });

    svg += `</g>\n</svg>`;

    // Download SVG
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `snail_pyramid_${Date.now()}.svg`;
    a.click();
    URL.revokeObjectURL(url);
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

