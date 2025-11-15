import * as THREE from 'three';
import { STLExporter } from 'three/addons/exporters/STLExporter.js';
import { OBJExporter } from 'three/addons/exporters/OBJExporter.js';
import { USDZExporter } from 'three/addons/exporters/USDZExporter.js';

/**
 * Helper function to collect all meshes from a group
 */
function collectMeshes(group: THREE.Group): THREE.Mesh[] {
  const meshes: THREE.Mesh[] = [];
  group.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      // Skip depth-only meshes (invisible occlusion meshes)
      const material = child.material;
      if (material instanceof THREE.MeshBasicMaterial && material.colorWrite === false) {
        return; // Skip invisible occlusion meshes
      }
      meshes.push(child);
    }
  });
  return meshes;
}

/**
 * Download a blob with the given filename
 */
function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Export the mesh as STL format (binary)
 */
export function exportSTL(meshGroup: THREE.Group): void {
  const exporter = new STLExporter();
  const meshes = collectMeshes(meshGroup);
  
  if (meshes.length === 0) {
    alert('No meshes to export');
    return;
  }

  try {
    // Create a temporary group with only visible meshes
    const tempGroup = new THREE.Group();
    meshes.forEach(mesh => {
      const clonedMesh = mesh.clone();
      clonedMesh.updateMatrixWorld(true);
      tempGroup.add(clonedMesh);
    });

    // Export as binary STL (smaller file size)
    const result = exporter.parse(tempGroup, { binary: true }) as DataView;
    const arrayBuffer = result.buffer as ArrayBuffer;
    const blob = new Blob([arrayBuffer], { type: 'application/octet-stream' });
    downloadBlob(blob, `spiral_mesh_${Date.now()}.stl`);
    
    console.log('STL export successful');
  } catch (error) {
    console.error('Error exporting STL:', error);
    alert('Error exporting STL file');
  }
}

/**
 * Export the mesh as ASCII STL format
 */
export function exportSTLAscii(meshGroup: THREE.Group): void {
  const exporter = new STLExporter();
  const meshes = collectMeshes(meshGroup);
  
  if (meshes.length === 0) {
    alert('No meshes to export');
    return;
  }

  try {
    // Create a temporary group with only visible meshes
    const tempGroup = new THREE.Group();
    meshes.forEach(mesh => {
      const clonedMesh = mesh.clone();
      clonedMesh.updateMatrixWorld(true);
      tempGroup.add(clonedMesh);
    });

    // Export as ASCII STL
    const result = exporter.parse(tempGroup, { binary: false });
    const blob = new Blob([result], { type: 'text/plain' });
    downloadBlob(blob, `spiral_mesh_${Date.now()}.stl`);
    
    console.log('STL (ASCII) export successful');
  } catch (error) {
    console.error('Error exporting STL:', error);
    alert('Error exporting STL file');
  }
}

/**
 * Export the mesh as OBJ format
 */
export function exportOBJ(meshGroup: THREE.Group): void {
  const exporter = new OBJExporter();
  const meshes = collectMeshes(meshGroup);
  
  if (meshes.length === 0) {
    alert('No meshes to export');
    return;
  }

  try {
    // Create a temporary group with only visible meshes
    const tempGroup = new THREE.Group();
    meshes.forEach(mesh => {
      const clonedMesh = mesh.clone();
      clonedMesh.updateMatrixWorld(true);
      tempGroup.add(clonedMesh);
    });

    const result = exporter.parse(tempGroup);
    const blob = new Blob([result], { type: 'text/plain' });
    downloadBlob(blob, `spiral_mesh_${Date.now()}.obj`);
    
    console.log('OBJ export successful');
  } catch (error) {
    console.error('Error exporting OBJ:', error);
    alert('Error exporting OBJ file');
  }
}

/**
 * Export the mesh as USDZ format (for Apple AR)
 * Note: USDZ export is async
 */
export async function exportUSDZ(meshGroup: THREE.Group): Promise<void> {
  const exporter = new USDZExporter();
  const meshes = collectMeshes(meshGroup);
  
  if (meshes.length === 0) {
    alert('No meshes to export');
    return;
  }

  try {
    // Create a temporary group with only visible meshes
    const tempGroup = new THREE.Group();
    meshes.forEach(mesh => {
      const clonedMesh = mesh.clone();
      clonedMesh.updateMatrixWorld(true);
      tempGroup.add(clonedMesh);
    });

    // USDZ export is async
    const result = await exporter.parse(tempGroup);
    // Handle both ArrayBuffer and Uint8Array return types
    const buffer = (result instanceof Uint8Array ? result.buffer : result) as ArrayBuffer;
    const blob = new Blob([buffer], { type: 'application/octet-stream' });
    downloadBlob(blob, `spiral_mesh_${Date.now()}.usdz`);
    
    console.log('USDZ export successful');
  } catch (error) {
    console.error('Error exporting USDZ:', error);
    alert('Error exporting USDZ file. This format may not be fully supported in your browser.');
  }
}

/**
 * Export as GLB/GLTF format (bonus - widely supported format)
 */
export async function exportGLB(meshGroup: THREE.Group): Promise<void> {
  try {
    // Dynamic import to avoid loading if not needed
    const { GLTFExporter } = await import('three/addons/exporters/GLTFExporter.js');
    
    const exporter = new GLTFExporter();
    const meshes = collectMeshes(meshGroup);
    
    if (meshes.length === 0) {
      alert('No meshes to export');
      return;
    }

    // Create a temporary group with only visible meshes
    const tempGroup = new THREE.Group();
    meshes.forEach(mesh => {
      const clonedMesh = mesh.clone();
      clonedMesh.updateMatrixWorld(true);
      tempGroup.add(clonedMesh);
    });

    exporter.parse(
      tempGroup,
      (result) => {
        if (result instanceof ArrayBuffer) {
          const blob = new Blob([result], { type: 'application/octet-stream' });
          downloadBlob(blob, `spiral_mesh_${Date.now()}.glb`);
          console.log('GLB export successful');
        }
      },
      (error) => {
        console.error('Error exporting GLB:', error);
        alert('Error exporting GLB file');
      },
      { binary: true }
    );
  } catch (error) {
    console.error('Error loading GLTFExporter:', error);
    alert('Error exporting GLB file');
  }
}

