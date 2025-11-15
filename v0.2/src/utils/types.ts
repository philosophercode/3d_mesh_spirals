export type DecayMode = 'Exponential' | 'Linear';
export type ProjectionMode = 'Orthographic' | 'Perspective';
export type RenderStyle = 'Wireframe' | 'Hidden-line' | 'Solid';

export interface SpiralParams {
  // Geometry
  N: number;
  R: number;
  r0: number;
  mode: DecayMode;
  k: number;
  alpha: number;
  rMin: number;
  h: number;
  epsilon: number;
  twist: number;
  wallThickness: number;

  // Mesh density
  uDiv: number;
  vDiv: number;

  // Rendering
  projection: ProjectionMode;
  renderStyle: RenderStyle;
  showMeridians: boolean;
  showParallels: boolean;
  showInnerSurface: boolean;
  occludeInner: boolean;
  lineWidth: number;
  outerColor: string;
  innerColor: string;
  backgroundColor: string;
  showGrid: boolean;
}

