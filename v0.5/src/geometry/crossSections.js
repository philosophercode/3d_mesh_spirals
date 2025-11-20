// Cross-section generators - define the shape of the tube cross-section

const crossSectionGenerators = {
    'circle': {
        name: 'Circle',
        computeOffset: (v, radius, params) => {
            // Standard circular cross-section
            const x = radius * Math.cos(v);
            const y = radius * Math.sin(v);
            return { x, y };
        },
        params: {}
    },
    
    'ellipse': {
        name: 'Ellipse',
        computeOffset: (v, radius, params) => {
            const aRatio = params.aRatio || 1.0;
            const bRatio = params.bRatio || 1.0;
            const x = radius * aRatio * Math.cos(v);
            const y = radius * bRatio * Math.sin(v);
            return { x, y };
        },
        params: {
            aRatio: { type: 'range', min: 0.1, max: 2.0, step: 0.01, label: 'A Ratio' },
            bRatio: { type: 'range', min: 0.1, max: 2.0, step: 0.01, label: 'B Ratio' }
        }
    },
    
    'square': {
        name: 'Square (Rounded)',
        computeOffset: (v, radius, params) => {
            // Square cross-section with rounded corners
            const cornerRadius = params.cornerRadius || 0.1;
            const angle = v;
            const absCos = Math.abs(Math.cos(angle));
            const absSin = Math.abs(Math.sin(angle));
            const maxAbs = Math.max(absCos, absSin);
            const r = radius * maxAbs;
            const x = r * Math.cos(angle);
            const y = r * Math.sin(angle);
            return { x, y };
        },
        params: {
            cornerRadius: { type: 'range', min: 0, max: 0.3, step: 0.01, label: 'Corner Radius' }
        }
    },
    
    'star': {
        name: 'Star',
        computeOffset: (v, radius, params) => {
            const n = params.points || 5;
            const depth = params.depth || 0.3;
            const r = radius * (1 + depth * Math.cos(n * v));
            const x = r * Math.cos(v);
            const y = r * Math.sin(v);
            return { x, y };
        },
        params: {
            points: { type: 'range', min: 3, max: 12, step: 1, label: 'Star Points' },
            depth: { type: 'range', min: 0, max: 0.5, step: 0.01, label: 'Star Depth' }
        }
    },
    
    'rounded-square': {
        name: 'Rounded Square',
        computeOffset: (v, radius, params) => {
            const roundness = params.roundness || 0.5;
            const angle = v;
            // Blend between circle and square
            const circleX = radius * Math.cos(angle);
            const circleY = radius * Math.sin(angle);
            const absCos = Math.abs(Math.cos(angle));
            const absSin = Math.abs(Math.sin(angle));
            const maxAbs = Math.max(absCos, absSin);
            const squareX = radius * maxAbs * Math.cos(angle);
            const squareY = radius * maxAbs * Math.sin(angle);
            const x = circleX * roundness + squareX * (1 - roundness);
            const y = circleY * roundness + squareY * (1 - roundness);
            return { x, y };
        },
        params: {
            roundness: { type: 'range', min: 0, max: 1, step: 0.01, label: 'Roundness' }
        }
    },
    
    'polygon': {
        name: 'Polygon',
        computeOffset: (v, radius, params) => {
            const sides = params.polygonSides || 6;
            const angle = v;
            // Map angle to polygon shape
            // For a regular polygon, we need to "snap" to the polygon edges
            const sectorAngle = 2 * Math.PI / sides;
            const sectorIndex = Math.floor((angle + Math.PI / sides) / sectorAngle);
            const sectorStart = sectorIndex * sectorAngle - Math.PI / sides;
            const localAngle = angle - sectorStart;
            
            // Distance from center to edge at this angle
            const r = radius / Math.cos(localAngle);
            const x = r * Math.cos(angle);
            const y = r * Math.sin(angle);
            return { x, y };
        },
        params: {
            polygonSides: { type: 'range', min: 3, max: 20, step: 1, label: 'Number of Sides' }
        }
    },
    
    'hexagon': {
        name: 'Hexagon',
        computeOffset: (v, radius, params) => {
            const sides = 6;
            const angle = v;
            const sectorAngle = 2 * Math.PI / sides;
            const sectorIndex = Math.floor((angle + Math.PI / sides) / sectorAngle);
            const sectorStart = sectorIndex * sectorAngle - Math.PI / sides;
            const localAngle = angle - sectorStart;
            const r = radius / Math.cos(localAngle);
            const x = r * Math.cos(angle);
            const y = r * Math.sin(angle);
            return { x, y };
        },
        params: {}
    },
    
    'pentagon': {
        name: 'Pentagon',
        computeOffset: (v, radius, params) => {
            const sides = 5;
            const angle = v;
            const sectorAngle = 2 * Math.PI / sides;
            const sectorIndex = Math.floor((angle + Math.PI / sides) / sectorAngle);
            const sectorStart = sectorIndex * sectorAngle - Math.PI / sides;
            const localAngle = angle - sectorStart;
            const r = radius / Math.cos(localAngle);
            const x = r * Math.cos(angle);
            const y = r * Math.sin(angle);
            return { x, y };
        },
        params: {}
    },
    
    'octagon': {
        name: 'Octagon',
        computeOffset: (v, radius, params) => {
            const sides = 8;
            const angle = v;
            const sectorAngle = 2 * Math.PI / sides;
            const sectorIndex = Math.floor((angle + Math.PI / sides) / sectorAngle);
            const sectorStart = sectorIndex * sectorAngle - Math.PI / sides;
            const localAngle = angle - sectorStart;
            const r = radius / Math.cos(localAngle);
            const x = r * Math.cos(angle);
            const y = r * Math.sin(angle);
            return { x, y };
        },
        params: {}
    },
    
    'rounded-polygon': {
        name: 'Rounded Polygon',
        computeOffset: (v, radius, params) => {
            const sides = params.roundedPolygonSides || 6;
            const roundness = params.polygonRoundness || 0.5;
            const angle = v;
            
            // Compute polygon shape
            const sectorAngle = 2 * Math.PI / sides;
            const sectorIndex = Math.floor((angle + Math.PI / sides) / sectorAngle);
            const sectorStart = sectorIndex * sectorAngle - Math.PI / sides;
            const localAngle = angle - sectorStart;
            const rPoly = radius / Math.cos(localAngle);
            const polyX = rPoly * Math.cos(angle);
            const polyY = rPoly * Math.sin(angle);
            
            // Compute circle shape
            const circleX = radius * Math.cos(angle);
            const circleY = radius * Math.sin(angle);
            
            // Blend
            const x = circleX * roundness + polyX * (1 - roundness);
            const y = circleY * roundness + polyY * (1 - roundness);
            return { x, y };
        },
        params: {
            roundedPolygonSides: { type: 'range', min: 3, max: 20, step: 1, label: 'Number of Sides' },
            polygonRoundness: { type: 'range', min: 0, max: 1, step: 0.01, label: 'Roundness' }
        }
    }
};

function getCrossSectionGenerator(crossSectionType) {
    return crossSectionGenerators[crossSectionType] || crossSectionGenerators['circle'];
}

