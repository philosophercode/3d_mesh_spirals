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

    // Meridians (constant v, varying u) - show many more lines for Denes look
    if (params.showMeridians) {
      const vStep = Math.max(1, Math.floor(params.vDiv / 48)); // doubled density
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
          // Note: linewidth is not supported in WebGL - ignored by most browsers
          // linewidth: params.lineWidth,
          transparent: isInner,
          opacity: isInner ? 0.7 : 1.0,
          // Improve line rendering quality
          depthTest: true,
          depthWrite: false,
          vertexColors: false
        });
        const line = new THREE.Line(geometry, material);
        // Ensure smooth line rendering
        line.frustumCulled = false;
        surfaceLines.push(line);
      }
    }

    // Parallels (constant u, varying v) - show many more lines for Denes look
    if (params.showParallels) {
      const uStep = Math.max(1, Math.floor(params.uDiv / 80)); // much denser
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
          // Note: linewidth is not supported in WebGL - ignored by most browsers
          // linewidth: params.lineWidth,
          transparent: isInner,
          opacity: isInner ? 0.7 : 1.0,
          // Improve line rendering quality
          depthTest: true,
          depthWrite: false,
          vertexColors: false
        });
        const line = new THREE.Line(geometry, material);
        // Ensure smooth line rendering
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
    const startOuterMaterial = new THREE.LineBasicMaterial({
      color: outerColor,
      // linewidth not supported in WebGL
      depthTest: true,
      depthWrite: false
    });
    const startOuterLine = new THREE.Line(startOuterGeom, startOuterMaterial);
    startOuterLine.frustumCulled = false;
    depthLines.push(startOuterLine);

    // Start cap (u=0) - inner edge
    const startInnerPoints: THREE.Vector3[] = [];
    for (let j = 0; j <= params.vDiv; j++) {
      const v = 2 * Math.PI * j / params.vDiv;
      startInnerPoints.push(getPosition(0, v, true));
    }
    const startInnerGeom = new THREE.BufferGeometry().setFromPoints(startInnerPoints);
    const startInnerMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color(params.innerColor),
      // linewidth not supported in WebGL
      transparent: true,
      opacity: 0.7,
      depthTest: true,
      depthWrite: false
    });
    const startInnerLine = new THREE.Line(startInnerGeom, startInnerMaterial);
    startInnerLine.frustumCulled = false;
    depthLines.push(startInnerLine);

    // End cap (u=uMax) - outer edge
    const endOuterPoints: THREE.Vector3[] = [];
    for (let j = 0; j <= params.vDiv; j++) {
      const v = 2 * Math.PI * j / params.vDiv;
      endOuterPoints.push(getPosition(uMax, v, false));
    }
    const endOuterGeom = new THREE.BufferGeometry().setFromPoints(endOuterPoints);
    const endOuterMaterial = new THREE.LineBasicMaterial({
      color: outerColor,
      // linewidth not supported in WebGL
      depthTest: true,
      depthWrite: false
    });
    const endOuterLine = new THREE.Line(endOuterGeom, endOuterMaterial);
    endOuterLine.frustumCulled = false;
    depthLines.push(endOuterLine);

    // End cap (u=uMax) - inner edge
    const endInnerPoints: THREE.Vector3[] = [];
    for (let j = 0; j <= params.vDiv; j++) {
      const v = 2 * Math.PI * j / params.vDiv;
      endInnerPoints.push(getPosition(uMax, v, true));
    }
    const endInnerGeom = new THREE.BufferGeometry().setFromPoints(endInnerPoints);
    const endInnerMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color(params.innerColor),
      // linewidth not supported in WebGL
      transparent: true,
      opacity: 0.7,
      depthTest: true,
      depthWrite: false
    });
    const endInnerLine = new THREE.Line(endInnerGeom, endInnerMaterial);
    endInnerLine.frustumCulled = false;
    depthLines.push(endInnerLine);
  }

  return { outerLines, innerLines, depthLines };
}

