// Core tube geometry utilities

function computeRadiusAtU(u, params) {
    let r;
    if (params.mode === 'Exponential') {
        r = params.r0 * Math.exp(-params.k * u);
    } else {
        r = params.r0 - params.alpha * u;
    }
    return Math.max(r, params.rMin);
}

function computePosition(u, v, rTube, params, isInner = false) {
    // Apply wall thickness for inner surface
    const effectiveRTube = isInner ? rTube - params.wallThickness : rTube;
    
    // Apply twist
    const vTwisted = v + params.twist * (u / (2 * Math.PI));
    
    // Compute tube cross-section radius with eccentricity
    const rt = effectiveRTube * (1 + params.epsilon * Math.cos(vTwisted));
    
    // Compute 3D position
    const x = (params.R + rt * Math.cos(vTwisted)) * Math.cos(u);
    const y = (params.R + rt * Math.cos(vTwisted)) * Math.sin(u);
    const z = rt * Math.sin(vTwisted) + params.h * (u / (2 * Math.PI));
    
    return new THREE.Vector3(x, y, z);
}

