import * as THREE from 'three';
import type { SpiralParams } from '../utils/types';
import { computeRadiusAtU } from './spiral';

export function buildCrossSectionWall(params: SpiralParams, u: number): THREE.BufferGeometry {
  const rTube = computeRadiusAtU(u, params);

  const vertices: number[] = [];
  const indices: number[] = [];

  // Generate vertices for the cross-section ring (outer and inner edges)
  for (let j = 0; j <= params.vDiv; j++) {
    const vBase = 2 * Math.PI * j / params.vDiv;
    const v = vBase + params.twist * (u / (2 * Math.PI));

    // Outer edge vertex
    const rtOuter = rTube * (1 + params.epsilon * Math.cos(v));
    const xOuter = (params.R + rtOuter * Math.cos(v)) * Math.cos(u);
    const yOuter = (params.R + rtOuter * Math.cos(v)) * Math.sin(u);
    const zOuter = rtOuter * Math.sin(v) + params.h * (u / (2 * Math.PI));
    vertices.push(xOuter, yOuter, zOuter);

    // Inner edge vertex
    const rTubeInner = rTube - params.wallThickness;
    const rtInner = rTubeInner * (1 + params.epsilon * Math.cos(v));
    const xInner = (params.R + rtInner * Math.cos(v)) * Math.cos(u);
    const yInner = (params.R + rtInner * Math.cos(v)) * Math.sin(u);
    const zInner = rtInner * Math.sin(v) + params.h * (u / (2 * Math.PI));
    vertices.push(xInner, yInner, zInner);
  }

  // Generate triangles for the cross-section wall
  for (let j = 0; j < params.vDiv; j++) {
    const outerA = j * 2;
    const innerA = j * 2 + 1;
    const outerB = (j + 1) * 2;
    const innerB = (j + 1) * 2 + 1;

    // Create quad as two triangles
    indices.push(outerA, outerB, innerA);
    indices.push(outerB, innerB, innerA);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();

  return geometry;
}

