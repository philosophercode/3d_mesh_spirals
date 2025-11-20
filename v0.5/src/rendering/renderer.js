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
    const animationFrameInterval = 1000 / 30; // Target ~30 mesh rebuilds per second during animation
    let lastGeometryUpdate = 0;
    let previousTimestamp = performance.now();
    let shapeAnimationAngle = 0;
    let animationWasActive = false;
    
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
    
    function animate() {
        requestAnimationFrame(animate);
        sceneState.orbitControls.update();
        const now = performance.now();
        const deltaSeconds = (now - previousTimestamp) / 1000;
        previousTimestamp = now;
        
        let requiresMeshUpdate = false;
        const amplitude = params.shapeAnimationAmplitude || 0;
        const animationEnabled = params.animateShape && amplitude > 0;
        
        if (animationEnabled) {
            if (!animationWasActive) {
                lastGeometryUpdate = 0; // Force immediate rebuild on activation
            }
            const speed = Math.max(params.shapeAnimationSpeed || 0, 0);
            if (speed > 0) {
                shapeAnimationAngle = (shapeAnimationAngle + deltaSeconds * speed * Math.PI * 2) % (Math.PI * 2);
            }
            const nextOffset = Math.sin(shapeAnimationAngle) * amplitude;
            params.shapeAnimationOffset = nextOffset;
            
            if ((now - lastGeometryUpdate) >= animationFrameInterval) {
                requiresMeshUpdate = true;
            }
        } else {
            const currentOffset = params.shapeAnimationOffset || 0;
            if (Math.abs(currentOffset) > 1e-4) {
                params.shapeAnimationOffset = 0;
                requiresMeshUpdate = true;
            }
        }
        animationWasActive = animationEnabled;
        
        // Update outline if camera changed and outline is enabled (throttled)
        checkCameraChange();
        if (needsOutlineUpdate) {
            requiresMeshUpdate = true;
        }
        
        if (requiresMeshUpdate) {
            updateMesh(sceneState.meshGroup, params, sceneState.currentCamera);
            needsOutlineUpdate = false;
            lastGeometryUpdate = now;
        }
        
        renderer.render(scene, sceneState.currentCamera);
    }
    animate();
}

