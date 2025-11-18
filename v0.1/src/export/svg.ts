import * as THREE from 'three';
import type { SpiralParams } from '../utils/types';

export function downloadPNG(
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.Camera,
  canvas: HTMLCanvasElement
): void {
  renderer.render(scene, camera);
  canvas.toBlob((blob) => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `snail_pyramid_${Date.now()}.png`;
    a.click();
    URL.revokeObjectURL(url);
  });
}

export function downloadSVG(
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.Camera,
  meshGroup: THREE.Group,
  params: SpiralParams
): void {
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Render current frame to ensure camera and scene are synced
  renderer.render(scene, camera);

  // Update camera and scene matrices to match current view
  camera.updateMatrixWorld();
  if (camera instanceof THREE.PerspectiveCamera || camera instanceof THREE.OrthographicCamera) {
    camera.updateProjectionMatrix();
  }
  meshGroup.updateMatrixWorld(true);

  // Simple approach like v0: render occlusion triangles first, then lines on top
  // SVG's natural z-ordering handles occlusion

  // Create SVG header
  let svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
<rect width="100%" height="100%" fill="${params.backgroundColor}"/>
<g id="mesh">
`;

  // Helper to project 3D point to 2D screen coordinates
  function project3DTo2D(point: THREE.Vector3): { x: number; y: number; z: number } {
    const vector = point.clone();
    vector.project(camera);
    const x = (vector.x + 1) / 2 * width;
    const y = (-vector.y + 1) / 2 * height;
    return { x, y, z: -vector.z };
  }

  // Collect all elements (triangles and line segments) with depth for sorting
  interface Element {
    type: 'triangle' | 'line';
    depth: number;
    p1: { x: number; y: number; z: number };
    p2: { x: number; y: number; z: number };
    p3?: { x: number; y: number; z: number };
    color?: string;
    opacity?: number;
    lineWidth?: number;
    pathData?: string; // For continuous line paths
  }

  const elements: Element[] = [];

  // Collect occluding triangles first (like v0)
  meshGroup.traverse((child) => {
    if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshBasicMaterial && child.material.colorWrite === false) {
      console.log('Found occluding mesh with', child.geometry.index?.count || 0, 'indices');
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

          const p1 = project3DTo2D(v1);
          const p2 = project3DTo2D(v2);
          const p3 = project3DTo2D(v3);

          const avgZ = (p1.z + p2.z + p3.z) / 3;

          elements.push({
            type: 'triangle',
            depth: avgZ,
            p1, p2, p3
          });
        }
      }
    }
  });

  // Collect line segments (like v0 - break into segments for proper depth sorting)
  meshGroup.traverse((child) => {
    if (child instanceof THREE.Line) {
      // Skip if line is not visible
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

      const material = child.material as THREE.LineBasicMaterial;
      const color = material.color.getStyle();
      const opacity = material.opacity !== undefined ? material.opacity : 1.0;
      
      // Filter lines based on rendering settings to match UI
      const innerColor = new THREE.Color(params.innerColor);
      const crossSectionColor = new THREE.Color(params.crossSectionColor);
      const lineColor = material.color;
      
      // Skip lines that shouldn't be visible based on params
      if (lineColor.getHex() === innerColor.getHex() && !params.showInnerSurface) {
        return; // Skip inner lines if inner surface is hidden
      }
      
      // Skip cross-section lines if cross-section is hidden
      if (lineColor.getHex() === crossSectionColor.getHex() && !params.showCrossSection) {
        return;
      }
      
      // Use thin lines to match UI appearance (WebGL renders at 1px)
      const lineWidth = 1;

      // Project all points to 2D
      const projectedPoints = points.map(p => project3DTo2D(p));

      // Break into segments like v0 (for proper depth sorting)
      for (let i = 0; i < projectedPoints.length - 1; i++) {
        const p1 = projectedPoints[i];
        const p2 = projectedPoints[i + 1];
        const avgZ = (p1.z + p2.z) / 2;

        elements.push({
          type: 'line',
          depth: avgZ,
          p1, p2,
          color, opacity, lineWidth
        });
      }
    }
  });

  // Sort by depth (back to front - lower z values first)
  elements.sort((a, b) => a.depth - b.depth);

  const triangleCount = elements.filter(e => e.type === 'triangle').length;
  const lineCount = elements.filter(e => e.type === 'line').length;
  console.log(`SVG Export: ${triangleCount} triangles, ${lineCount} line segments`);

  // Render all elements in sorted order
  elements.forEach(element => {
    if (element.type === 'triangle' && element.p3) {
      svg += `<polygon points="${element.p1.x.toFixed(2)},${element.p1.y.toFixed(2)} ${element.p2.x.toFixed(2)},${element.p2.y.toFixed(2)} ${element.p3.x.toFixed(2)},${element.p3.y.toFixed(2)}" fill="${params.backgroundColor}"/>\n`;
    } else if (element.type === 'line') {
      // Use path for continuous lines if available, otherwise use line element
      if (element.pathData) {
        svg += `<path d="${element.pathData}" stroke="${element.color}" stroke-width="${element.lineWidth}" stroke-opacity="${element.opacity}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>\n`;
      } else {
        svg += `<line x1="${element.p1.x.toFixed(2)}" y1="${element.p1.y.toFixed(2)}" x2="${element.p2.x.toFixed(2)}" y2="${element.p2.y.toFixed(2)}" stroke="${element.color}" stroke-width="${element.lineWidth}" stroke-opacity="${element.opacity}" stroke-linecap="round" stroke-linejoin="round"/>\n`;
      }
    }
  });

  svg += `</g>\n</svg>`;

  // Download SVG
  const blob = new Blob([svg], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `snail_pyramid_${Date.now()}.svg`;
  a.click();
  URL.revokeObjectURL(url);
}

