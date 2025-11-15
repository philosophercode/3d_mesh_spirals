import * as THREE from 'three';
import type { SpiralParams } from '../utils/types';
import { buildGeometry, buildThickWallGeometry } from '../geometry/spiral';
import { buildCrossSectionWall } from '../geometry/crossSection';
import { buildWireframeLines, buildCrossSectionWireframe } from './wireframe';

export function updateMesh(
  meshGroup: THREE.Group,
  params: SpiralParams
): void {
  console.log('updateMesh called, renderStyle:', params.renderStyle, 'hasTexture:', !!params.textureImage);
  
  // Dispose of existing textures and materials before clearing
  meshGroup.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      const material = child.material;
      if (material instanceof THREE.Material) {
        if ('map' in material && material.map && typeof material.map === 'object' && 'dispose' in material.map) {
          (material.map as THREE.Texture).dispose();
        }
        material.dispose();
      }
      if (child.geometry) {
        child.geometry.dispose();
      }
    }
  });
  
  // Clear existing mesh
  meshGroup.clear();

  if (params.renderStyle === 'Solid') {
    const geometry = buildGeometry(params);
    
    // Create material with optional texture
    const materialOptions: any = {
      color: 0x6699cc,
      side: THREE.DoubleSide,
      metalness: 0.3,
      roughness: 0.6
    };
    
    // Load texture if provided
    if (params.textureImage) {
      console.log('Loading texture from:', params.textureImage.substring(0, 50) + '...');
      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load(
        params.textureImage,
        (loadedTexture) => {
          // Texture loaded successfully
          console.log('Texture loaded successfully, dimensions:', loadedTexture.image.width, 'x', loadedTexture.image.height);
        },
        (progress) => {
          console.log('Texture loading progress:', progress);
        },
        (error) => {
          console.error('Error loading texture:', error);
          alert('Error loading texture image. Please try a different image.');
        }
      );
      
      // Apply texture repeat and offset if specified
      if (params.textureRepeat) {
        texture.repeat.set(params.textureRepeat.u, params.textureRepeat.v);
      } else {
        texture.repeat.set(1, 1);
      }
      if (params.textureOffset) {
        texture.offset.set(params.textureOffset.u, params.textureOffset.v);
      } else {
        texture.offset.set(0, 0);
      }
      
      materialOptions.map = texture;
      console.log('Texture applied to material');
    } else {
      console.log('No texture image provided');
    }
    
    const material = new THREE.MeshStandardMaterial(materialOptions);
    const mesh = new THREE.Mesh(geometry, material);
    meshGroup.add(mesh);
  } else if (params.renderStyle === 'Wireframe') {
    const { outerLines, innerLines, depthLines } = buildWireframeLines(params);

    // If occlusion is enabled, use thick wall geometry for proper depth
    if (params.occludeInner) {
      // Use thick wall geometry including inner surface, outer surface, and caps
      const thickGeometry = buildThickWallGeometry(params);
      const depthMaterial = new THREE.MeshBasicMaterial({
        colorWrite: false,
        side: THREE.FrontSide  // Only render front faces for occlusion
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
      side: THREE.FrontSide  // Only render front faces for occlusion
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

  // Add cross-section walls at both ends if enabled
  if (params.showCrossSection) {
    const uMax = 2 * Math.PI * params.N;
    const uPositions = [0, uMax]; // Start and end

    uPositions.forEach(u => {
      if (params.renderStyle === 'Solid') {
        // Render solid cross-section
        const csGeometry = buildCrossSectionWall(params, u);
        const csMaterial = new THREE.MeshStandardMaterial({
          color: params.crossSectionColor,
          side: THREE.DoubleSide,
          metalness: 0.5,
          roughness: 0.4
        });
        const csMesh = new THREE.Mesh(csGeometry, csMaterial);
        meshGroup.add(csMesh);
      } else {
        // Render invisible depth mesh for cross-section to occlude lines behind it
        const csGeometry = buildCrossSectionWall(params, u);
        const csDepthMaterial = new THREE.MeshBasicMaterial({
          colorWrite: false,
          side: THREE.DoubleSide
        });
        const csDepthMesh = new THREE.Mesh(csGeometry, csDepthMaterial);
        meshGroup.add(csDepthMesh);

        // Render wireframe cross-section on top
        const csLines = buildCrossSectionWireframe(params, u);
        csLines.forEach(line => {
          const material = line.material as THREE.LineBasicMaterial;
          material.depthTest = true;
          material.depthWrite = false;
          line.renderOrder = 2; // Render on top
          meshGroup.add(line);
        });
      }
    });
  }
}

