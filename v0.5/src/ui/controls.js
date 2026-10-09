// UI control setup and event handlers

function setupUI(params, sceneState, scene, gridHelper, updateMesh) {
    // Helper to call updateMesh with camera
    const updateMeshWithCamera = () => {
        updateMesh(sceneState.meshGroup, params, sceneState.currentCamera);
    };
    
    // Generate dynamic geometry controls
    generateGeometryControls(params, updateMeshWithCamera);
    
    // Get rendering UI elements
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
        if (element) {
            element.textContent = value.toFixed(decimals);
        }
    }
    
    // Initialize UI values
    function syncUI() {
        if (renderStyleSelect) renderStyleSelect.value = params.renderStyle;
        if (projectionSelect) projectionSelect.value = params.projection;
        if (showInnerSurfaceCheck) showInnerSurfaceCheck.checked = params.showInnerSurface;
        if (showOutlineCheck) showOutlineCheck.checked = params.showOutline;
        if (outlineMethodSelect) outlineMethodSelect.value = params.outlineMethod;
        if (lineWidthSlider) {
            lineWidthSlider.value = params.lineWidth;
            updateValueDisplay(lineWidthValue, params.lineWidth, 1);
        }
        if (outerColorPicker) outerColorPicker.value = params.outerColor;
        if (innerColorPicker) innerColorPicker.value = params.innerColor;
        if (backgroundColorPicker) backgroundColorPicker.value = params.backgroundColor;
    }
    
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
            modifiers: Object.fromEntries(Object.entries(modifiers).map(([key, m]) => [key, m.enabled])),
            camera: {
                zoom: sceneState.currentCamera.zoom,
                up: {
                    x: sceneState.currentCamera.up.x,
                    y: sceneState.currentCamera.up.y,
                    z: sceneState.currentCamera.up.z
                },
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
                
                // Load modifier switches before geometry so the controls show the right state
                if (config.modifiers) {
                    Object.entries(config.modifiers).forEach(([key, enabled]) => {
                        if (modifiers[key]) modifiers[key].enabled = enabled;
                    });
                }
                
                // Load geometry parameters
                if (config.geometry) {
                    Object.assign(params, config.geometry);
                    scene.background = new THREE.Color(params.backgroundColor);
                    gridHelper.visible = params.showGrid;
                    // Regenerate geometry controls with new params
                    generateGeometryControls(params, updateMeshWithCamera);
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
                    
                    if (config.camera.zoom) {
                        sceneState.currentCamera.zoom = config.camera.zoom;
                        sceneState.currentCamera.updateProjectionMatrix();
                    }
                    
                    // Older configs have no up vector: use the default
                    const up = config.camera.up || { x: 0, y: 1, z: 0 };
                    [sceneState.orthoCamera, sceneState.perspCamera].forEach(cam => cam.up.set(up.x, up.y, up.z));
                    
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
    
    // Collapsible panel (starts collapsed on phones so the drawing is visible)
    const panel = document.getElementById('ui-panel');
    const panelToggle = document.getElementById('panelToggle');
    function setPanelCollapsed(collapsed) {
        panel.classList.toggle('collapsed', collapsed);
        panelToggle.setAttribute('aria-expanded', String(!collapsed));
        handleResize(sceneState);
    }
    panelToggle.addEventListener('click', () => setPanelCollapsed(!panel.classList.contains('collapsed')));
    panelToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            panelToggle.click();
        }
    });
    setPanelCollapsed(window.matchMedia('(max-width: 700px)').matches);
    
    // Presets: built-in ones from params.js plus ones saved in this browser
    const USER_PRESETS_KEY = 'mesh-spirals:user-presets';
    const presetSelect = document.getElementById('presetSelect');
    const presetNameInput = document.getElementById('presetNameInput');
    const savePresetBtn = document.getElementById('savePresetBtn');
    const deletePresetBtn = document.getElementById('deletePresetBtn');
    const presetStatus = document.getElementById('presetStatus');
    
    function loadUserPresets() {
        try {
            return JSON.parse(localStorage.getItem(USER_PRESETS_KEY)) || {};
        } catch (e) {
            return {};
        }
    }
    
    function storeUserPresets(userPresets) {
        try {
            localStorage.setItem(USER_PRESETS_KEY, JSON.stringify(userPresets));
            return true;
        } catch (e) {
            return false;
        }
    }
    
    function allPresets() {
        return { ...presets, ...loadUserPresets() };
    }
    
    function fillPresetSelect(selected) {
        presetSelect.innerHTML = '<option value="">Custom</option>';
        Object.entries(allPresets()).forEach(([key, preset]) => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = preset.label;
            presetSelect.appendChild(option);
        });
        presetSelect.value = selected && allPresets()[selected] ? selected : '';
        deletePresetBtn.hidden = !(presetSelect.value in loadUserPresets());
    }
    
    function applyPreset(key) {
        const preset = allPresets()[key];
        if (!preset) return false;
        
        Object.entries(preset.modifiers || {}).forEach(([name, enabled]) => {
            if (modifiers[name]) modifiers[name].enabled = enabled;
        });
        Object.assign(params, preset.params);
        scene.background = new THREE.Color(params.backgroundColor);
        gridHelper.visible = params.showGrid;
        
        if (preset.camera) {
            const cam = preset.camera;
            params.projection = cam.projection || params.projection;
            updateCameraProjection(sceneState, params.projection);
            const up = cam.up || { x: 0, y: 1, z: 0 };
            [sceneState.orthoCamera, sceneState.perspCamera].forEach(c => c.up.set(up.x, up.y, up.z));
            sceneState.currentCamera.position.set(cam.position.x, cam.position.y, cam.position.z);
            sceneState.orbitControls.target.set(cam.target.x, cam.target.y, cam.target.z);
            const camera = sceneState.currentCamera;
            if (cam.frameWidth && camera.isOrthographicCamera) {
                // Fit the preset's frame (world units) into the area the panel leaves free
                const area = getViewArea();
                const unitsPerPixel = Math.max(cam.frameWidth / area.width, cam.frameHeight / area.height);
                camera.zoom = (camera.top - camera.bottom) / (getViewportSize().height * unitsPerPixel);
            } else if (cam.zoom) {
                camera.zoom = cam.zoom;
            }
            camera.updateProjectionMatrix();
            sceneState.orbitControls.update();
        }
        
        generateGeometryControls(params, updateMeshWithCamera);
        updateMeshWithCamera();
        syncUI();
        fillPresetSelect(key);
        
        // Shareable link to this preset (built-in presets work for anyone)
        try {
            history.replaceState(null, '', '#' + key);
        } catch (e) {
            // Some embedded viewers don't allow changing the URL
        }
        return true;
    }
    
    presetSelect.addEventListener('change', (e) => {
        if (e.target.value) {
            applyPreset(e.target.value);
        } else {
            deletePresetBtn.hidden = true;
        }
    });
    
    savePresetBtn.addEventListener('click', () => {
        const label = presetNameInput.value.trim();
        if (!label) {
            presetStatus.textContent = 'Type a name for the preset first.';
            presetNameInput.focus();
            return;
        }
        const slug = label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'preset';
        const key = 'my-' + slug;
        const camera = sceneState.currentCamera;
        const userPresets = loadUserPresets();
        userPresets[key] = {
            label,
            modifiers: Object.fromEntries(Object.entries(modifiers).map(([name, m]) => [name, m.enabled])),
            params: { ...params },
            camera: {
                projection: params.projection,
                position: { x: camera.position.x, y: camera.position.y, z: camera.position.z },
                target: {
                    x: sceneState.orbitControls.target.x,
                    y: sceneState.orbitControls.target.y,
                    z: sceneState.orbitControls.target.z
                },
                up: { x: camera.up.x, y: camera.up.y, z: camera.up.z },
                zoom: camera.zoom
            }
        };
        if (!storeUserPresets(userPresets)) {
            presetStatus.textContent = "This browser won't store presets here. Use Save Config instead.";
            return;
        }
        presetNameInput.value = '';
        fillPresetSelect(key);
        presetStatus.textContent = `Saved "${label}". It stays in this browser.`;
    });
    
    presetNameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') savePresetBtn.click();
    });
    
    deletePresetBtn.addEventListener('click', () => {
        const key = presetSelect.value;
        const userPresets = loadUserPresets();
        if (!(key in userPresets)) return;
        const label = userPresets[key].label;
        delete userPresets[key];
        storeUserPresets(userPresets);
        fillPresetSelect('');
        presetStatus.textContent = `Deleted "${label}".`;
    });
    
    fillPresetSelect('');
    
    // Open the preset named in the link, e.g. #denes-snail-pyramid
    const linked = decodeURIComponent(window.location.hash.slice(1));
    if (linked) applyPreset(linked);
    
    // Initialize UI
    syncUI();
}

