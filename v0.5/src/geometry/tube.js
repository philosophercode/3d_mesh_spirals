// Core tube geometry utilities - now using parametric path + cross-section + modifiers system

// Legacy function for backward compatibility (used by some old code)
function computeRadiusAtU(u, params) {
    // Use the new modifier system if available and enabled
    if (modifiers && modifiers['radius-decay'] && modifiers['radius-decay'].enabled) {
        return modifiers['radius-decay'].apply(u, params.r0, params);
    }
    // Fallback to old method
    let r;
    if (params.decayMode === 'Exponential' || params.mode === 'Exponential') {
        r = params.r0 * Math.exp(-(params.k || 0) * u);
    } else if (params.decayMode === 'Linear' || params.mode === 'Linear') {
        r = params.r0 - (params.alpha || 0) * u;
    } else {
        r = params.r0;
    }
    return Math.max(r, params.rMin || 0.015);
}

// Compute local coordinate frame (Frenet-Serret frame) at point u along path
function computeFrenetFrame(u, pathGen, params) {
    const tangent = pathGen.computeTangent(u, params);
    
    // Get normal - use computeNormal if available, otherwise compute from tangent
    let normal;
    if (pathGen.computeNormal) {
        normal = pathGen.computeNormal(u, params);
    } else {
        // Fallback: use up vector (0,0,1) and project out tangent component
        normal = new THREE.Vector3(0, 0, 1);
    }
    
    // Ensure normal is perpendicular to tangent
    const proj = normal.dot(tangent);
    normal.sub(tangent.clone().multiplyScalar(proj));
    if (normal.length() < 0.001) {
        // If normal is too small, use a different default
        normal = new THREE.Vector3(1, 0, 0);
        const proj2 = normal.dot(tangent);
        normal.sub(tangent.clone().multiplyScalar(proj2));
    }
    normal.normalize();
    
    // Binormal = tangent × normal
    const binormal = new THREE.Vector3().crossVectors(tangent, normal).normalize();
    
    // Recompute normal to ensure right-handed system
    const correctedNormal = new THREE.Vector3().crossVectors(binormal, tangent).normalize();
    
    return { tangent, normal: correctedNormal, binormal };
}

// Main position computation using parametric system
function computePosition(u, v, rTube, params, isInner = false) {
    // Backward compatibility: if pathType is not set, use old spiral method
    if (!params.pathType) {
        // Legacy spiral computation
        const effectiveRTube = isInner ? rTube - params.wallThickness : rTube;
        const vTwisted = v + (params.twistAmount || params.twist || 0) * (u / (2 * Math.PI));
        const rt = effectiveRTube * (1 + (params.epsilon || 0) * Math.cos(vTwisted));
        const x = (params.R + rt * Math.cos(vTwisted)) * Math.cos(u);
        const y = (params.R + rt * Math.cos(vTwisted)) * Math.sin(u);
        const z = rt * Math.sin(vTwisted) + (params.h || 0) * (u / (2 * Math.PI));
        return new THREE.Vector3(x, y, z);
    }
    
    // Get path generator
    const pathType = params.pathType || 'spiral';
    const pathGen = getPathGenerator(pathType);
    
    // Get base path position
    const pathPos = pathGen.computePath(u, params);
    
    // Compute Frenet frame for proper orientation
    const { tangent, normal, binormal } = computeFrenetFrame(u, pathGen, params);
    
    // Get base radius
    let radius = rTube || params.r0;
    
    // Apply radius modifiers
    if (modifiers && modifiers['radius-decay'] && modifiers['radius-decay'].enabled) {
        radius = modifiers['radius-decay'].apply(u, radius, params);
    }
    if (modifiers && modifiers['taper'] && modifiers['taper'].enabled) {
        radius = modifiers['taper'].apply(u, radius, params);
    }
    
    // Apply shape animation offset (breathing/pulsing effect)
    const animationOffset = params.shapeAnimationOffset || 0;
    if (animationOffset !== 0) {
        radius *= (1 + animationOffset);
    }
    
    // Ensure radius stays within valid bounds
    const wallThickness = params.wallThickness || 0;
    const minRadius = params.rMin || 0.015;
    const minOuterRadius = wallThickness > 0 ? minRadius + wallThickness : minRadius;
    radius = Math.max(radius, minOuterRadius);
    
    // Apply wall thickness for inner surface
    if (isInner) {
        radius = Math.max(radius - wallThickness, minRadius);
    }
    
    // Apply twist modifier
    let vModified = v;
    if (modifiers && modifiers['twist'] && modifiers['twist'].enabled) {
        vModified = modifiers['twist'].apply(u, v, params);
    }
    
    // Get cross-section offset
    const crossSectionType = params.crossSectionType || 'circle';
    const crossSection = getCrossSectionGenerator(crossSectionType);
    let { x: offsetX, y: offsetY } = crossSection.computeOffset(vModified, radius, params);
    
    // Apply eccentricity modifier (if enabled)
    if (modifiers && modifiers['eccentricity'] && modifiers['eccentricity'].enabled) {
        const scale = modifiers['eccentricity'].apply(vModified, 1, params);
        offsetX *= scale;
        offsetY *= scale;
    }
    
    // Transform cross-section offset to world space using Frenet frame
    // offsetX is along normal, offsetY is along binormal
    const offset = new THREE.Vector3(
        offsetX * normal.x + offsetY * binormal.x,
        offsetX * normal.y + offsetY * binormal.y,
        offsetX * normal.z + offsetY * binormal.z
    );
    
    // Final position = path position + offset
    let finalPos = pathPos.clone().add(offset);
    
    // Apply position modifiers (wave, etc.)
    if (modifiers && modifiers['wave'] && modifiers['wave'].enabled) {
        finalPos = modifiers['wave'].apply(u, v, finalPos, params);
    }
    
    return finalPos;
}

