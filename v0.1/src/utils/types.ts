export type DecayMode = 'Exponential' | 'Linear';
export type ProjectionMode = 'Orthographic' | 'Perspective';
export type RenderStyle = 'Wireframe' | 'Hidden-line' | 'Solid';
export type ProjectionType = 'Top' | 'Side' | 'Unrolled';

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

  // Cross-section
  showCrossSection: boolean;
  crossSectionColor: string;
  crossSectionSpokes: number;
  crossSectionCircles: number;

  // Laser cutting export options
  laserCutProjection?: ProjectionType;
  laserCutLayers?: {
    outer: boolean;
    inner: boolean;
    crossSection: boolean;
  };
  pathSimplification?: number;
  optimizeCutOrder?: boolean;

  // Camera/View options
  autoRotate?: boolean;
  cameraDistance?: number;
  fov?: number;
  orthoSize?: number;

  // Lighting options
  ambientIntensity?: number;
  directionalIntensity?: number;

  // Visualization
  showAxes?: boolean;
  showStats?: boolean;

  // Texture
  textureImage?: string; // Base64 or URL
  textureRepeat?: { u: number; v: number };
  textureOffset?: { u: number; v: number };
}

export interface Preset {
  [key: string]: any;
}

