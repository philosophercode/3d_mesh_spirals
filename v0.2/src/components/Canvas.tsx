import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { setupScene, handleResize, type SceneSetup } from '../rendering/scene';
import { updateMesh } from '../rendering/mesh';
import type { SpiralParams } from '../utils/types';

interface CanvasProps {
  params: SpiralParams;
  onSceneReady: (setup: SceneSetup, meshGroup: THREE.Group) => void;
}

export function Canvas({ params, onSceneReady }: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneSetupRef = useRef<SceneSetup | null>(null);
  const meshGroupRef = useRef<THREE.Group | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Setup scene
    const setup = setupScene(canvasRef.current);
    sceneSetupRef.current = setup;

    // Set background
    setup.scene.background = new THREE.Color(params.backgroundColor);
    setup.gridHelper.visible = params.showGrid;

    // Set camera based on projection
    const camera = params.projection === 'Orthographic' ? setup.orthoCamera : setup.perspCamera;
    setup.camera = camera;
    setup.orbitControls.object = camera;
    camera.position.set(5, 4, 5);
    setup.orbitControls.update();

    // Create mesh group
    const meshGroup = new THREE.Group();
    meshGroup.name = 'meshGroup'; // Add name for easier finding
    setup.scene.add(meshGroup);
    meshGroupRef.current = meshGroup;

    // Initial mesh update
    updateMesh(meshGroup, params);

    // Notify parent
    onSceneReady(setup, meshGroup);

    // Animation loop
    function animate() {
      if (!sceneSetupRef.current) return;
      setup.orbitControls.update();
      setup.renderer.render(setup.scene, setup.camera);
      animationFrameRef.current = requestAnimationFrame(animate);
    }
    animate();

    // Handle resize
    const handleResizeEvent = () => {
      if (sceneSetupRef.current) {
        handleResize(sceneSetupRef.current);
      }
    };
    window.addEventListener('resize', handleResizeEvent);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResizeEvent);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (meshGroupRef.current) {
        meshGroupRef.current.clear();
      }
      setup.renderer.dispose();
    };
  }, []); // Only run once on mount

  // Update mesh when params change
  useEffect(() => {
    if (!meshGroupRef.current || !sceneSetupRef.current) return;

    // Update background
    sceneSetupRef.current.scene.background = new THREE.Color(params.backgroundColor);
    sceneSetupRef.current.gridHelper.visible = params.showGrid;

    // Update camera if projection changed
    if (params.projection === 'Orthographic') {
      if (sceneSetupRef.current.camera !== sceneSetupRef.current.orthoCamera) {
        sceneSetupRef.current.camera = sceneSetupRef.current.orthoCamera;
        sceneSetupRef.current.orbitControls.object = sceneSetupRef.current.orthoCamera;
        sceneSetupRef.current.orthoCamera.position.copy(sceneSetupRef.current.orbitControls.target).add(new THREE.Vector3(5, 4, 5));
        sceneSetupRef.current.orbitControls.update();
      }
    } else {
      if (sceneSetupRef.current.camera !== sceneSetupRef.current.perspCamera) {
        sceneSetupRef.current.camera = sceneSetupRef.current.perspCamera;
        sceneSetupRef.current.orbitControls.object = sceneSetupRef.current.perspCamera;
        sceneSetupRef.current.perspCamera.position.copy(sceneSetupRef.current.orbitControls.target).add(new THREE.Vector3(5, 4, 5));
        sceneSetupRef.current.orbitControls.update();
      }
    }

    // Update mesh
    updateMesh(meshGroupRef.current, params);
  }, [params]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'block',
        width: '100vw',
        height: '100vh',
      }}
    />
  );
}

