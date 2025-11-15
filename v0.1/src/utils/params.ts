import type { SpiralParams } from './types';

export const defaultParams: SpiralParams = {
  // Geometry
  N: 2.75,
  R: 1.65,
  r0: 0.55,
  mode: 'Exponential',
  k: 0.18,
  alpha: 0.1,
  rMin: 0.015,
  h: 0.0,
  epsilon: 0.08,
  twist: 0.0,
  wallThickness: 0.10,

  // Mesh density - much higher for Denes look
  uDiv: 320,
  vDiv: 96,

  // Rendering
  projection: 'Orthographic',
  renderStyle: 'Wireframe',
  showMeridians: true,
  showParallels: true,
  showInnerSurface: true,
  occludeInner: true,
  lineWidth: 1,
  outerColor: '#333333',
  innerColor: '#555555',
  backgroundColor: '#e8e8e8',
  showGrid: false,

  // Cross-section
  showCrossSection: false,
  crossSectionColor: '#ff3333',
  crossSectionSpokes: 24,
  crossSectionCircles: 3,

  // Laser cutting export options
  laserCutProjection: 'Top',
  laserCutLayers: {
    outer: true,
    inner: true,
    crossSection: false,
  },
  pathSimplification: 0.5,
  optimizeCutOrder: true,

  // Camera/View options
  autoRotate: false,
  cameraDistance: 7.07, // sqrt(5^2 + 4^2 + 5^2)
  fov: 50,
  orthoSize: 3,

  // Lighting options
  ambientIntensity: 0.6,
  directionalIntensity: 0.8,

  // Visualization
  showAxes: false,
  showStats: false,
};

