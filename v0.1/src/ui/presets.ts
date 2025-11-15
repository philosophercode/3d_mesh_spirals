import * as THREE from 'three';
import type { SpiralParams } from '../utils/types';

export interface PresetCollection {
  [key: string]: Partial<SpiralParams>;
}

export const presets: PresetCollection = {
  denesOriginal: {
    // Exact match for the Denes drawing - high density mesh
    N: 2.75, R: 1.65, r0: 0.55, mode: 'Exponential', k: 0.18, rMin: 0.015,
    h: 0.0, epsilon: 0.08, twist: 0.0, wallThickness: 0.10,
    uDiv: 320, vDiv: 96,
    projection: 'Orthographic', renderStyle: 'Wireframe',
    showMeridians: true, showParallels: true, showInnerSurface: true, occludeInner: true,
    lineWidth: 1,
    outerColor: '#333333', innerColor: '#555555',
    backgroundColor: '#e8e8e8', showGrid: false,
    showCrossSection: false, crossSectionColor: '#ff3333', crossSectionSpokes: 24, crossSectionCircles: 3
  },
  denes: {
    N: 2.75, R: 1.65, r0: 0.55, mode: 'Exponential', k: 0.18, rMin: 0.015,
    h: 0.0, epsilon: 0.08, twist: 0.0, wallThickness: 0.08,
    uDiv: 240, vDiv: 72,
    projection: 'Orthographic', renderStyle: 'Wireframe',
    showMeridians: true, showParallels: true, showInnerSurface: true, occludeInner: false,
    lineWidth: 1,
    outerColor: '#3388ff', innerColor: '#ff8833',
    backgroundColor: '#1a1a1a', showGrid: true,
    showCrossSection: false, crossSectionColor: '#ff3333', crossSectionSpokes: 24, crossSectionCircles: 3
  },
  snail: {
    N: 4.0, R: 1.2, r0: 0.8, mode: 'Exponential', k: 0.25, rMin: 0.01,
    h: 0.5, epsilon: 0.15, twist: 0.3, wallThickness: 0.10,
    uDiv: 280, vDiv: 64,
    projection: 'Perspective', renderStyle: 'Hidden-line',
    showMeridians: true, showParallels: true, showInnerSurface: true, occludeInner: true,
    lineWidth: 1,
    outerColor: '#4444ff', innerColor: '#8888ff',
    backgroundColor: '#0a0a0a', showGrid: false,
    showCrossSection: false, crossSectionColor: '#ff3333', crossSectionSpokes: 24, crossSectionCircles: 3
  },
  wide: {
    N: 1.5, R: 2.5, r0: 0.4, mode: 'Linear', alpha: 0.05, rMin: 0.05,
    h: 0.0, epsilon: 0.0, twist: 0.0, wallThickness: 0.05,
    uDiv: 200, vDiv: 80,
    projection: 'Orthographic', renderStyle: 'Solid',
    showMeridians: true, showParallels: false, showInnerSurface: false, occludeInner: false,
    lineWidth: 1,
    outerColor: '#6699cc', innerColor: '#99ccff',
    backgroundColor: '#1a1a1a', showGrid: true,
    showCrossSection: false, crossSectionColor: '#ff3333', crossSectionSpokes: 24, crossSectionCircles: 3
  },
  flat: {
    N: 5.0, R: 2.0, r0: 0.3, mode: 'Exponential', k: 0.12, rMin: 0.02,
    h: -0.2, epsilon: 0.0, twist: 0.0, wallThickness: 0.04,
    uDiv: 320, vDiv: 64,
    projection: 'Orthographic', renderStyle: 'Wireframe',
    showMeridians: true, showParallels: true, showInnerSurface: true, occludeInner: true,
    lineWidth: 1,
    outerColor: '#ff6644', innerColor: '#ffaa88',
    backgroundColor: '#1a1a1a', showGrid: true,
    showCrossSection: false, crossSectionColor: '#ff3333', crossSectionSpokes: 24, crossSectionCircles: 3
  }
};

export function applyPreset(
  presetName: string,
  currentParams: SpiralParams,
  scene: THREE.Scene,
  gridHelper: THREE.GridHelper,
  updateMesh: (params: SpiralParams) => void,
  updateCamera: (projection: 'Orthographic' | 'Perspective') => void
): void {
  const preset = presets[presetName];
  if (preset) {
    Object.assign(currentParams, preset);
    updateMesh(currentParams);

    // Update camera if projection changed
    if (preset.projection) {
      updateCamera(preset.projection);
    }

    // Update background and grid
    if (preset.backgroundColor) {
      scene.background = new THREE.Color(preset.backgroundColor);
    }
    if (preset.showGrid !== undefined) {
      gridHelper.visible = preset.showGrid;
    }
  }
}

