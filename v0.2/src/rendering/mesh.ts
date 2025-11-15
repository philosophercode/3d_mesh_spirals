import * as THREE from 'three';
import type { SpiralParams } from '../utils/types';
import { buildThickWallGeometry } from '../geometry/spiral';
import { buildWireframeLines } from './wireframe';

export function updateMesh(
  meshGroup: THREE.Group,
  params: SpiralParams
): void {
  // Dispose of existing materials and geometries before clearing
  meshGroup.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      const material = child.material;
      if (material instanceof THREE.Material) {
        material.dispose();
      }
      if (child.geometry) {
        child.geometry.dispose();
      }
    }
    if (child instanceof THREE.Line) {
      const material = child.material;
      if (material instanceof THREE.Material) {
        material.dispose();
      }
      if (child.geometry) {
        child.geometry.dispose();
      }
    }
  });
  
  // Clear existing mesh
  meshGroup.clear();

  if (params.renderStyle === 'Wireframe') {
    const { outerLines, innerLines, depthLines } = buildWireframeLines(params);

    // If occlusion is enabled, use thick wall geometry for proper depth
    if (params.occludeInner) {
      const thickGeometry = buildThickWallGeometry(params);
      const depthMaterial = new THREE.MeshBasicMaterial({
        colorWrite: false,
        side: THREE.FrontSide
      });
      const depthMesh = new THREE.Mesh(thickGeometry, depthMaterial);
      meshGroup.add(depthMesh);

      // Render lines with depth testing
      [...outerLines, ...innerLines, ...depthLines].forEach(line => {
        const material = line.material as THREE.LineBasicMaterial;
        material.depthTest = true;
        material.depthWrite = false;
        line.renderOrder = 1;
        meshGroup.add(line);
      });
    } else {
      // No occlusion - render lines normally
      outerLines.forEach(line => meshGroup.add(line));
      innerLines.forEach(line => meshGroup.add(line));
      depthLines.forEach(line => meshGroup.add(line));
    }
  } else if (params.renderStyle === 'Hidden-line') {
    // Hidden-line always uses thick wall geometry for proper occlusion
    const thickGeometry = buildThickWallGeometry(params);
    const depthMaterial = new THREE.MeshBasicMaterial({
      colorWrite: false,
      side: THREE.FrontSide
    });
    const depthMesh = new THREE.Mesh(thickGeometry, depthMaterial);
    meshGroup.add(depthMesh);

    // Wireframe on top with depth testing
    const { outerLines, innerLines, depthLines } = buildWireframeLines(params);
    [...outerLines, ...innerLines, ...depthLines].forEach(line => {
      const material = line.material as THREE.LineBasicMaterial;
      material.depthTest = true;
      material.depthWrite = false;
      line.renderOrder = 1;
      meshGroup.add(line);
    });
  }
}