export function copyJSON(params: SpiralParams, camera?: THREE.Camera, orbitControls?: any): void {
  const dataToCopy: any = { ...params };
  
  // Add camera position and target if available
  if (camera && orbitControls) {
    dataToCopy.cameraPosition = {
      x: camera.position.x,
      y: camera.position.y,
      z: camera.position.z
    };
    dataToCopy.cameraTarget = {
      x: orbitControls.target.x,
      y: orbitControls.target.y,
      z: orbitControls.target.z
    };
    if (camera instanceof THREE.PerspectiveCamera) {
      dataToCopy.cameraFov = camera.fov;
    }
    if (camera instanceof THREE.OrthographicCamera) {
      dataToCopy.cameraOrthoSize = (camera.top - camera.bottom) / 2;
    }
  }
  
  const json = JSON.stringify(dataToCopy, null, 2);
  navigator.clipboard.writeText(json);
  console.log('Preset copied to clipboard:', json);
}

export function saveJSON(params: SpiralParams, camera?: THREE.Camera, orbitControls?: any): void {
  const dataToSave: any = { ...params };
  
  // Add camera position and target if available
  if (camera && orbitControls) {
    dataToSave.cameraPosition = {
      x: camera.position.x,
      y: camera.position.y,
      z: camera.position.z
    };
    dataToSave.cameraTarget = {
      x: orbitControls.target.x,
      y: orbitControls.target.y,
      z: orbitControls.target.z
    };
    if (camera instanceof THREE.PerspectiveCamera) {
      dataToSave.cameraFov = camera.fov;
    }
    if (camera instanceof THREE.OrthographicCamera) {
      dataToSave.cameraOrthoSize = (camera.top - camera.bottom) / 2;
    }
  }
  
  const json = JSON.stringify(dataToSave, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `snail_pyramid_preset_${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

export interface LoadCallback {
  onParamsLoad: (params: Partial<SpiralParams>) => void;
  onCameraLoad?: (data: { position?: { x: number; y: number; z: number }; target?: { x: number; y: number; z: number }; fov?: number; orthoSize?: number }) => void;
}

export function loadJSON(
  callbacks: LoadCallback
): void {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = (e) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const loaded = JSON.parse(event.target?.result as string);
        
        // Extract camera data if present
        const cameraData: any = {};
        if (loaded.cameraPosition) {
          cameraData.position = loaded.cameraPosition;
          delete loaded.cameraPosition;
        }
        if (loaded.cameraTarget) {
          cameraData.target = loaded.cameraTarget;
          delete loaded.cameraTarget;
        }
        if (loaded.cameraFov !== undefined) {
          cameraData.fov = loaded.cameraFov;
          delete loaded.cameraFov;
        }
        if (loaded.cameraOrthoSize !== undefined) {
          cameraData.orthoSize = loaded.cameraOrthoSize;
          delete loaded.cameraOrthoSize;
        }
        
        callbacks.onParamsLoad(loaded);
        if (callbacks.onCameraLoad && Object.keys(cameraData).length > 0) {
          callbacks.onCameraLoad(cameraData);
        }
        console.log('Preset loaded successfully');
      } catch (error) {
        console.error('Error loading preset:', error);
        alert('Error loading preset file');
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

