// 3D OBJ export

function exportOBJ(meshGroup) {
    // Check if OBJExporter is available
    if (typeof THREE === 'undefined' || !THREE.OBJExporter) {
        alert('OBJExporter is not available. Make sure the OBJExporter script is loaded.');
        return;
    }
    
    // Update matrix world for all children
    meshGroup.updateMatrixWorld(true);
    
    // Create a temporary group with only mesh objects (exclude lines)
    const exportGroup = new THREE.Group();
    
    meshGroup.traverse((child) => {
        if (child.isMesh) {
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
    
    // Export using OBJExporter
    const exporter = new THREE.OBJExporter();
    const objString = exporter.parse(exportGroup);
    
    // Download OBJ file
    const blob = new Blob([objString], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const filename = `spiral_export_${Date.now()}.obj`;
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}

