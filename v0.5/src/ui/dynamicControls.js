// Dynamic UI control generation based on active path, cross-section, and modifiers

function createControlGroup(label, controlElement) {
    const group = document.createElement('div');
    group.className = 'control-group';
    
    const labelEl = document.createElement('label');
    labelEl.textContent = label;
    if (controlElement.id) {
        labelEl.setAttribute('for', controlElement.id);
    }
    
    group.appendChild(labelEl);
    group.appendChild(controlElement);
    
    return group;
}

function createRangeControl(paramName, config, params, onUpdate) {
    const container = document.createElement('div');
    container.className = 'control-group';
    
    const label = document.createElement('label');
    label.setAttribute('for', paramName);
    label.textContent = config.label || paramName;
    container.appendChild(label);
    
    const slider = document.createElement('input');
    slider.type = 'range';
    slider.id = paramName;
    slider.min = config.min;
    slider.max = config.max;
    slider.step = config.step;
    slider.value = params[paramName] !== undefined ? params[paramName] : config.default || config.min;
    container.appendChild(slider);
    
    const valueDisplay = document.createElement('span');
    valueDisplay.className = 'value-display';
    valueDisplay.id = paramName + 'Value';
    valueDisplay.textContent = parseFloat(slider.value).toFixed(2);
    container.appendChild(valueDisplay);
    
    slider.addEventListener('input', (e) => {
        params[paramName] = parseFloat(e.target.value);
        valueDisplay.textContent = parseFloat(e.target.value).toFixed(2);
        onUpdate();
    });
    
    return container;
}

function createSelectControl(paramName, config, params, onUpdate) {
    const container = document.createElement('div');
    container.className = 'control-group';
    
    const label = document.createElement('label');
    label.setAttribute('for', paramName);
    label.textContent = config.label || paramName;
    container.appendChild(label);
    
    const select = document.createElement('select');
    select.id = paramName;
    config.options.forEach(option => {
        const optionEl = document.createElement('option');
        optionEl.value = option;
        optionEl.textContent = option;
        select.appendChild(optionEl);
    });
    select.value = params[paramName] !== undefined ? params[paramName] : config.options[0];
    container.appendChild(select);
    
    select.addEventListener('change', (e) => {
        params[paramName] = e.target.value;
        onUpdate();
    });
    
    return container;
}

function createCheckboxControl(paramName, config, params, onUpdate) {
    const container = document.createElement('div');
    container.className = 'control-group';
    
    const label = document.createElement('label');
    label.setAttribute('for', paramName);
    label.textContent = config.label || paramName;
    container.appendChild(label);
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = paramName;
    checkbox.checked = params[paramName] !== undefined ? params[paramName] : config.default || false;
    container.appendChild(checkbox);
    
    checkbox.addEventListener('change', (e) => {
        params[paramName] = e.target.checked;
        onUpdate();
    });
    
    return container;
}

function addControl(container, paramName, config, params, onUpdate) {
    let control;
    if (config.type === 'range') {
        control = createRangeControl(paramName, config, params, onUpdate);
    } else if (config.type === 'select') {
        control = createSelectControl(paramName, config, params, onUpdate);
    } else if (config.type === 'checkbox') {
        control = createCheckboxControl(paramName, config, params, onUpdate);
    } else {
        return; // Unknown type
    }
    container.appendChild(control);
}

