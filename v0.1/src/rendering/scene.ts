import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export interface SceneSetup {
  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer;
  orthoCamera: THREE.OrthographicCamera;
  perspCamera: THREE.PerspectiveCamera;
  camera: THREE.Camera;
  orbitControls: OrbitControls;
  gridHelper: THREE.GridHelper;
  ambientLight: THREE.AmbientLight;
  directionalLight: THREE.DirectionalLight;
}

export function setupScene(canvas: HTMLCanvasElement): SceneSetup {
  const renderer = new THREE.WebGLRenderer({ 
    canvas, 
    antialias: true,
    alpha: false,
    powerPreference: "high-performance"
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  // Use higher pixel ratio for better line quality
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 3));
  // Improve line rendering
  renderer.sortObjects = true;

  const scene = new THREE.Scene();

  // Setup both cameras
  const aspect = window.innerWidth / window.innerHeight;
  const orthoSize = 3;
  const orthoCamera = new THREE.OrthographicCamera(
    -orthoSize * aspect, orthoSize * aspect, orthoSize, -orthoSize, 0.1, 1000
  );
  const perspCamera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000);

  let camera: THREE.Camera = orthoCamera;
  orthoCamera.position.set(5, 4, 5);
  perspCamera.position.set(5, 4, 5);

  const orbitControls = new OrbitControls(camera, canvas);
  orbitControls.enableDamping = true;
  orbitControls.dampingFactor = 0.05;

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(5, 10, 7);
  scene.add(directionalLight);

  // Grid helper
  const gridHelper = new THREE.GridHelper(10, 10, 0x444444, 0x222222);
  scene.add(gridHelper);

  return {
    scene,
    renderer,
    orthoCamera,
    perspCamera,
    camera,
    orbitControls,
    gridHelper,
    ambientLight,
    directionalLight,
  };
}

export function handleResize(
  setup: SceneSetup,
  orthoSize: number = 3
): void {
  const aspect = window.innerWidth / window.innerHeight;

  setup.orthoCamera.left = -orthoSize * aspect;
  setup.orthoCamera.right = orthoSize * aspect;
  setup.orthoCamera.updateProjectionMatrix();

  setup.perspCamera.aspect = aspect;
  setup.perspCamera.updateProjectionMatrix();

  setup.renderer.setSize(window.innerWidth, window.innerHeight);
}

