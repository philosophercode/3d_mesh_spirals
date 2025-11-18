import * as THREE from 'three';
import type { SpiralParams } from '../utils/types';

interface Point2D {
  x: number;
  y: number;
  z?: number;
}

interface LineSegment {
  p1: Point2D;
  p2: Point2D;
  depth: number;
  color: string;
  opacity: number;
}

interface Triangle {
  p1: Point2D;
  p2: Point2D;
  p3: Point2D;
  depth: number;
}

// Project 3D point to 2D screen coordinates
function project3DTo2D(point: THREE.Vector3, camera: THREE.Camera, width: number, height: number): Point2D {
  const vector = point.clone();
  vector.project(camera);
  const x = (vector.x + 1) / 2 * width;
  const y = (-vector.y + 1) / 2 * height;
  return { x, y, z: -vector.z };
}

// Extract occluding triangles from invisible meshes (for hidden line removal)
function extractOccludingTriangles(
  meshGroup: THREE.Group,
  camera: THREE.Camera,
  width: number,
  height: number
): Triangle[] {
  const triangles: Triangle[] = [];

  meshGroup.traverse((child) => {
    // Find meshes with colorWrite: false (occluding meshes)
    if (child instanceof THREE.Mesh && 
        child.material instanceof THREE.MeshBasicMaterial && 
        child.material.colorWrite === false) {
      const geometry = child.geometry;
      const index = geometry.index;
      const positions = geometry.attributes.position;

      if (index) {
        for (let i = 0; i < index.count; i += 3) {
          const v1 = new THREE.Vector3(
            positions.getX(index.getX(i)),
            positions.getY(index.getX(i)),
            positions.getZ(index.getX(i))
          ).applyMatrix4(child.matrixWorld);

          const v2 = new THREE.Vector3(
            positions.getX(index.getX(i + 1)),
            positions.getY(index.getX(i + 1)),
            positions.getZ(index.getX(i + 1))
          ).applyMatrix4(child.matrixWorld);

          const v3 = new THREE.Vector3(
            positions.getX(index.getX(i + 2)),
            positions.getY(index.getX(i + 2)),
            positions.getZ(index.getX(i + 2))
          ).applyMatrix4(child.matrixWorld);

          const p1 = project3DTo2D(v1, camera, width, height);
          const p2 = project3DTo2D(v2, camera, width, height);
          const p3 = project3DTo2D(v3, camera, width, height);

          const avgZ = ((p1.z || 0) + (p2.z || 0) + (p3.z || 0)) / 3;

          triangles.push({
            p1, p2, p3,
            depth: avgZ
          });
        }
      }
    }
  });

  return triangles;
}

// Extract line segments from geometry with depth sorting
function extractLineSegments(
  meshGroup: THREE.Group,
  camera: THREE.Camera,
  width: number,
  height: number,
  params: SpiralParams
): LineSegment[] {
  const segments: LineSegment[] = [];

  meshGroup.traverse((child) => {
    if (child instanceof THREE.Line) {
      if (!child.visible) return;

      const positions = child.geometry.attributes.position;
      const points: THREE.Vector3[] = [];

      for (let i = 0; i < positions.count; i++) {
        const point = new THREE.Vector3(
          positions.getX(i),
          positions.getY(i),
          positions.getZ(i)
        );
        point.applyMatrix4(child.matrixWorld);
        points.push(point);
      }

      // Filter lines based on rendering settings to match UI
      const material = child.material as THREE.LineBasicMaterial;
      const innerColor = new THREE.Color(params.innerColor);
      const lineColor = material.color;

      // Skip inner lines if inner surface is hidden
      if (lineColor.getHex() === innerColor.getHex() && !params.showInnerSurface) {
        return;
      }

      // Get color and opacity
      const color = material.color.getStyle();
      const opacity = material.opacity !== undefined ? material.opacity : 1.0;

      // Project all points to 2D
      const projectedPoints = points.map(p => project3DTo2D(p, camera, width, height));

      // Break into segments
      for (let i = 0; i < projectedPoints.length - 1; i++) {
        const p1 = projectedPoints[i];
        const p2 = projectedPoints[i + 1];
        
        // Calculate depth (average z in view space - more negative = further away)
        const avgZ = ((p1.z || 0) + (p2.z || 0)) / 2;
        
        segments.push({
          p1,
          p2,
          depth: avgZ,
          color,
          opacity
        });
      }
    }
  });

  return segments;
}

// Render triangles and line segments to SVG with proper depth sorting
function renderToSVG(
  triangles: Triangle[], 
  segments: LineSegment[], 
  width: number, 
  height: number, 
  backgroundColor: string
): string {
  const svgParts: string[] = [
    `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
  <rect width="100%" height="100%" fill="${backgroundColor}"/>
  <g id="mesh">
`
  ];

  // Create unified element list with type tags
  type Element = 
    | { type: 'triangle'; data: Triangle }
    | { type: 'line'; data: LineSegment };

  const elements: Element[] = [
    ...triangles.map(t => ({ type: 'triangle' as const, data: t })),
    ...segments.map(s => ({ type: 'line' as const, data: s }))
  ];

  // Sort by depth (back to front - lower z values render first)
  elements.sort((a, b) => a.data.depth - b.data.depth);

  // Render all elements in sorted order
  elements.forEach(element => {
    if (element.type === 'triangle') {
      const tri = element.data;
      svgParts.push(
        `    <polygon points="${tri.p1.x.toFixed(2)},${tri.p1.y.toFixed(2)} ${tri.p2.x.toFixed(2)},${tri.p2.y.toFixed(2)} ${tri.p3.x.toFixed(2)},${tri.p3.y.toFixed(2)}" fill="${backgroundColor}"/>\n`
      );
    } else {
      const seg = element.data;
      svgParts.push(
        `    <line x1="${seg.p1.x.toFixed(2)}" y1="${seg.p1.y.toFixed(2)}" x2="${seg.p2.x.toFixed(2)}" y2="${seg.p2.y.toFixed(2)}" stroke="${seg.color}" stroke-width="1" stroke-opacity="${seg.opacity}" stroke-linecap="round"/>\n`
      );
    }
  });

  svgParts.push('  </g>\n</svg>');
  return svgParts.join('');
}

// Yield control to browser periodically
function yieldToBrowser(): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, 0));
}

// Main export function (async to prevent freezing)
export async function exportScreenProjectionSVG(
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.Camera,
  params: SpiralParams,
  meshGroup: THREE.Group
): Promise<void> {
  // Update camera and scene matrices
  camera.updateMatrixWorld();
  if (camera instanceof THREE.PerspectiveCamera || camera instanceof THREE.OrthographicCamera) {
    camera.updateProjectionMatrix();
  }

  meshGroup.updateMatrixWorld(true);

  const width = renderer.domElement.width;
  const height = renderer.domElement.height;

  // Render the scene to ensure it's up to date
  renderer.render(scene, camera);
  
  await yieldToBrowser();

  // Extract occluding triangles (for hidden line removal)
  const triangles = extractOccludingTriangles(
    meshGroup,
    camera,
    width,
    height
  );

  await yieldToBrowser();

  // Extract line segments from geometry
  const segments = extractLineSegments(
    meshGroup,
    camera,
    width,
    height,
    params
  );

  await yieldToBrowser();

  // Generate SVG with proper occlusion (triangles render first, then lines on top in depth order)
  const svg = renderToSVG(triangles, segments, width, height, params.backgroundColor);

  // Download SVG
  const blob = new Blob([svg], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `spiral_view_${Date.now()}.svg`;
  a.click();
  URL.revokeObjectURL(url);
}

