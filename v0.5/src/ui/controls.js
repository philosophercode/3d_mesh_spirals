// UI control setup and event handlers

function setupUI(params, sceneState, scene, gridHelper, updateMesh) {
    // Helper to call updateMesh with camera
    const updateMeshWithCamera = () => {
        updateMesh(sceneState.meshGroup, params, sceneState.currentCamera);
    };
    // Get all UI elements
    const turnsSlider = document.getElementById('turnsSlider');
    const turnsValue = document.getElementById('turnsValue');
    const majorRadiusSlider = document.getElementById('majorRadiusSlider');
    const majorRadiusValue = document.getElementById('majorRadiusValue');
    const tubeRadiusSlider = document.getElementById('tubeRadiusSlider');
    const tubeRadiusValue = document.getElementById('tubeRadiusValue');
    const decaySlider = document.getElementById('decaySlider');
    const decayValue = document.getElementById('decayValue');
    const wallThicknessSlider = document.getElementById('wallThicknessSlider');
    const wallThicknessValue = document.getElementById('wallThicknessValue');
    const uDivSlider = document.getElementById('uDivSlider');
    const uDivValue = document.getElementById('uDivValue');
    const vDivSlider = document.getElementById('vDivSlider');
    const vDivValue = document.getElementById('vDivValue');
    const renderStyleSelect = document.getElementById('renderStyleSelect');
    const projectionSelect = document.getElementById('projectionSelect');
    const showInnerSurfaceCheck = document.getElementById('showInnerSurfaceCheck');
    const showOutlineCheck = document.getElementById('showOutlineCheck');
    const outlineMethodSelect = document.getElementById('outlineMethodSelect');
    const lineWidthSlider = document.getElementById('lineWidthSlider');
    const lineWidthValue = document.getElementById('lineWidthValue');
    const outerColorPicker = document.getElementById('outerColorPicker');
    const innerColorPicker = document.getElementById('innerColorPicker');
    const backgroundColorPicker = document.getElementById('backgroundColorPicker');
    const exportSVGBtn = document.getElementById('exportSVGBtn');
    const exportOBJBtn = document.getElementById('exportOBJBtn');
    const saveConfigBtn = document.getElementById('saveConfigBtn');
    const loadConfigBtn = document.getElementById('loadConfigBtn');
    const loadFileInput = document.getElementById('loadFileInput');
    
    // Helper to update value displays
    function updateValueDisplay(element, value, decimals = 2) {
        element.textContent = value.toFixed(decimals);
    }
    
    // Initialize UI values
    function syncUI() {
        turnsSlider.value = params.N;
        updateValueDisplay(turnsValue, params.N);
        majorRadiusSlider.value = params.R;
        updateValueDisplay(majorRadiusValue, params.R);
        tubeRadiusSlider.value = params.r0;
        updateValueDisplay(tubeRadiusValue, params.r0);
        decaySlider.value = params.k;
        updateValueDisplay(decayValue, params.k);
        wallThicknessSlider.value = params.wallThickness;
        updateValueDisplay(wallThicknessValue, params.wallThickness);
        uDivSlider.value = params.uDiv;
        uDivValue.textContent = params.uDiv;
        vDivSlider.value = params.vDiv;
        vDivValue.textContent = params.vDiv;
        renderStyleSelect.value = params.renderStyle;
        projectionSelect.value = params.projection;
        showInnerSurfaceCheck.checked = params.showInnerSurface;
        showOutlineCheck.checked = params.showOutline;
        outlineMethodSelect.value = params.outlineMethod;
        lineWidthSlider.value = params.lineWidth;
        updateValueDisplay(lineWidthValue, params.lineWidth, 1);
        outerColorPicker.value = params.outerColor;
        innerColorPicker.value = params.innerColor;
        backgroundColorPicker.value = params.backgroundColor;
    }
    
    // Geometry controls
    turnsSlider.addEventListener('input', (e) => {
        params.N = parseFloat(e.target.value);
        updateValueDisplay(turnsValue, params.N);
        updateMeshWithCamera();
    });
    
    majorRadiusSlider.addEventListener('input', (e) => {
        params.R = parseFloat(e.target.value);
        updateValueDisplay(majorRadiusValue, params.R);
        updateMeshWithCamera();
    });
    
    tubeRadiusSlider.addEventListener('input', (e) => {
        params.r0 = parseFloat(e.target.value);
        updateValueDisplay(tubeRadiusValue, params.r0);
        updateMeshWithCamera();
    });
    
    decaySlider.addEventListener('input', (e) => {
        params.k = parseFloat(e.target.value);
        updateValueDisplay(decayValue, params.k);
        updateMeshWithCamera();
    });
    
    wallThicknessSlider.addEventListener('input', (e) => {
        params.wallThickness = parseFloat(e.target.value);
        updateValueDisplay(wallThicknessValue, params.wallThickness);
        updateMeshWithCamera();
    });
    
    uDivSlider.addEventListener('input', (e) => {
        params.uDiv = parseInt(e.target.value);
        uDivValue.textContent = params.uDiv;
        updateMeshWithCamera();
    });
    
    vDivSlider.addEventListener('input', (e) => {
        params.vDiv = parseInt(e.target.value);
        vDivValue.textContent = params.vDiv;
        updateMeshWithCamera();
    });
    
    // Rendering controls
    renderStyleSelect.addEventListener('change', (e) => {
        params.renderStyle = e.target.value;
        updateMeshWithCamera();
    });
    
    projectionSelect.addEventListener('change', (e) => {
        params.projection = e.target.value;
        updateCameraProjection(sceneState, params.projection);
    });
    
    showInnerSurfaceCheck.addEventListener('change', (e) => {
        params.showInnerSurface = e.target.checked;
        updateMeshWithCamera();
    });
    
    showOutlineCheck.addEventListener('change', (e) => {
        params.showOutline = e.target.checked;
        updateMeshWithCamera();
    });
    
    outlineMethodSelect.addEventListener('change', (e) => {
        params.outlineMethod = e.target.value;
        updateMeshWithCamera();
    });
    
    lineWidthSlider.addEventListener('input', (e) => {
        params.lineWidth = parseFloat(e.target.value);
        updateValueDisplay(lineWidthValue, params.lineWidth, 1);
        updateMeshWithCamera();
    });
    
    outerColorPicker.addEventListener('change', (e) => {
        params.outerColor = e.target.value;
        updateMeshWithCamera();
    });
    
    innerColorPicker.addEventListener('change', (e) => {
        params.innerColor = e.target.value;
        updateMeshWithCamera();
    });
    
    backgroundColorPicker.addEventListener('change', (e) => {
        params.backgroundColor = e.target.value;
        scene.background = new THREE.Color(params.backgroundColor);
    });
    
    // Export controls
    exportSVGBtn.addEventListener('click', () => {
        exportSVGBtn.disabled = true;
        exportSVGBtn.textContent = 'Exporting...';
        exportSVG(
            sceneState.renderer,
            scene,
            sceneState.currentCamera,
            sceneState.meshGroup,
            params,
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
        exportOBJ(sceneState.meshGroup);
        setTimeout(() => {
            exportOBJBtn.disabled = false;
            exportOBJBtn.textContent = 'Export OBJ';
        }, 1000);
    });
    
    // Config controls
    saveConfigBtn.addEventListener('click', () => {
        const config = {
            geometry: { ...params },
            camera: {
                position: {
                    x: sceneState.currentCamera.position.x,
                    y: sceneState.currentCamera.position.y,
                    z: sceneState.currentCamera.position.z
                },
                target: {
                    x: sceneState.orbitControls.target.x,
                    y: sceneState.orbitControls.target.y,
                    z: sceneState.orbitControls.target.z
                },
                projection: params.projection
            }
        };
        
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
    });
    
    loadConfigBtn.addEventListener('click', () => {
        loadFileInput.click();
    });
    
    loadFileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const config = JSON.parse(event.target.result);
                
                // Load geometry parameters
                if (config.geometry) {
                    Object.assign(params, config.geometry);
                    scene.background = new THREE.Color(params.backgroundColor);
                    gridHelper.visible = params.showGrid;
                    updateMeshWithCamera();
                    syncUI();
                }
                
                // Load camera state
                if (config.camera) {
                    if (config.camera.projection) {
                        params.projection = config.camera.projection;
                        updateCameraProjection(sceneState, params.projection);
                        projectionSelect.value = params.projection;
                    }
                    
                    if (config.camera.position) {
                        sceneState.currentCamera.position.set(
                            config.camera.position.x,
                            config.camera.position.y,
                            config.camera.position.z
                        );
                    }
                    
                    if (config.camera.target) {
                        sceneState.orbitControls.target.set(
                            config.camera.target.x,
                            config.camera.target.y,
                            config.camera.target.z
                        );
                    }
                    
                    sceneState.orbitControls.update();
                }
            } catch (error) {
                alert('Error loading config: ' + error.message);
                console.error('Load error:', error);
            }
            
            loadFileInput.value = '';
        };
        
        reader.readAsText(file);
    });
    
    // Initialize UI
    syncUI();
}

