const defaultParams = {
    // Base geometry type
    pathType: 'spiral',         // Path generator type
    crossSectionType: 'circle', // Cross-section generator type
    
    // Initialize default path and cross-section types if not set
    // (will be set by dynamic controls)
    
    // Base dimensions
    N: 2.75,                    // Number of turns (for spiral path)
    r0: 0.55,                   // Initial tube radius
    wallThickness: 0.10,        // Wall thickness for inner/outer separation
    
    // Path parameters (dynamically loaded based on pathType)
    R: 1.65,                    // Major radius (for spiral/helix)
    h: 0.0,                     // Vertical pitch (for spiral/helix)
    pitch: 1.0,                 // Pitch (for helix)
    majorR: 1.5,                // Major radius (for torus-path)
    scale: 1.5,                 // Scale (for figure-8)
    length: 5.0,                // Length (for line)
    
    // Cross-section parameters (dynamically loaded based on crossSectionType)
    aRatio: 1.0,                // A ratio (for ellipse)
    bRatio: 1.0,                // B ratio (for ellipse)
    points: 5,                  // Star points (for star)
    depth: 0.3,                 // Star depth (for star)
    cornerRadius: 0.1,          // Corner radius (for square)
    roundness: 0.5,             // Roundness (for rounded-square)
    polygonSides: 6,            // Number of sides (for polygon)
    roundedPolygonSides: 6,      // Number of sides (for rounded-polygon)
    polygonRoundness: 0.5,      // Roundness (for rounded-polygon)
    
    // Spheroid parameters (dynamically loaded based on pathType)
    spheroidA: 2.0,             // Equatorial radius A (for spheroid paths)
    spheroidB: 1.0,             // Polar radius B (for spheroid paths)
    spheroidC: 2.0,             // Equatorial radius C (for spheroid paths)
    meridianPhi: 0,             // Meridian angle (for spheroid-meridian)
    parallelPhi: Math.PI / 4,   // Latitude angle (for spheroid-parallel)
    spiralPhiStart: -Math.PI / 2, // Start latitude (for spheroid-spiral)
    spiralPhiEnd: Math.PI / 2,   // End latitude (for spheroid-spiral)
    
    // Sphere parameters (dynamically loaded based on pathType)
    sphereRadius: 2.0,          // Sphere radius (for sphere paths)
    sphereMeridianPhi: 0,       // Meridian angle (for sphere-meridian)
    sphereParallelPhi: Math.PI / 4, // Latitude angle (for sphere-parallel)
    sphereSpiralPhiStart: -Math.PI / 2, // Start latitude (for sphere-spiral)
    sphereSpiralPhiEnd: Math.PI / 2,   // End latitude (for sphere-spiral)
    
    // Deformed sphere parameters (dynamically loaded based on pathType)
    deformedSphereRadius: 2.0,  // Base radius (for deformed sphere paths)
    deformedMeridianPhi: 0,     // Meridian angle (for deformed sphere paths)
    bumpStrength: 0.3,          // Bump strength (for deformed-sphere-bump)
    bumpFrequency: 3.0,          // Bump frequency (for deformed-sphere-bump)
    bumpPhase: 0,               // Bump phase (for deformed-sphere-bump)
    wobbleStrength: 0.3,        // Wobble strength (for deformed-sphere-wobble)
    wobbleFrequency: 2.0,        // Wobble frequency (for deformed-sphere-wobble)
    pinchStrength: 0.5,         // Pinch strength (for deformed-sphere-pinch)
    pinchLocation: Math.PI / 2, // Pinch location (for deformed-sphere-pinch)
    pinchWidth: 0.5,            // Pinch width (for deformed-sphere-pinch)
    noiseStrength: 0.3,         // Noise strength (for deformed-sphere-noise)
    noiseScale: 3.0,            // Noise scale (for deformed-sphere-noise)
    
    // Modifiers
    decayMode: 'Exponential',   // 'None', 'Exponential', or 'Linear'
    k: 0.18,                    // Decay constant (for exponential)
    alpha: 0.1,                 // Linear decay rate
    rMin: 0.015,                // Minimum tube radius
    twistAmount: 0.0,           // Twist parameter
    epsilon: 0.08,              // Eccentricity
    taperAmount: 0.0,           // Taper amount
    waveAmplitude: 0.0,         // Wave amplitude
    waveFrequency: 1.0,         // Wave frequency
    wavePhase: 0.0,             // Wave phase
    
    // Legacy parameters (for backward compatibility)
    mode: 'Exponential',        // 'Exponential' or 'Linear'
    twist: 0.0,                 // Legacy twist (maps to twistAmount)
    
    // Mesh density
    uDiv: 320,                  // Divisions along path (u direction)
    vDiv: 96,                   // Divisions around tube (v direction)
    
    // Rendering
    projection: 'Orthographic', // 'Orthographic' or 'Perspective'
    renderStyle: 'Wireframe',   // 'Wireframe', 'Hidden-line', or 'Solid'
    showMeridians: true,        // Show meridian lines
    showParallels: true,        // Show parallel lines
    showInnerSurface: true,     // Show inner tube surface
    occludeInner: true,         // Use occlusion for inner surface
    lineWidth: 1,               // Line width for wireframe
    outerColor: '#333333',      // Outer surface color
    innerColor: '#555555',      // Inner surface color
    backgroundColor: '#ffffff', // Background color
    showGrid: false,            // Show grid helper
    showOutline: false,         // Show red outline on perimeter
    outlineMethod: 'Angular Binning' // 'Angular Binning', 'Face Normals', 'Post-Projection', 'NPR Back-Face'
};

