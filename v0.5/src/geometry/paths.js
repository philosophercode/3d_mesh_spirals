// Path generators - define the centerline/base curve that the tube follows

const pathGenerators = {
    'spiral': {
        name: 'Spiral',
        computePath: (u, params) => {
            // Circular spiral in XY plane with optional vertical pitch
            const x = params.R * Math.cos(u);
            const y = params.R * Math.sin(u);
            const z = params.h * (u / (2 * Math.PI));
            return new THREE.Vector3(x, y, z);
        },
        computeTangent: (u, params) => {
            // Tangent vector (direction along the path)
            const tx = -params.R * Math.sin(u);
            const ty = params.R * Math.cos(u);
            const tz = params.h / (2 * Math.PI);
            const tangent = new THREE.Vector3(tx, ty, tz);
            return tangent.normalize();
        },
        computeNormal: (u, params) => {
            // Normal vector (points toward center of spiral)
            const nx = -Math.cos(u);
            const ny = -Math.sin(u);
            const nz = 0;
            return new THREE.Vector3(nx, ny, nz).normalize();
        },
        params: {
            R: { type: 'range', min: 0.5, max: 3.5, step: 0.01, label: 'Radius' },
            h: { type: 'range', min: -2, max: 2, step: 0.01, label: 'Vertical Pitch' }
        }
    },
    
    'helix': {
        name: 'Helix',
        computePath: (u, params) => {
            const x = params.R * Math.cos(u);
            const y = params.R * Math.sin(u);
            const z = params.pitch * u / (2 * Math.PI);
            return new THREE.Vector3(x, y, z);
        },
        computeTangent: (u, params) => {
            const tx = -params.R * Math.sin(u);
            const ty = params.R * Math.cos(u);
            const tz = params.pitch / (2 * Math.PI);
            const tangent = new THREE.Vector3(tx, ty, tz);
            return tangent.normalize();
        },
        computeNormal: (u, params) => {
            const nx = -Math.cos(u);
            const ny = -Math.sin(u);
            const nz = 0;
            return new THREE.Vector3(nx, ny, nz).normalize();
        },
        params: {
            R: { type: 'range', min: 0.5, max: 3.5, step: 0.01, label: 'Radius' },
            pitch: { type: 'range', min: 0.1, max: 2, step: 0.01, label: 'Pitch' }
        }
    },
    
    'torus-path': {
        name: 'Torus Path',
        computePath: (u, params) => {
            // Path along a torus (major circle)
            const x = params.majorR * Math.cos(u);
            const y = params.majorR * Math.sin(u);
            const z = 0;
            return new THREE.Vector3(x, y, z);
        },
        computeTangent: (u, params) => {
            const tx = -params.majorR * Math.sin(u);
            const ty = params.majorR * Math.cos(u);
            const tz = 0;
            return new THREE.Vector3(tx, ty, tz).normalize();
        },
        computeNormal: (u, params) => {
            const nx = -Math.cos(u);
            const ny = -Math.sin(u);
            const nz = 0;
            return new THREE.Vector3(nx, ny, nz).normalize();
        },
        params: {
            majorR: { type: 'range', min: 0.5, max: 3.5, step: 0.01, label: 'Major Radius' }
        }
    },
    
    'figure-8': {
        name: 'Figure-8 (Lemniscate)',
        computePath: (u, params) => {
            const scale = params.scale;
            const denom = 1 + Math.sin(u) * Math.sin(u);
            const x = scale * Math.cos(u) / denom;
            const y = scale * Math.sin(u) * Math.cos(u) / denom;
            const z = params.h * (u / (2 * Math.PI));
            return new THREE.Vector3(x, y, z);
        },
        computeTangent: (u, params) => {
            // Approximate tangent for figure-8
            const eps = 0.001;
            const p1 = pathGenerators['figure-8'].computePath(u, params);
            const p2 = pathGenerators['figure-8'].computePath(u + eps, params);
            return p2.clone().sub(p1).normalize();
        },
        computeNormal: (u, params) => {
            // Approximate normal
            const tangent = pathGenerators['figure-8'].computeTangent(u, params);
            const up = new THREE.Vector3(0, 0, 1);
            const normal = new THREE.Vector3().crossVectors(tangent, up).normalize();
            return normal;
        },
        params: {
            scale: { type: 'range', min: 0.5, max: 3.0, step: 0.01, label: 'Scale' },
            h: { type: 'range', min: -1, max: 1, step: 0.01, label: 'Vertical Pitch' }
        }
    },
    
    'line': {
        name: 'Straight Line',
        computePath: (u, params) => {
            const length = params.length || 5;
            const x = length * (u / (2 * Math.PI));
            const y = 0;
            const z = params.h * (u / (2 * Math.PI));
            return new THREE.Vector3(x, y, z);
        },
        computeTangent: (u, params) => {
            return new THREE.Vector3(1, 0, params.h / (2 * Math.PI)).normalize();
        },
        computeNormal: (u, params) => {
            return new THREE.Vector3(0, 1, 0);
        },
        params: {
            length: { type: 'range', min: 1, max: 10, step: 0.1, label: 'Length' },
            h: { type: 'range', min: -2, max: 2, step: 0.01, label: 'Vertical Pitch' }
        }
    },
    
    'spheroid-meridian': {
        name: 'Spheroid Meridian',
        computePath: (u, params) => {
            // Path along a meridian of a spheroid (ellipsoid)
            const a = params.spheroidA || 2.0;  // Equatorial radius
            const b = params.spheroidB || 1.0;   // Polar radius
            const c = params.spheroidC || 2.0;   // Other equatorial radius
            
            // u goes from 0 to 2π, following a meridian
            const theta = u;  // Longitude angle
            const phi = params.meridianPhi || 0;  // Which meridian (0 = prime meridian)
            
            const x = a * Math.cos(theta) * Math.cos(phi);
            const y = b * Math.sin(theta);
            const z = c * Math.cos(theta) * Math.sin(phi);
            return new THREE.Vector3(x, y, z);
        },
        computeTangent: (u, params) => {
            const a = params.spheroidA || 2.0;
            const b = params.spheroidB || 1.0;
            const c = params.spheroidC || 2.0;
            const phi = params.meridianPhi || 0;
            const tx = -a * Math.sin(u) * Math.cos(phi);
            const ty = b * Math.cos(u);
            const tz = -c * Math.sin(u) * Math.sin(phi);
            return new THREE.Vector3(tx, ty, tz).normalize();
        },
        computeNormal: (u, params) => {
            const a = params.spheroidA || 2.0;
            const b = params.spheroidB || 1.0;
            const c = params.spheroidC || 2.0;
            const phi = params.meridianPhi || 0;
            const nx = a * Math.cos(u) * Math.cos(phi);
            const ny = b * Math.sin(u);
            const nz = c * Math.cos(u) * Math.sin(phi);
            return new THREE.Vector3(nx, ny, nz).normalize();
        },
        params: {
            spheroidA: { type: 'range', min: 0.5, max: 4, step: 0.1, label: 'Equatorial Radius A' },
            spheroidB: { type: 'range', min: 0.5, max: 4, step: 0.1, label: 'Polar Radius B' },
            spheroidC: { type: 'range', min: 0.5, max: 4, step: 0.1, label: 'Equatorial Radius C' },
            meridianPhi: { type: 'range', min: 0, max: 2 * Math.PI, step: 0.1, label: 'Meridian Angle' }
        }
    },
    
    'spheroid-parallel': {
        name: 'Spheroid Parallel',
        computePath: (u, params) => {
            // Path along a parallel (latitude circle) of a spheroid
            const a = params.spheroidA || 2.0;
            const b = params.spheroidB || 1.0;
            const c = params.spheroidC || 2.0;
            const phi = params.parallelPhi || Math.PI / 4;  // Latitude angle
            
            // u goes from 0 to 2π, following a parallel circle
            const radiusAtLat = Math.sqrt(a * a * Math.cos(phi) * Math.cos(phi) + 
                                          c * c * Math.sin(phi) * Math.sin(phi));
            const x = radiusAtLat * Math.cos(u);
            const y = b * Math.sin(phi);
            const z = radiusAtLat * Math.sin(u);
            return new THREE.Vector3(x, y, z);
        },
        computeTangent: (u, params) => {
            const a = params.spheroidA || 2.0;
            const c = params.spheroidC || 2.0;
            const phi = params.parallelPhi || Math.PI / 4;
            const radiusAtLat = Math.sqrt(a * a * Math.cos(phi) * Math.cos(phi) + 
                                          c * c * Math.sin(phi) * Math.sin(phi));
            const tx = -radiusAtLat * Math.sin(u);
            const ty = 0;
            const tz = radiusAtLat * Math.cos(u);
            return new THREE.Vector3(tx, ty, tz).normalize();
        },
        computeNormal: (u, params) => {
            const a = params.spheroidA || 2.0;
            const c = params.spheroidC || 2.0;
            const phi = params.parallelPhi || Math.PI / 4;
            const radiusAtLat = Math.sqrt(a * a * Math.cos(phi) * Math.cos(phi) + 
                                          c * c * Math.sin(phi) * Math.sin(phi));
            const nx = Math.cos(u);
            const ny = 0;
            const nz = Math.sin(u);
            return new THREE.Vector3(nx, ny, nz).normalize();
        },
        params: {
            spheroidA: { type: 'range', min: 0.5, max: 4, step: 0.1, label: 'Equatorial Radius A' },
            spheroidB: { type: 'range', min: 0.5, max: 4, step: 0.1, label: 'Polar Radius B' },
            spheroidC: { type: 'range', min: 0.5, max: 4, step: 0.1, label: 'Equatorial Radius C' },
            parallelPhi: { type: 'range', min: -Math.PI / 2, max: Math.PI / 2, step: 0.1, label: 'Latitude Angle' }
        }
    },
    
    'spheroid-spiral': {
        name: 'Spheroid Spiral',
        computePath: (u, params) => {
            // Spiral path on a spheroid surface
            const a = params.spheroidA || 2.0;
            const b = params.spheroidB || 1.0;
            const c = params.spheroidC || 2.0;
            const turns = params.N || 2.75;
            const uMax = 2 * Math.PI * turns;
            const t = u / uMax;  // Normalized parameter 0 to 1
            
            // Spherical coordinates on spheroid
            const theta = 2 * Math.PI * t * turns;  // Longitude
            const phi = params.spiralPhiStart + (params.spiralPhiEnd - params.spiralPhiStart) * t;  // Latitude
            
            const x = a * Math.cos(phi) * Math.cos(theta);
            const y = b * Math.sin(phi);
            const z = c * Math.cos(phi) * Math.sin(theta);
            return new THREE.Vector3(x, y, z);
        },
        computeTangent: (u, params) => {
            // Approximate tangent using finite difference
            const eps = 0.001;
            const p1 = pathGenerators['spheroid-spiral'].computePath(u, params);
            const p2 = pathGenerators['spheroid-spiral'].computePath(u + eps, params);
            return p2.clone().sub(p1).normalize();
        },
        computeNormal: (u, params) => {
            const a = params.spheroidA || 2.0;
            const b = params.spheroidB || 1.0;
            const c = params.spheroidC || 2.0;
            const turns = params.N || 2.75;
            const uMax = 2 * Math.PI * turns;
            const t = u / uMax;
            const theta = 2 * Math.PI * t * turns;
            const phi = params.spiralPhiStart + (params.spiralPhiEnd - params.spiralPhiStart) * t;
            const nx = a * Math.cos(phi) * Math.cos(theta);
            const ny = b * Math.sin(phi);
            const nz = c * Math.cos(phi) * Math.sin(theta);
            return new THREE.Vector3(nx, ny, nz).normalize();
        },
        params: {
            spheroidA: { type: 'range', min: 0.5, max: 4, step: 0.1, label: 'Equatorial Radius A' },
            spheroidB: { type: 'range', min: 0.5, max: 4, step: 0.1, label: 'Polar Radius B' },
            spheroidC: { type: 'range', min: 0.5, max: 4, step: 0.1, label: 'Equatorial Radius C' },
            spiralPhiStart: { type: 'range', min: -Math.PI / 2, max: Math.PI / 2, step: 0.1, label: 'Start Latitude' },
            spiralPhiEnd: { type: 'range', min: -Math.PI / 2, max: Math.PI / 2, step: 0.1, label: 'End Latitude' }
        }
    },
    
    'sphere-meridian': {
        name: 'Sphere Meridian',
        computePath: (u, params) => {
            // Path along a meridian of a perfect sphere
            const radius = params.sphereRadius || 2.0;
            const phi = params.sphereMeridianPhi || 0;  // Which meridian
            
            const x = radius * Math.cos(u) * Math.cos(phi);
            const y = radius * Math.sin(u);
            const z = radius * Math.cos(u) * Math.sin(phi);
            return new THREE.Vector3(x, y, z);
        },
        computeTangent: (u, params) => {
            const radius = params.sphereRadius || 2.0;
            const phi = params.sphereMeridianPhi || 0;
            const tx = -radius * Math.sin(u) * Math.cos(phi);
            const ty = radius * Math.cos(u);
            const tz = -radius * Math.sin(u) * Math.sin(phi);
            return new THREE.Vector3(tx, ty, tz).normalize();
        },
        computeNormal: (u, params) => {
            const radius = params.sphereRadius || 2.0;
            const phi = params.sphereMeridianPhi || 0;
            const nx = Math.cos(u) * Math.cos(phi);
            const ny = Math.sin(u);
            const nz = Math.cos(u) * Math.sin(phi);
            return new THREE.Vector3(nx, ny, nz).normalize();
        },
        params: {
            sphereRadius: { type: 'range', min: 0.5, max: 4, step: 0.1, label: 'Sphere Radius' },
            sphereMeridianPhi: { type: 'range', min: 0, max: 2 * Math.PI, step: 0.1, label: 'Meridian Angle' }
        }
    },
    
    'sphere-parallel': {
        name: 'Sphere Parallel',
        computePath: (u, params) => {
            // Path along a parallel (latitude circle) of a sphere
            const radius = params.sphereRadius || 2.0;
            const phi = params.sphereParallelPhi || Math.PI / 4;  // Latitude
            
            const radiusAtLat = radius * Math.cos(phi);
            const x = radiusAtLat * Math.cos(u);
            const y = radius * Math.sin(phi);
            const z = radiusAtLat * Math.sin(u);
            return new THREE.Vector3(x, y, z);
        },
        computeTangent: (u, params) => {
            const radius = params.sphereRadius || 2.0;
            const phi = params.sphereParallelPhi || Math.PI / 4;
            const radiusAtLat = radius * Math.cos(phi);
            const tx = -radiusAtLat * Math.sin(u);
            const ty = 0;
            const tz = radiusAtLat * Math.cos(u);
            return new THREE.Vector3(tx, ty, tz).normalize();
        },
        computeNormal: (u, params) => {
            const radius = params.sphereRadius || 2.0;
            const phi = params.sphereParallelPhi || Math.PI / 4;
            const radiusAtLat = radius * Math.cos(phi);
            const nx = Math.cos(u);
            const ny = 0;
            const nz = Math.sin(u);
            return new THREE.Vector3(nx, ny, nz).normalize();
        },
        params: {
            sphereRadius: { type: 'range', min: 0.5, max: 4, step: 0.1, label: 'Sphere Radius' },
            sphereParallelPhi: { type: 'range', min: -Math.PI / 2, max: Math.PI / 2, step: 0.1, label: 'Latitude Angle' }
        }
    },
    
    'sphere-spiral': {
        name: 'Sphere Spiral',
        computePath: (u, params) => {
            // Spiral path on a sphere surface
            const radius = params.sphereRadius || 2.0;
            const turns = params.N || 2.75;
            const uMax = 2 * Math.PI * turns;
            const t = u / uMax;
            
            const theta = 2 * Math.PI * t * turns;  // Longitude
            const phi = params.sphereSpiralPhiStart + (params.sphereSpiralPhiEnd - params.sphereSpiralPhiStart) * t;  // Latitude
            
            const x = radius * Math.cos(phi) * Math.cos(theta);
            const y = radius * Math.sin(phi);
            const z = radius * Math.cos(phi) * Math.sin(theta);
            return new THREE.Vector3(x, y, z);
        },
        computeTangent: (u, params) => {
            const eps = 0.001;
            const p1 = pathGenerators['sphere-spiral'].computePath(u, params);
            const p2 = pathGenerators['sphere-spiral'].computePath(u + eps, params);
            return p2.clone().sub(p1).normalize();
        },
        computeNormal: (u, params) => {
            const radius = params.sphereRadius || 2.0;
            const turns = params.N || 2.75;
            const uMax = 2 * Math.PI * turns;
            const t = u / uMax;
            const theta = 2 * Math.PI * t * turns;
            const phi = params.sphereSpiralPhiStart + (params.sphereSpiralPhiEnd - params.sphereSpiralPhiStart) * t;
            const nx = Math.cos(phi) * Math.cos(theta);
            const ny = Math.sin(phi);
            const nz = Math.cos(phi) * Math.sin(theta);
            return new THREE.Vector3(nx, ny, nz).normalize();
        },
        params: {
            sphereRadius: { type: 'range', min: 0.5, max: 4, step: 0.1, label: 'Sphere Radius' },
            sphereSpiralPhiStart: { type: 'range', min: -Math.PI / 2, max: Math.PI / 2, step: 0.1, label: 'Start Latitude' },
            sphereSpiralPhiEnd: { type: 'range', min: -Math.PI / 2, max: Math.PI / 2, step: 0.1, label: 'End Latitude' }
        }
    },
    
    'deformed-sphere-bump': {
        name: 'Deformed Sphere (Bump)',
        computePath: (u, params) => {
            // Sphere with a bump deformation
            const radius = params.deformedSphereRadius || 2.0;
            const bumpStrength = params.bumpStrength || 0.3;
            const bumpFrequency = params.bumpFrequency || 3.0;
            const bumpPhase = params.bumpPhase || 0;
            
            // Base sphere position
            const phi = params.deformedMeridianPhi || 0;
            const x0 = radius * Math.cos(u) * Math.cos(phi);
            const y0 = radius * Math.sin(u);
            const z0 = radius * Math.cos(u) * Math.sin(phi);
            
            // Add bump deformation
            const bump = bumpStrength * Math.sin(bumpFrequency * u + bumpPhase);
            const normal = new THREE.Vector3(x0, y0, z0).normalize();
            const x = x0 + normal.x * bump;
            const y = y0 + normal.y * bump;
            const z = z0 + normal.z * bump;
            
            return new THREE.Vector3(x, y, z);
        },
        computeTangent: (u, params) => {
            const eps = 0.001;
            const p1 = pathGenerators['deformed-sphere-bump'].computePath(u, params);
            const p2 = pathGenerators['deformed-sphere-bump'].computePath(u + eps, params);
            return p2.clone().sub(p1).normalize();
        },
        computeNormal: (u, params) => {
            const radius = params.deformedSphereRadius || 2.0;
            const phi = params.deformedMeridianPhi || 0;
            const nx = Math.cos(u) * Math.cos(phi);
            const ny = Math.sin(u);
            const nz = Math.cos(u) * Math.sin(phi);
            return new THREE.Vector3(nx, ny, nz).normalize();
        },
        params: {
            deformedSphereRadius: { type: 'range', min: 0.5, max: 4, step: 0.1, label: 'Base Radius' },
            deformedMeridianPhi: { type: 'range', min: 0, max: 2 * Math.PI, step: 0.1, label: 'Meridian Angle' },
            bumpStrength: { type: 'range', min: 0, max: 1, step: 0.01, label: 'Bump Strength' },
            bumpFrequency: { type: 'range', min: 1, max: 10, step: 0.1, label: 'Bump Frequency' },
            bumpPhase: { type: 'range', min: 0, max: 2 * Math.PI, step: 0.1, label: 'Bump Phase' }
        }
    },
    
    'deformed-sphere-wobble': {
        name: 'Deformed Sphere (Wobble)',
        computePath: (u, params) => {
            // Sphere with wobble deformation (multiple bumps)
            const radius = params.deformedSphereRadius || 2.0;
            const wobbleStrength = params.wobbleStrength || 0.3;
            const wobbleFrequency = params.wobbleFrequency || 2.0;
            
            const phi = params.deformedMeridianPhi || 0;
            const x0 = radius * Math.cos(u) * Math.cos(phi);
            const y0 = radius * Math.sin(u);
            const z0 = radius * Math.cos(u) * Math.sin(phi);
            
            // Wobble in multiple directions
            const wobbleX = wobbleStrength * Math.sin(wobbleFrequency * u);
            const wobbleY = wobbleStrength * Math.cos(wobbleFrequency * u * 1.3);
            const wobbleZ = wobbleStrength * Math.sin(wobbleFrequency * u * 0.7);
            
            const x = x0 + wobbleX;
            const y = y0 + wobbleY;
            const z = z0 + wobbleZ;
            
            return new THREE.Vector3(x, y, z);
        },
        computeTangent: (u, params) => {
            const eps = 0.001;
            const p1 = pathGenerators['deformed-sphere-wobble'].computePath(u, params);
            const p2 = pathGenerators['deformed-sphere-wobble'].computePath(u + eps, params);
            return p2.clone().sub(p1).normalize();
        },
        computeNormal: (u, params) => {
            const radius = params.deformedSphereRadius || 2.0;
            const phi = params.deformedMeridianPhi || 0;
            const nx = Math.cos(u) * Math.cos(phi);
            const ny = Math.sin(u);
            const nz = Math.cos(u) * Math.sin(phi);
            return new THREE.Vector3(nx, ny, nz).normalize();
        },
        params: {
            deformedSphereRadius: { type: 'range', min: 0.5, max: 4, step: 0.1, label: 'Base Radius' },
            deformedMeridianPhi: { type: 'range', min: 0, max: 2 * Math.PI, step: 0.1, label: 'Meridian Angle' },
            wobbleStrength: { type: 'range', min: 0, max: 1, step: 0.01, label: 'Wobble Strength' },
            wobbleFrequency: { type: 'range', min: 1, max: 10, step: 0.1, label: 'Wobble Frequency' }
        }
    },
    
    'deformed-sphere-pinch': {
        name: 'Deformed Sphere (Pinch)',
        computePath: (u, params) => {
            // Sphere with pinch deformation (narrowing at certain points)
            const radius = params.deformedSphereRadius || 2.0;
            const pinchStrength = params.pinchStrength || 0.5;
            const pinchLocation = params.pinchLocation || Math.PI / 2;
            const pinchWidth = params.pinchWidth || 0.5;
            
            const phi = params.deformedMeridianPhi || 0;
            const x0 = radius * Math.cos(u) * Math.cos(phi);
            const y0 = radius * Math.sin(u);
            const z0 = radius * Math.cos(u) * Math.sin(phi);
            
            // Pinch effect - reduce radius near pinch location
            const distFromPinch = Math.abs(u - pinchLocation);
            const pinchFactor = 1 - pinchStrength * Math.exp(-(distFromPinch * distFromPinch) / (2 * pinchWidth * pinchWidth));
            
            const x = x0 * pinchFactor;
            const y = y0 * pinchFactor;
            const z = z0 * pinchFactor;
            
            return new THREE.Vector3(x, y, z);
        },
        computeTangent: (u, params) => {
            const eps = 0.001;
            const p1 = pathGenerators['deformed-sphere-pinch'].computePath(u, params);
            const p2 = pathGenerators['deformed-sphere-pinch'].computePath(u + eps, params);
            return p2.clone().sub(p1).normalize();
        },
        computeNormal: (u, params) => {
            const radius = params.deformedSphereRadius || 2.0;
            const phi = params.deformedMeridianPhi || 0;
            const nx = Math.cos(u) * Math.cos(phi);
            const ny = Math.sin(u);
            const nz = Math.cos(u) * Math.sin(phi);
            return new THREE.Vector3(nx, ny, nz).normalize();
        },
        params: {
            deformedSphereRadius: { type: 'range', min: 0.5, max: 4, step: 0.1, label: 'Base Radius' },
            deformedMeridianPhi: { type: 'range', min: 0, max: 2 * Math.PI, step: 0.1, label: 'Meridian Angle' },
            pinchStrength: { type: 'range', min: 0, max: 0.8, step: 0.01, label: 'Pinch Strength' },
            pinchLocation: { type: 'range', min: 0, max: 2 * Math.PI, step: 0.1, label: 'Pinch Location' },
            pinchWidth: { type: 'range', min: 0.1, max: 2, step: 0.1, label: 'Pinch Width' }
        }
    },
    
    'deformed-sphere-noise': {
        name: 'Deformed Sphere (Noise)',
        computePath: (u, params) => {
            // Sphere with noise-based deformation
            const radius = params.deformedSphereRadius || 2.0;
            const noiseStrength = params.noiseStrength || 0.3;
            const noiseScale = params.noiseScale || 3.0;
            
            const phi = params.deformedMeridianPhi || 0;
            const x0 = radius * Math.cos(u) * Math.cos(phi);
            const y0 = radius * Math.sin(u);
            const z0 = radius * Math.cos(u) * Math.sin(phi);
            
            // Simple noise function (using multiple sine waves)
            const noise1 = Math.sin(noiseScale * u) * Math.cos(noiseScale * u * 1.7);
            const noise2 = Math.sin(noiseScale * u * 2.3) * Math.cos(noiseScale * u * 0.9);
            const noise = (noise1 + noise2) / 2;
            
            const normal = new THREE.Vector3(x0, y0, z0).normalize();
            const x = x0 + normal.x * noise * noiseStrength;
            const y = y0 + normal.y * noise * noiseStrength;
            const z = z0 + normal.z * noise * noiseStrength;
            
            return new THREE.Vector3(x, y, z);
        },
        computeTangent: (u, params) => {
            const eps = 0.001;
            const p1 = pathGenerators['deformed-sphere-noise'].computePath(u, params);
            const p2 = pathGenerators['deformed-sphere-noise'].computePath(u + eps, params);
            return p2.clone().sub(p1).normalize();
        },
        computeNormal: (u, params) => {
            const radius = params.deformedSphereRadius || 2.0;
            const phi = params.deformedMeridianPhi || 0;
            const nx = Math.cos(u) * Math.cos(phi);
            const ny = Math.sin(u);
            const nz = Math.cos(u) * Math.sin(phi);
            return new THREE.Vector3(nx, ny, nz).normalize();
        },
        params: {
            deformedSphereRadius: { type: 'range', min: 0.5, max: 4, step: 0.1, label: 'Base Radius' },
            deformedMeridianPhi: { type: 'range', min: 0, max: 2 * Math.PI, step: 0.1, label: 'Meridian Angle' },
            noiseStrength: { type: 'range', min: 0, max: 1, step: 0.01, label: 'Noise Strength' },
            noiseScale: { type: 'range', min: 1, max: 10, step: 0.1, label: 'Noise Scale' }
        }
    }
};

function getPathGenerator(pathType) {
    return pathGenerators[pathType] || pathGenerators['spiral'];
}

