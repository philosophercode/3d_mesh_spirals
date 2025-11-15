import './styles/main.css';
import * as THREE from 'three';
import { setupScene, handleResize } from './rendering/scene';
import { updateMesh } from './rendering/mesh';
import { setupControls, type ControlCallbacks } from './ui/controls';
import { defaultParams } from './utils/params';
import type { SpiralParams } from './utils/types';
import { exportLaserCutSVG } from './export/laserCut';

// Initialize scene
const canvas = document.getElementById('canvas') as HTMLCanvasElement;
if (!canvas) {
  throw new Error('Canvas element not found');
}

const sceneSetup = setupScene(canvas);
const { scene, renderer, orthoCamera, perspCamera, orbitControls, gridHelper } = sceneSetup;

// Create axes helper
const axesHelper = new THREE.AxesHelper(2);
axesHelper.visible = false;
scene.add(axesHelper);

// Create mesh group
const meshGroup = new THREE.Group();
scene.add(meshGroup);

// Initialize parameters
let currentParams: SpiralParams = { ...defaultParams };
scene.background = new THREE.Color(currentParams.backgroundColor);
gridHelper.visible = currentParams.showGrid;

// Update camera reference
let currentCamera: THREE.Camera = currentParams.projection === 'Orthographic' ? orthoCamera : perspCamera;
sceneSetup.camera = currentCamera;
orbitControls.object = currentCamera;

// Initialize mesh
updateMesh(meshGroup, currentParams);

// Setup controls
const callbacks: ControlCallbacks = {
  onParamsChange: (params: SpiralParams) => {
    currentParams = params;
    updateMesh(meshGroup, currentParams);
  },
  onProjectionChange: (projection: 'Orthographic' | 'Perspective') => {
    currentCamera = projection === 'Orthographic' ? orthoCamera : perspCamera;
    sceneSetup.camera = currentCamera;
    orbitControls.object = currentCamera;
    currentCamera.position.copy(orbitControls.target).add(new THREE.Vector3(5, 4, 5));
    orbitControls.update();
    currentParams.projection = projection;
  },
  onBackgroundChange: (color: string) => {
    scene.background = new THREE.Color(color);
    currentParams.backgroundColor = color;
  },
  onGridChange: (show: boolean) => {
    gridHelper.visible = show;
    currentParams.showGrid = show;
  },
  onLaserCutExport: (params: SpiralParams) => {
    exportLaserCutSVG(meshGroup, params);
  },
};

setupControls(
  currentParams,
  scene,
  gridHelper,
  renderer,
  currentCamera,
  meshGroup,
  canvas,
  callbacks,
  orbitControls,
  axesHelper
);

// Animation loop
function animate(): void {
  requestAnimationFrame(animate);
  orbitControls.update();
  renderer.render(scene, currentCamera);
}

animate();

// Handle resize
window.addEventListener('resize', () => {
  handleResize(sceneSetup);
});

