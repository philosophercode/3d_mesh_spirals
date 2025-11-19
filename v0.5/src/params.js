const defaultParams = {
    // Geometry
    N: 2.75,                    // Number of turns
    R: 1.65,                    // Major radius (spiral radius)
    r0: 0.55,                   // Initial tube radius
    mode: 'Exponential',        // 'Exponential' or 'Linear'
    k: 0.18,                    // Decay constant (for exponential)
    alpha: 0.1,                 // Linear decay rate
    rMin: 0.015,                // Minimum tube radius
    h: 0.0,                     // Vertical pitch
    epsilon: 0.08,              // Eccentricity
    twist: 0.0,                 // Twist parameter
    wallThickness: 0.10,        // Wall thickness for inner/outer separation
    
    // Mesh density
    uDiv: 320,                  // Divisions along spiral (u direction)
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

