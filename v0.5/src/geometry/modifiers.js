// Modifiers - apply transformations to the geometry

const modifiers = {
    'radius-decay': {
        name: 'Radius Decay',
        enabled: true,
        apply: (u, baseRadius, params) => {
            if (!modifiers['radius-decay'].enabled) return baseRadius;
            
            if (params.decayMode === 'Exponential') {
                return baseRadius * Math.exp(-params.k * u);
            } else if (params.decayMode === 'Linear') {
                return Math.max(baseRadius - params.alpha * u, params.rMin);
            }
            return baseRadius;
        },
        params: {
            decayMode: { type: 'select', options: ['None', 'Exponential', 'Linear'], label: 'Decay Mode' },
            k: { type: 'range', min: 0, max: 0.6, step: 0.01, label: 'Decay Constant (k)' },
            alpha: { type: 'range', min: 0, max: 0.1, step: 0.001, label: 'Linear Rate (α)' },
            rMin: { type: 'range', min: 0.01, max: 0.5, step: 0.01, label: 'Min Radius' }
        }
    },
    
    'twist': {
        name: 'Twist',
        enabled: true,
        apply: (u, v, params) => {
            if (!modifiers['twist'].enabled) return v;
            return v + params.twistAmount * (u / (2 * Math.PI));
        },
        params: {
            twistAmount: { type: 'range', min: -2, max: 2, step: 0.01, label: 'Twist Amount' }
        }
    },
    
    'eccentricity': {
        name: 'Eccentricity',
        enabled: true,
        apply: (v, radius, params) => {
            if (!modifiers['eccentricity'].enabled) return radius;
            return radius * (1 + params.epsilon * Math.cos(v));
        },
        params: {
            epsilon: { type: 'range', min: 0, max: 0.5, step: 0.01, label: 'Eccentricity (ε)' }
        }
    },
    
    'taper': {
        name: 'Taper',
        enabled: false,
        apply: (u, radius, params) => {
            if (!modifiers['taper'].enabled) return radius;
            const uMax = 2 * Math.PI * (params.N || 2.75);
            const t = u / uMax;
            return radius * (1 - params.taperAmount * t);
        },
        params: {
            taperAmount: { type: 'range', min: 0, max: 1, step: 0.01, label: 'Taper Amount' }
        }
    },
    
    'wave': {
        name: 'Wave Deformation',
        enabled: false,
        apply: (u, v, position, params) => {
            if (!modifiers['wave'].enabled) return position;
            const amplitude = params.waveAmplitude || 0;
            const frequency = params.waveFrequency || 1;
            const phase = params.wavePhase || 0;
            const wave = amplitude * Math.sin(frequency * u + phase);
            // Apply wave along the normal direction
            const offset = position.clone().normalize().multiplyScalar(wave);
            return position.clone().add(offset);
        },
        params: {
            amplitude: { type: 'range', min: 0, max: 0.5, step: 0.01, label: 'Amplitude' },
            frequency: { type: 'range', min: 1, max: 10, step: 0.1, label: 'Frequency' },
            phase: { type: 'range', min: 0, max: 2 * Math.PI, step: 0.1, label: 'Phase' }
        }
    }
};

function getModifier(modifierKey) {
    return modifiers[modifierKey];
}

function isModifierEnabled(modifierKey) {
    return modifiers[modifierKey] && modifiers[modifierKey].enabled;
}

