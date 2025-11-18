// Initialize
const canvas = document.getElementById('canvas');
const sceneState = createScene(canvas);

let currentParams = { ...defaultParams };

// Initialize scene
sceneState.scene.background = new THREE.Color(currentParams.backgroundColor);
sceneState.gridHelper.visible = currentParams.showGrid;
updateMesh(sceneState.meshGroup, currentParams);

// Setup UI
setupUI(currentParams, sceneState, sceneState.scene, sceneState.gridHelper);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    sceneState.orbitControls.update();
    sceneState.renderer.render(sceneState.scene, sceneState.camera);
}

animate();

// Handle resize
window.addEventListener('resize', () => {
    handleResize(sceneState);
});

