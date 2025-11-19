// Scene setup: cameras, lights, controls

function createScene(canvas) {
    const scene = new THREE.Scene();
    
    // Setup cameras
    const aspect = window.innerWidth / window.innerHeight;
    const orthoSize = 3;
    const orthoCamera = new THREE.OrthographicCamera(
        -orthoSize * aspect, orthoSize * aspect, 
        orthoSize, -orthoSize, 
        0.1, 1000
    );
    const perspCamera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000);
    
    // Initial camera position
    const initialPosition = new THREE.Vector3(2.73, -6.17, 4.53);
    orthoCamera.position.copy(initialPosition);
    perspCamera.position.copy(initialPosition);
    
    // OrbitControls
    let currentCamera = orthoCamera;
    const orbitControls = new THREE.OrbitControls(currentCamera, canvas);
    orbitControls.enableDamping = true;
    orbitControls.dampingFactor = 0.05;
    orbitControls.target.set(0, 0, 0);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);
    
    // Grid helper
    const gridHelper = new THREE.GridHelper(10, 10, 0x444444, 0x222222);
    scene.add(gridHelper);
    
    // Mesh group
    const meshGroup = new THREE.Group();
    scene.add(meshGroup);
    
    return {
        scene,
        orthoCamera,
        perspCamera,
        currentCamera,
        orbitControls,
        gridHelper,
        meshGroup,
        orthoSize
    };
}

function updateCameraProjection(sceneState, projection) {
    const oldCamera = sceneState.currentCamera;
    sceneState.currentCamera = projection === 'Orthographic' 
        ? sceneState.orthoCamera 
        : sceneState.perspCamera;
    
    // Copy position and target from old camera
    sceneState.currentCamera.position.copy(oldCamera.position);
    sceneState.orbitControls.object = sceneState.currentCamera;
    sceneState.orbitControls.update();
}

function handleResize(sceneState) {
    const aspect = window.innerWidth / window.innerHeight;
    
    // Update orthographic camera
    sceneState.orthoCamera.left = -sceneState.orthoSize * aspect;
    sceneState.orthoCamera.right = sceneState.orthoSize * aspect;
    sceneState.orthoCamera.updateProjectionMatrix();
    
    // Update perspective camera
    sceneState.perspCamera.aspect = aspect;
    sceneState.perspCamera.updateProjectionMatrix();
}

