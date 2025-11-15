import * as THREE from 'three';
import type { SpiralParams } from '../utils/types';

export function computeRadiusAtU(u: number, params: SpiralParams): number {
  let r: number;
  if (params.mode === 'Exponential') {
    r = params.r0 * Math.exp(-params.k * u);
  } else {
    r = params.r0 - params.alpha * u;
  }
  return Math.max(r, params.rMin);
}

export function buildThickWallGeometry(params: SpiralParams): THREE.BufferGeometry {
  const vertices: number[] = [];
  const indices: number[] = [];
  const uMax = 2 * Math.PI * params.N;
  const numOuterVerts = (params.uDiv + 1) * (params.vDiv + 1);

  // Generate vertices for OUTER surface
  for (let i = 0; i <= params.uDiv; i++) {
    const u = uMax * i / params.uDiv;
    const rTube = computeRadiusAtU(u, params);

    for (let j = 0; j <= params.vDiv; j++) {
      const vBase = 2 * Math.PI * j / params.vDiv;
      const v = vBase + params.twist * (u / (2 * Math.PI));

      const rt = rTube * (1 + params.epsilon * Math.cos(v));
      const x = (params.R + rt * Math.cos(v)) * Math.cos(u);
      const y = (params.R + rt * Math.cos(v)) * Math.sin(u);
      const z = rt * Math.sin(v) + params.h * (u / (2 * Math.PI));

      vertices.push(x, y, z);
    }
  }

  // Generate vertices for INNER surface
  for (let i = 0; i <= params.uDiv; i++) {
    const u = uMax * i / params.uDiv;
    const rTube = computeRadiusAtU(u, params);
    const rTubeInner = rTube - params.wallThickness;

    for (let j = 0; j <= params.vDiv; j++) {
      const vBase = 2 * Math.PI * j / params.vDiv;
      const v = vBase + params.twist * (u / (2 * Math.PI));

      const rt = rTubeInner * (1 + params.epsilon * Math.cos(v));
      const x = (params.R + rt * Math.cos(v)) * Math.cos(u);
      const y = (params.R + rt * Math.cos(v)) * Math.sin(u);
      const z = rt * Math.sin(v) + params.h * (u / (2 * Math.PI));

      vertices.push(x, y, z);
    }
  }

  // Outer surface triangles
  for (let i = 0; i < params.uDiv; i++) {
    for (let j = 0; j < params.vDiv; j++) {
      const a = i * (params.vDiv + 1) + j;
      const b = (i + 1) * (params.vDiv + 1) + j;
      const c = (i + 1) * (params.vDiv + 1) + (j + 1);
      const d = i * (params.vDiv + 1) + (j + 1);

      indices.push(a, b, d);
      indices.push(b, c, d);
    }
  }

  // Inner surface triangles (reversed winding)
  for (let i = 0; i < params.uDiv; i++) {
    for (let j = 0; j < params.vDiv; j++) {
      const a = numOuterVerts + i * (params.vDiv + 1) + j;
      const b = numOuterVerts + (i + 1) * (params.vDiv + 1) + j;
      const c = numOuterVerts + (i + 1) * (params.vDiv + 1) + (j + 1);
      const d = numOuterVerts + i * (params.vDiv + 1) + (j + 1);

      indices.push(a, d, b);
      indices.push(b, d, c);
    }
  }

  // Cap at start (u=0)
  for (let j = 0; j < params.vDiv; j++) {
    const outerA = j;
    const outerB = j + 1;
    const innerA = numOuterVerts + j;
    const innerB = numOuterVerts + j + 1;

    indices.push(outerA, innerA, outerB);
    indices.push(outerB, innerA, innerB);
  }

  // Cap at end (u=uMax)
  const lastRing = params.uDiv * (params.vDiv + 1);
  for (let j = 0; j < params.vDiv; j++) {
    const outerA = lastRing + j;
    const outerB = lastRing + j + 1;
    const innerA = numOuterVerts + lastRing + j;
    const innerB = numOuterVerts + lastRing + j + 1;

    indices.push(outerA, outerB, innerA);
    indices.push(outerB, innerB, innerA);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();

  return geometry;
}