function generateGeometryControls(params, onUpdate) {
    const container = document.getElementById('geometry-controls');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Geometry mode selector
    const modeSelectContainer = document.createElement('div');
    modeSelectContainer.className = 'control-group';
    const modeLabel = document.createElement('label');
    modeLabel.setAttribute('for', 'geometryMode');
    modeLabel.textContent = 'Geometry Mode';
    modeSelectContainer.appendChild(modeLabel);
    
    const modeSelect = document.createElement('select');
    modeSelect.id = 'geometryMode';
    [
        { value: 'tube', label: 'Parametric Tube' },
        { value: 'primitive', label: 'Primitive Shape' }
    ].forEach(option => {
        const optionEl = document.createElement('option');
        optionEl.value = option.value;
        optionEl.textContent = option.label;
        modeSelect.appendChild(optionEl);
    });
    modeSelect.value = params.geometryMode || 'tube';
    modeSelect.addEventListener('change', (e) => {
        params.geometryMode = e.target.value;
        generateGeometryControls(params, onUpdate);
        onUpdate();
    });
    modeSelectContainer.appendChild(modeSelect);
    container.appendChild(modeSelectContainer);
    
    if ((params.geometryMode || 'tube') === 'primitive') {
        buildPrimitiveControls(container, params, onUpdate);
        return;
    }
    
    // Path type selector
    const pathSelectContainer = document.createElement('div');
    pathSelectContainer.className = 'control-group';
    const pathLabel = document.createElement('label');
    pathLabel.setAttribute('for', 'pathType');
    pathLabel.textContent = 'Path Type';
    pathSelectContainer.appendChild(pathLabel);
    
    const pathSelect = document.createElement('select');
    pathSelect.id = 'pathType';
    Object.keys(pathGenerators).forEach(key => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = pathGenerators[key].name;
        pathSelect.appendChild(option);
    });
    pathSelect.value = params.pathType || 'spiral';
    pathSelectContainer.appendChild(pathSelect);
    
    pathSelect.addEventListener('change', (e) => {
        params.pathType = e.target.value;
        generateGeometryControls(params, onUpdate); // Regenerate controls
        onUpdate();
    });
    
    container.appendChild(pathSelectContainer);
    
    // Path-specific controls
    const pathGen = getPathGenerator(params.pathType || 'spiral');
    if (pathGen && pathGen.params) {
        Object.entries(pathGen.params).forEach(([key, config]) => {
            addControl(container, key, config, params, onUpdate);
        });
    }
    
    // Number of turns (for paths that use it)
    if (params.pathType === 'spiral' || params.pathType === 'helix' || params.pathType === 'figure-8' || 
        params.pathType === 'spheroid-spiral' || params.pathType === 'sphere-spiral') {
        const nControl = createRangeControl('N', {
            type: 'range',
            min: 0.5,
            max: 6,
            step: 0.01,
            label: 'Turns (N)'
        }, params, onUpdate);
        container.appendChild(nControl);
    }
    
    // Cross-section type selector
    const crossSectionSelectContainer = document.createElement('div');
    crossSectionSelectContainer.className = 'control-group';
    const crossSectionLabel = document.createElement('label');
    crossSectionLabel.setAttribute('for', 'crossSectionType');
    crossSectionLabel.textContent = 'Cross-Section Type';
    crossSectionSelectContainer.appendChild(crossSectionLabel);
    
    const crossSectionSelect = document.createElement('select');
    crossSectionSelect.id = 'crossSectionType';
    Object.keys(crossSectionGenerators).forEach(key => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = crossSectionGenerators[key].name;
        crossSectionSelect.appendChild(option);
    });
    crossSectionSelect.value = params.crossSectionType || 'circle';
    crossSectionSelectContainer.appendChild(crossSectionSelect);
    
    crossSectionSelect.addEventListener('change', (e) => {
        params.crossSectionType = e.target.value;
        generateGeometryControls(params, onUpdate); // Regenerate controls
        onUpdate();
    });
    
    container.appendChild(crossSectionSelectContainer);
    
    // Cross-section-specific controls
    const crossSection = getCrossSectionGenerator(params.crossSectionType || 'circle');
    if (crossSection && crossSection.params) {
        Object.entries(crossSection.params).forEach(([key, config]) => {
            addControl(container, key, config, params, onUpdate);
        });
    }
    
    // Base radius
    const r0Control = createRangeControl('r0', {
        type: 'range',
        min: 0.1,
        max: 1.5,
        step: 0.01,
        label: 'Tube Radius (r0)'
    }, params, onUpdate);
    container.appendChild(r0Control);
    
    // Wall thickness
    const wallThicknessControl = createRangeControl('wallThickness', {
        type: 'range',
        min: 0.01,
        max: 0.3,
        step: 0.01,
        label: 'Wall Thickness'
    }, params, onUpdate);
    container.appendChild(wallThicknessControl);
    
    // Modifiers section
    const modifiersHeader = document.createElement('h4');
    modifiersHeader.textContent = 'Modifiers';
    modifiersHeader.style.marginTop = '20px';
    modifiersHeader.style.marginBottom = '10px';
    container.appendChild(modifiersHeader);
    
    Object.entries(modifiers).forEach(([key, modifier]) => {
        // Modifier toggle
        const toggleContainer = document.createElement('div');
        toggleContainer.className = 'control-group';
        const toggleLabel = document.createElement('label');
        toggleLabel.setAttribute('for', `modifier_${key}`);
        toggleLabel.textContent = modifier.name;
        toggleContainer.appendChild(toggleLabel);
        
        const toggle = document.createElement('input');
        toggle.type = 'checkbox';
        toggle.id = `modifier_${key}`;
        toggle.checked = modifier.enabled;
        toggleContainer.appendChild(toggle);
        
        toggle.addEventListener('change', (e) => {
            modifier.enabled = e.target.checked;
            // Show/hide modifier controls
            const controlsDiv = document.getElementById(`modifier_${key}_controls`);
            if (controlsDiv) {
                controlsDiv.style.display = e.target.checked ? 'block' : 'none';
            }
            onUpdate();
        });
        
        container.appendChild(toggleContainer);
        
        // Modifier parameters
        const controlsDiv = document.createElement('div');
        controlsDiv.id = `modifier_${key}_controls`;
        controlsDiv.style.display = modifier.enabled ? 'block' : 'none';
        controlsDiv.style.marginLeft = '20px';
        controlsDiv.style.marginBottom = '10px';
        
        if (modifier.params) {
            Object.entries(modifier.params).forEach(([paramKey, config]) => {
                // Map modifier parameter keys to actual param names
                let actualParamName = paramKey;
                if (key === 'radius-decay') {
                    if (paramKey === 'decayMode') actualParamName = 'decayMode';
                    else if (paramKey === 'k') actualParamName = 'k';
                    else if (paramKey === 'alpha') actualParamName = 'alpha';
                    else if (paramKey === 'rMin') actualParamName = 'rMin';
                } else if (key === 'twist') {
                    if (paramKey === 'twistAmount') actualParamName = 'twistAmount';
                } else if (key === 'eccentricity') {
                    if (paramKey === 'epsilon') actualParamName = 'epsilon';
                } else if (key === 'taper') {
                    if (paramKey === 'taperAmount') actualParamName = 'taperAmount';
                } else if (key === 'wave') {
                    if (paramKey === 'amplitude') actualParamName = 'waveAmplitude';
                    else if (paramKey === 'frequency') actualParamName = 'waveFrequency';
                    else if (paramKey === 'phase') actualParamName = 'wavePhase';
                }
                
                // Initialize param if it doesn't exist
                if (params[actualParamName] === undefined) {
                    if (config.type === 'range') {
                        params[actualParamName] = config.default !== undefined ? config.default : config.min;
                    } else if (config.type === 'select') {
                        params[actualParamName] = config.options[0];
                    }
                }
                
                // Create a modified config with the actual param name
                const modifiedConfig = { ...config };
                addControl(controlsDiv, actualParamName, modifiedConfig, params, onUpdate);
            });
        }
        
        container.appendChild(controlsDiv);
    });
    
    // Mesh density controls
    const densityHeader = document.createElement('h4');
    densityHeader.textContent = 'Mesh Density';
    densityHeader.style.marginTop = '20px';
    densityHeader.style.marginBottom = '10px';
    container.appendChild(densityHeader);
    
    const uDivControl = createRangeControl('uDiv', {
        type: 'range',
        min: 32,
        max: 480,
        step: 8,
        label: 'U Divisions'
    }, params, onUpdate);
    uDivControl.querySelector('.value-display').textContent = params.uDiv;
    uDivControl.querySelector('input[type="range"]').addEventListener('input', (e) => {
        uDivControl.querySelector('.value-display').textContent = e.target.value;
    });
    container.appendChild(uDivControl);
    
    const vDivControl = createRangeControl('vDiv', {
        type: 'range',
        min: 16,
        max: 160,
        step: 4,
        label: 'V Divisions'
    }, params, onUpdate);
    vDivControl.querySelector('.value-display').textContent = params.vDiv;
    vDivControl.querySelector('input[type="range"]').addEventListener('input', (e) => {
        vDivControl.querySelector('.value-display').textContent = e.target.value;
    });
    container.appendChild(vDivControl);
}

