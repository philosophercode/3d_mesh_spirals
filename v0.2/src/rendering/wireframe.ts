import * as THREE from 'three';
import type { SpiralParams } from '../utils/types';
import { computeRadiusAtU } from '../geometry/spiral';

export interface WireframeLines {
  outerLines: THREE.Line[];
  innerLines: THREE.Line[];
  depthLines: THREE.Line[];
}

export function buildWireframeLines(params: SpiralParams): WireframeLines {
  const uMax = 2 * Math.PI * params.N;

  // Helper to compute position with optional inner surface offset
  function getPosition(u: number, v: number, isInner: boolean = false): THREE.Vector3 {
    const rTube = computeRadiusAtU(u, params);
    const vTwisted = v + params.twist * (u / (2 * Math.PI));

    // Apply wall thickness for inner surface
    const effectiveRTube = isInner ? rTube - params.wallThickness : rTube;
    const rt = effectiveRTube * (1 + params.epsilon * Math.cos(vTwisted));

    const x = (params.R + rt * Math.cos(vTwisted)) * Math.cos(u);
    const y = (params.R + rt * Math.cos(vTwisted)) * Math.sin(u);
    const z = rt * Math.sin(vTwisted) + params.h * (u / (2 * Math.PI));
    return new THREE.Vector3(x, y, z);
  }

  // Build lines for a surface (outer or inner)
  function buildSurfaceLines(isInner: boolean, color: THREE.Color): THREE.Line[] {
    const surfaceLines: THREE.Line[] = [];

    // Meridians (constant v, varying u)
    if (params.showMeridians) {
      const vStep = Math.max(1, Math.floor(params.vDiv / 48));
      for (let j = 0; j < params.vDiv; j += vStep) {
        const points: THREE.Vector3[] = [];
        const v = 2 * Math.PI * j / params.vDiv;
        for (let i = 0; i <= params.uDiv; i++) {
          const u = uMax * i / params.uDiv;
          points.push(getPosition(u, v, isInner));
        }
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({
          color: color,
          transparent: isInner,
          opacity: isInner ? 0.7 : 1.0,
          depthTest: true,
          depthWrite: false,
        });
        const line = new THREE.Line(geometry, material);
        line.frustumCulled = false;
        surfaceLines.push(line);
      }
    }

    // Parallels (constant u, varying v)
    if (params.showParallels) {
      const uStep = Math.max(1, Math.floor(params.uDiv / 80));
      for (let i = 0; i <= params.uDiv; i += uStep) {
        const points: THREE.Vector3[] = [];
        const u = uMax * i / params.uDiv;
        for (let j = 0; j <= params.vDiv; j++) {
          const v = 2 * Math.PI * j / params.vDiv;
          points.push(getPosition(u, v, isInner));
        }
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({
          color: color,
          transparent: isInner,
          opacity: isInner ? 0.7 : 1.0,
          depthTest: true,
          depthWrite: false,
        });
        const line = new THREE.Line(geometry, material);
        line.frustumCulled = false;
        surfaceLines.push(line);
      }
    }

    return surfaceLines;
  }

  // Build outer surface
  const outerColor = new THREE.Color(params.outerColor);
  const outerLines = buildSurfaceLines(false, outerColor);

  // Build inner surface if enabled
  const innerLines = params.showInnerSurface ? buildSurfaceLines(true, new THREE.Color(params.innerColor)) : [];

  // Build wall depth lines at caps (start and end)
  const depthLines: THREE.Line[] = [];
  if (params.showInnerSurface) {
    // Start cap (u=0) - outer edge
    const startOuterPoints: THREE.Vector3[] = [];
    for (let j = 0; j <= params.vDiv; j++) {
      const v = 2 * Math.PI * j / params.vDiv;
      startOuterPoints.push(getPosition(0, v, false));
    }
    const startOuterGeom = new THREE.BufferGeometry().setFromPoints(startOuterPoints);
    const startOuterLine = new THREE.Line(startOuterGeom, new THREE.LineBasicMaterial({
      color: outerColor,
      depthTest: true,
      depthWrite: false
    }));
    startOuterLine.frustumCulled = false;
    depthLines.push(startOuterLine);

    // Start cap (u=0) - inner edge
    const startInnerPoints: THREE.Vector3[] = [];
    for (let j = 0; j <= params.vDiv; j++) {
      const v = 2 * Math.PI * j / params.vDiv;
      startInnerPoints.push(getPosition(0, v, true));
    }
    const startInnerGeom = new THREE.BufferGeometry().setFromPoints(startInnerPoints);
    const startInnerLine = new THREE.Line(startInnerGeom, new THREE.LineBasicMaterial({
      color: new THREE.Color(params.innerColor),
      transparent: true,
      opacity: 0.7,
      depthTest: true,
      depthWrite: false
    }));
    startInnerLine.frustumCulled = false;
    depthLines.push(startInnerLine);

    // End cap (u=uMax) - outer edge
    const endOuterPoints: THREE.Vector3[] = [];
    for (let j = 0; j <= params.vDiv; j++) {
      const v = 2 * Math.PI * j / params.vDiv;
      endOuterPoints.push(getPosition(uMax, v, false));
    }
    const endOuterGeom = new THREE.BufferGeometry().setFromPoints(endOuterPoints);
    const endOuterLine = new THREE.Line(endOuterGeom, new THREE.LineBasicMaterial({
      color: outerColor,
      depthTest: true,
      depthWrite: false
    }));
    endOuterLine.frustumCulled = false;
    depthLines.push(endOuterLine);

    // End cap (u=uMax) - inner edge
    const endInnerPoints: THREE.Vector3[] = [];
    for (let j = 0; j <= params.vDiv; j++) {
      const v = 2 * Math.PI * j / params.vDiv;
      endInnerPoints.push(getPosition(uMax, v, true));
    }
    const endInnerGeom = new THREE.BufferGeometry().setFromPoints(endInnerPoints);
    const endInnerLine = new THREE.Line(endInnerGeom, new THREE.LineBasicMaterial({
      color: new THREE.Color(params.innerColor),
      transparent: true,
      opacity: 0.7,
      depthTest: true,
      depthWrite: false
    }));
    endInnerLine.frustumCulled = false;
    depthLines.push(endInnerLine);
  }

  return { outerLines, innerLines, depthLines };
}

