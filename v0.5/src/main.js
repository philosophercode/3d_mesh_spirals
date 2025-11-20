// Entry point - initialize everything

const canvas = document.getElementById('canvas');
const sceneState = createScene(canvas);
const renderer = createRenderer(canvas);

// Initialize with default parameters
let currentParams = { ...defaultParams };

// Ensure pathType and crossSectionType are set
if (!currentParams.pathType) {
    currentParams.pathType = 'spiral';
}
if (!currentParams.crossSectionType) {
    currentParams.crossSectionType = 'circle';
}

// Initialize modifier states
if (modifiers) {
    // Set default enabled states
    modifiers['radius-decay'].enabled = true;
    modifiers['twist'].enabled = true;
    modifiers['eccentricity'].enabled = true;
    modifiers['taper'].enabled = false;
    modifiers['wave'].enabled = false;
}

// Initialize scene
sceneState.scene.background = new THREE.Color(currentParams.backgroundColor);
sceneState.gridHelper.visible = currentParams.showGrid;
updateMesh(sceneState.meshGroup, currentParams, sceneState.currentCamera);

// Set default camera position and target
sceneState.orbitControls.target.set(0, 0, 0);
sceneState.orbitControls.update();

// Setup UI
setupUI(
    currentParams,
    sceneState,
    sceneState.scene,
    sceneState.gridHelper,
    updateMesh
);

// Store renderer in sceneState for export
sceneState.renderer = renderer;

// Setup animation loop
setupAnimationLoop(renderer, sceneState.scene, sceneState, currentParams, updateMesh);

// Handle resize
window.addEventListener('resize', () => {
    handleResize(sceneState);
    renderer.setSize(window.innerWidth, window.innerHeight);
});

