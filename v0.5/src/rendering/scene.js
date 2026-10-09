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

// Narrow windows show more height so the width of the scene still fits
const DESIGN_ASPECT = 1.6;

// Size of the drawing area in CSS pixels. Every projection (screen, outline,
// SVG export) uses this, so they all agree with what's on screen
function getViewportSize() {
    const canvas = document.getElementById('canvas');
    return {
        width: (canvas && canvas.clientWidth) || window.innerWidth,
        height: (canvas && canvas.clientHeight) || window.innerHeight
    };
}

// Phones show the controls as a full-width sheet along the bottom
function isBottomSheet(panel) {
    return panel.getBoundingClientRect().width >= window.innerWidth * 0.9;
}

// On phones the canvas stops where the sheet starts, so nothing scrolls over it
function layoutCanvas(sceneState) {
    const panel = document.getElementById('ui-panel');
    let height = window.innerHeight;
    if (panel && isBottomSheet(panel)) {
        height = Math.max(120, Math.round(panel.getBoundingClientRect().top));
    }
    if (sceneState.renderer) {
        sceneState.renderer.setSize(window.innerWidth, height);
    }
}

function handleResize(sceneState) {
    layoutCanvas(sceneState);
    const { width, height } = getViewportSize();
    const aspect = width / height;
    const stretch = Math.max(1, DESIGN_ASPECT / aspect);
    
    // Update orthographic camera
    const halfHeight = sceneState.orthoSize * stretch;
    sceneState.orthoCamera.top = halfHeight;
    sceneState.orthoCamera.bottom = -halfHeight;
    sceneState.orthoCamera.left = -halfHeight * aspect;
    sceneState.orthoCamera.right = halfHeight * aspect;
    
    // Update perspective camera (50 degrees on wide windows)
    sceneState.perspCamera.aspect = aspect;
    sceneState.perspCamera.fov = THREE.MathUtils.radToDeg(
        2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(25)) * stretch)
    );
    
    applyViewArea(sceneState);
}

// The part of the canvas the controls panel leaves uncovered
function getViewArea() {
    const { width, height } = getViewportSize();
    const panel = document.getElementById('ui-panel');
    if (!panel || isBottomSheet(panel)) return { x: 0, y: 0, width, height };
    // Floating panel on the right
    const left = panel.getBoundingClientRect().left;
    return { x: 0, y: 0, width: Math.min(width, Math.max(width * 0.4, left)), height };
}

// Centre the scene in the uncovered area. Exports project with the same
// camera, so they stay in sync with what's on screen
function applyViewArea(sceneState) {
    const { width, height } = getViewportSize();
    const area = getViewArea();
    const dx = width / 2 - (area.x + area.width / 2);
    const dy = height / 2 - (area.y + area.height / 2);
    [sceneState.orthoCamera, sceneState.perspCamera].forEach(cam => {
        if (Math.abs(dx) < 1 && Math.abs(dy) < 1) {
            cam.clearViewOffset();
        } else {
            cam.setViewOffset(width, height, dx, dy, width, height);
        }
        cam.updateProjectionMatrix();
    });
}