function buildPrimitiveControls(container, params, onUpdate) {
    // Primitive type selector
    const primitiveSelectContainer = document.createElement('div');
    primitiveSelectContainer.className = 'control-group';
    const primitiveLabel = document.createElement('label');
    primitiveLabel.setAttribute('for', 'primitiveType');
    primitiveLabel.textContent = 'Primitive Type';
    primitiveSelectContainer.appendChild(primitiveLabel);
    
    const primitiveSelect = document.createElement('select');
    primitiveSelect.id = 'primitiveType';
    Object.keys(primitiveGenerators).forEach(key => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = primitiveGenerators[key].name;
        primitiveSelect.appendChild(option);
    });
    primitiveSelect.value = params.primitiveType || 'sphere';
    primitiveSelect.addEventListener('change', (e) => {
        params.primitiveType = e.target.value;
        generateGeometryControls(params, onUpdate);
        onUpdate();
    });
    primitiveSelectContainer.appendChild(primitiveSelect);
    container.appendChild(primitiveSelectContainer);
    
    // Primitive-specific parameter controls
    const primitiveGen = getPrimitiveGenerator(params.primitiveType || 'sphere');
    if (primitiveGen && primitiveGen.params) {
        Object.entries(primitiveGen.params).forEach(([key, config]) => {
            addControl(container, key, config, params, onUpdate);
        });
    }
    
    // Deformation controls
    const deformHeader = document.createElement('h4');
    deformHeader.textContent = 'Deformations';
    deformHeader.style.marginTop = '20px';
    deformHeader.style.marginBottom = '10px';
    container.appendChild(deformHeader);
    
    Object.entries(primitiveDeformers).forEach(([key, config]) => {
        addControl(container, key, config, params, onUpdate);
    });
}

