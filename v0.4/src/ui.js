const R_MIN = 0.35;
const R_MAX = 3.5;

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function saveConfig(currentParams, sceneState) {
    // Determine projection type
    const projection = sceneState.camera === sceneState.orthoCamera ? 'Orthographic' : 'Perspective';
    
    // Save camera state
    const cameraState = {
        position: {
            x: sceneState.camera.position.x,
            y: sceneState.camera.position.y,
            z: sceneState.camera.position.z
        },
        target: {
            x: sceneState.orbitControls.target.x,
            y: sceneState.orbitControls.target.y,
            z: sceneState.orbitControls.target.z
        },
        projection: projection
    };
    
    // Create config object
    const config = {
        geometry: { ...currentParams },
        camera: cameraState
    };
    
    // Convert to JSON and download
    const json = JSON.stringify(config, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'spiral-config.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function loadConfig(currentParams, sceneState, scene, gridHelper, syncModernUI, updateMesh) {
    const fileInput = document.getElementById('loadFileInput');
    
    fileInput.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const config = JSON.parse(event.target.result);
                
                // Load geometry parameters
                if (config.geometry) {
                    Object.assign(currentParams, config.geometry);
                    
                    // Update scene background and grid
                    scene.background = new THREE.Color(currentParams.backgroundColor);
                    gridHelper.visible = currentParams.showGrid;
                    
                    // Update mesh
                    updateMesh(sceneState.meshGroup, currentParams);
                    
                    // Sync UI sliders
                    syncModernUI();
                }
                
                // Load camera state
                if (config.camera) {
                    // Update projection if needed
                    if (config.camera.projection) {
                        updateCameraProjection(sceneState, config.camera.projection);
                    }
                    
                    // Restore camera position
                    if (config.camera.position) {
                        sceneState.camera.position.set(
                            config.camera.position.x,
                            config.camera.position.y,
                            config.camera.position.z
                        );
                    }
                    
                    // Restore camera target
                    if (config.camera.target) {
                        sceneState.orbitControls.target.set(
                            config.camera.target.x,
                            config.camera.target.y,
                            config.camera.target.z
                        );
                    }
                    
                    // Update orbit controls
                    sceneState.orbitControls.update();
                }
            } catch (error) {
                alert('Error loading config: ' + error.message);
                console.error('Load error:', error);
            }
            
            // Reset file input
            fileInput.value = '';
        };
        
        reader.readAsText(file);
    };
    
    fileInput.click();
}

function setupUI(currentParams, sceneState, scene, gridHelper) {
    // Get modern UI controls
    const shapeSlider = document.getElementById('shapeSlider');
    const turnsSlider = document.getElementById('turnsSlider');
    const decaySlider = document.getElementById('decaySlider');
    const complexitySlider = document.getElementById('complexitySlider');
    const twistSlider = document.getElementById('twistSlider');
    const exportSVGBtn = document.getElementById('exportSVGBtn');
    const exportOBJBtn = document.getElementById('exportOBJBtn');
    const tightnessSlider = document.getElementById('tightnessSlider');
    const saveBtn = document.getElementById('saveBtn');
    const loadBtn = document.getElementById('loadBtn');

    // Sync sliders with current params
    function syncModernUI() {
        // Shape: average of R and r0
        const shapeValue = ((currentParams.R - 0.5) / 4.5 + (currentParams.r0 - 0.1) / 1.4) / 2;
        shapeSlider.value = shapeValue;

        // Turn tightness maps directly to major radius
        const tightnessValue = clamp((currentParams.R - R_MIN) / (R_MAX - R_MIN), 0, 1);
        tightnessSlider.value = tightnessValue;

        // Turns: N
        turnsSlider.value = (currentParams.N - 0.5) / 5.5;

        // Decay: average of k and rMin
        decaySlider.value = (currentParams.k / 0.6 + currentParams.rMin / 0.3) / 2;

        // Complexity: average of uDiv and vDiv
        complexitySlider.value = ((currentParams.uDiv - 16) / 464 + (currentParams.vDiv - 16) / 144) / 2;

        // Twist: average of twist and h
        twistSlider.value = (currentParams.twist / (4 * Math.PI) + 0.5 + (currentParams.h / 4 + 0.5)) / 2;
    }

    // Modern UI event handlers
    shapeSlider.addEventListener('input', (e) => {
        const value = parseFloat(e.target.value);
        currentParams.R = 0.5 + value * 4.5;
        currentParams.r0 = 0.1 + value * 1.4;
        updateMesh(sceneState.meshGroup, currentParams);
    });

    tightnessSlider.addEventListener('input', (e) => {
        const value = parseFloat(e.target.value);
        currentParams.R = clamp(R_MIN + value * (R_MAX - R_MIN), R_MIN, R_MAX);
        updateMesh(sceneState.meshGroup, currentParams);
    });

    turnsSlider.addEventListener('input', (e) => {
        const value = parseFloat(e.target.value);
        currentParams.N = 0.5 + value * 5.5;
        updateMesh(sceneState.meshGroup, currentParams);
    });

    decaySlider.addEventListener('input', (e) => {
        const value = parseFloat(e.target.value);
        currentParams.k = value * 0.6;
        currentParams.rMin = value * 0.3;
        updateMesh(sceneState.meshGroup, currentParams);
    });

    complexitySlider.addEventListener('input', (e) => {
        const value = parseFloat(e.target.value);
        currentParams.uDiv = Math.floor((16 + value * 464) / 8) * 8;
        currentParams.vDiv = Math.floor((16 + value * 144) / 4) * 4;
        updateMesh(sceneState.meshGroup, currentParams);
    });

    twistSlider.addEventListener('input', (e) => {
        const value = parseFloat(e.target.value);
        currentParams.twist = (value - 0.5) * 4 * Math.PI;
        currentParams.h = (value - 0.5) * 4;
        updateMesh(sceneState.meshGroup, currentParams);
    });

    exportSVGBtn.addEventListener('click', () => {
        exportSVGBtn.disabled = true;
        exportSVGBtn.textContent = 'Exporting...';
        downloadSVG(
            sceneState.renderer,
            scene,
            sceneState.camera,
            sceneState.meshGroup,
            currentParams,
            sceneState.orbitControls
        );
        setTimeout(() => {
            exportSVGBtn.disabled = false;
            exportSVGBtn.textContent = 'Export SVG';
        }, 1000);
    });

    exportOBJBtn.addEventListener('click', () => {
        exportOBJBtn.disabled = true;
        exportOBJBtn.textContent = 'Exporting...';
        downloadOBJ(sceneState.meshGroup);
        setTimeout(() => {
            exportOBJBtn.disabled = false;
            exportOBJBtn.textContent = 'Export OBJ';
        }, 1000);
    });

    saveBtn.addEventListener('click', () => {
        saveConfig(currentParams, sceneState);
    });

    loadBtn.addEventListener('click', () => {
        loadConfig(currentParams, sceneState, scene, gridHelper, syncModernUI, updateMesh);
    });

    // Initialize modern UI values
    syncModernUI();
}

