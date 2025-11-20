// Renderer setup and management

function createRenderer(canvas) {
    const renderer = new THREE.WebGLRenderer({ 
        canvas, 
        antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Ensure depth testing is enabled
    renderer.setClearColor(0x000000, 0);
    const gl = renderer.getContext();
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    
    return renderer;
}

function setupAnimationLoop(renderer, scene, sceneState, params, updateMesh) {
    let lastCameraPosition = sceneState.currentCamera.position.clone();
    let lastCameraTarget = sceneState.orbitControls.target.clone();
    let needsOutlineUpdate = false;
    let lastUpdateTime = 0;
    const updateThrottle = 200; // Update outline at most every 200ms
    
    // Update outline when camera changes significantly
    function checkCameraChange() {
        const posChanged = lastCameraPosition.distanceTo(sceneState.currentCamera.position) > 0.1;
        const targetChanged = lastCameraTarget.distanceTo(sceneState.orbitControls.target) > 0.1;
        const now = Date.now();
        
        if ((posChanged || targetChanged) && params.showOutline && (now - lastUpdateTime) > updateThrottle) {
            needsOutlineUpdate = true;
            lastCameraPosition.copy(sceneState.currentCamera.position);
            lastCameraTarget.copy(sceneState.orbitControls.target);
            lastUpdateTime = now;
        }
    }
    
    function animate(time = 0) {
        requestAnimationFrame(animate);
        const seconds = time / 1000;
        sceneState.orbitControls.update();
        
        const animations = (sceneState.meshGroup.userData && sceneState.meshGroup.userData.animations) || [];
        if (animations.length) {
            animations.forEach((fn) => {
                try {
                    fn(seconds);
                } catch (error) {
                    console.warn('Mesh animation error:', error);
                }
            });
        }
        
        // Update outline if camera changed and outline is enabled (throttled)
        checkCameraChange();
        if (needsOutlineUpdate) {
            updateMesh(sceneState.meshGroup, params, sceneState.currentCamera);
            needsOutlineUpdate = false;
        }
        
        renderer.render(scene, sceneState.currentCamera);
    }
    animate();
}

