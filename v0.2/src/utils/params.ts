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

  // Mesh density
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
  outerColor: '#000000',
  innerColor: '#333333',
  backgroundColor: '#ffffff',
  showGrid: false,
};

