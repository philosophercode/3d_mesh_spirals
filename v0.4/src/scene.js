function createScene(canvas) {
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();

    // Setup both cameras
    const aspect = window.innerWidth / window.innerHeight;
    const orthoSize = 3;
    const orthoCamera = new THREE.OrthographicCamera(
        -orthoSize * aspect, orthoSize * aspect, orthoSize, -orthoSize, 0.1, 1000
    );
    const perspCamera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000);

    let camera = orthoCamera;
    orthoCamera.position.set(5, 4, 5);
    perspCamera.position.set(5, 4, 5);

    // Check if OrbitControls is available
    if (typeof THREE === 'undefined' || !THREE.OrbitControls) {
        throw new Error('OrbitControls is not available. Make sure the OrbitControls script is loaded after Three.js.');
    }

    const orbitControls = new THREE.OrbitControls(camera, canvas);
    orbitControls.enableDamping = true;
    orbitControls.dampingFactor = 0.05;

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
        renderer,
        scene,
        orthoCamera,
        perspCamera,
        camera,
        orbitControls,
        gridHelper,
        meshGroup,
        orthoSize
    };
}

function updateCameraProjection(sceneState, projection) {
    sceneState.camera = projection === 'Orthographic' ? sceneState.orthoCamera : sceneState.perspCamera;
    sceneState.orbitControls.object = sceneState.camera;
    sceneState.camera.position.copy(sceneState.orbitControls.target).add(new THREE.Vector3(5, 4, 5));
    sceneState.orbitControls.update();
}

function handleResize(sceneState) {
    const aspect = window.innerWidth / window.innerHeight;

    sceneState.orthoCamera.left = -sceneState.orthoSize * aspect;
    sceneState.orthoCamera.right = sceneState.orthoSize * aspect;
    sceneState.orthoCamera.updateProjectionMatrix();

    sceneState.perspCamera.aspect = aspect;
    sceneState.perspCamera.updateProjectionMatrix();

    sceneState.renderer.setSize(window.innerWidth, window.innerHeight);
}