export function buildCrossSectionWireframe(params: SpiralParams, u: number): THREE.Line[] {
  const rTube = computeRadiusAtU(u, params);

  const outerPoints: THREE.Vector3[] = [];
  const innerPoints: THREE.Vector3[] = [];

  for (let j = 0; j <= params.vDiv; j++) {
    const vBase = 2 * Math.PI * j / params.vDiv;
    const v = vBase + params.twist * (u / (2 * Math.PI));

    // Outer edge
    const rtOuter = rTube * (1 + params.epsilon * Math.cos(v));
    const xOuter = (params.R + rtOuter * Math.cos(v)) * Math.cos(u);
    const yOuter = (params.R + rtOuter * Math.cos(v)) * Math.sin(u);
    const zOuter = rtOuter * Math.sin(v) + params.h * (u / (2 * Math.PI));
    outerPoints.push(new THREE.Vector3(xOuter, yOuter, zOuter));

    // Inner edge
    const rTubeInner = rTube - params.wallThickness;
    const rtInner = rTubeInner * (1 + params.epsilon * Math.cos(v));
    const xInner = (params.R + rtInner * Math.cos(v)) * Math.cos(u);
    const yInner = (params.R + rtInner * Math.cos(v)) * Math.sin(u);
    const zInner = rtInner * Math.sin(v) + params.h * (u / (2 * Math.PI));
    innerPoints.push(new THREE.Vector3(xInner, yInner, zInner));
  }

  const lines: THREE.Line[] = [];

  // Outer edge line (thicker)
  const outerGeom = new THREE.BufferGeometry().setFromPoints(outerPoints);
  const outerMaterial = new THREE.LineBasicMaterial({
    color: new THREE.Color(params.crossSectionColor),
    // linewidth not supported in WebGL
    depthTest: true,
    depthWrite: false
  });
  const outerLine = new THREE.Line(outerGeom, outerMaterial);
  outerLine.frustumCulled = false;
  lines.push(outerLine);

  // Inner edge line (thicker)
  const innerGeom = new THREE.BufferGeometry().setFromPoints(innerPoints);
  const innerMaterial = new THREE.LineBasicMaterial({
    color: new THREE.Color(params.crossSectionColor),
    // linewidth not supported in WebGL
    depthTest: true,
    depthWrite: false
  });
  const innerLine = new THREE.Line(innerGeom, innerMaterial);
  innerLine.frustumCulled = false;
  lines.push(innerLine);

  // Dense radial spokes connecting outer to inner
  const spokeStep = Math.max(1, Math.floor(params.vDiv / params.crossSectionSpokes));
  for (let j = 0; j < params.vDiv; j += spokeStep) {
    const spokePoints = [outerPoints[j], innerPoints[j]];
    const spokeGeom = new THREE.BufferGeometry().setFromPoints(spokePoints);
    const spokeMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color(params.crossSectionColor),
      // linewidth not supported in WebGL
      depthTest: true,
      depthWrite: false
    });
    const spokeLine = new THREE.Line(spokeGeom, spokeMaterial);
    spokeLine.frustumCulled = false;
    lines.push(spokeLine);
  }

  // Concentric circles at different radii
  for (let c = 1; c <= params.crossSectionCircles; c++) {
    const t = c / (params.crossSectionCircles + 1);
    const circlePoints: THREE.Vector3[] = [];

    for (let j = 0; j <= params.vDiv; j++) {
      const vBase = 2 * Math.PI * j / params.vDiv;
      const v = vBase + params.twist * (u / (2 * Math.PI));

      // Interpolate between inner and outer
      const rTubeInner = rTube - params.wallThickness;
      const rtOuter = rTube * (1 + params.epsilon * Math.cos(v));
      const rtInner = rTubeInner * (1 + params.epsilon * Math.cos(v));
      const rt = rtInner + t * (rtOuter - rtInner);

      const x = (params.R + rt * Math.cos(v)) * Math.cos(u);
      const y = (params.R + rt * Math.cos(v)) * Math.sin(u);
      const z = rt * Math.sin(v) + params.h * (u / (2 * Math.PI));
      circlePoints.push(new THREE.Vector3(x, y, z));
    }

    const circleGeom = new THREE.BufferGeometry().setFromPoints(circlePoints);
    const circleMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color(params.crossSectionColor),
      // linewidth not supported in WebGL
      transparent: true,
      opacity: 0.6,
      depthTest: true,
      depthWrite: false
    });
    const circleLine = new THREE.Line(circleGeom, circleMaterial);
    circleLine.frustumCulled = false;
    lines.push(circleLine);
  }

  return lines;
}

