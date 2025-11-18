const R_MIN = 0.35;
const R_MAX = 3.5;

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function setupUI(currentParams, sceneState, scene, gridHelper) {
    // Get modern UI controls
    const shapeSlider = document.getElementById('shapeSlider');
    const turnsSlider = document.getElementById('turnsSlider');
    const decaySlider = document.getElementById('decaySlider');
    const complexitySlider = document.getElementById('complexitySlider');
    const twistSlider = document.getElementById('twistSlider');
    const bgColorPicker = document.getElementById('bgColorPicker');
    const exportSVGBtn = document.getElementById('exportSVGBtn');
    const exportOBJBtn = document.getElementById('exportOBJBtn');
    const tightnessSlider = document.getElementById('tightnessSlider');

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

        // Background
        bgColorPicker.value = currentParams.backgroundColor;
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

    bgColorPicker.addEventListener('input', (e) => {
        currentParams.backgroundColor = e.target.value;
        scene.background = new THREE.Color(currentParams.backgroundColor);
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

    // Initialize modern UI values
    syncModernUI();
}

