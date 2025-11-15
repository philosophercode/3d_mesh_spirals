import * as THREE from 'three';
import { Pane, FolderApi } from 'tweakpane';
import type { SpiralParams } from '../utils/types';
import { applyPreset } from './presets';
import { downloadPNG, downloadSVG, copyJSON, saveJSON, loadJSON } from '../export/svg';
import { exportSTL, exportOBJ, exportUSDZ, exportGLB } from '../export/3dFormats';

export interface ControlCallbacks {
  onParamsChange: (params: SpiralParams) => void;
  onProjectionChange: (projection: 'Orthographic' | 'Perspective') => void;
  onBackgroundChange: (color: string) => void;
  onGridChange: (show: boolean) => void;
  onLaserCutExport?: (params: SpiralParams) => void;
  onCameraReset?: () => void;
  onAutoRotateChange?: (enabled: boolean) => void;
  onLightingChange?: (ambient: number, directional: number) => void;
  onAxesChange?: (show: boolean) => void;
}

export function setupControls(
  params: SpiralParams,
  scene: THREE.Scene,
  gridHelper: THREE.GridHelper,
  renderer: THREE.WebGLRenderer,
  camera: THREE.Camera,
  meshGroup: THREE.Group,
  canvas: HTMLCanvasElement,
  callbacks: ControlCallbacks,
  orbitControls?: any,
  axesHelper?: THREE.AxesHelper
): Pane {
  const pane = new Pane({
    title: 'Controls',
    expanded: true,
  });

  // Geometry folder - Pane extends FolderApi, so it has addFolder
  const geoFolder = (pane as unknown as FolderApi).addFolder({ title: 'Geometry', expanded: true });
  geoFolder.addBinding(params, 'N', { min: 0.5, max: 6, step: 0.1, label: 'Turns' })
    .on('change', () => callbacks.onParamsChange(params));
  geoFolder.addBinding(params, 'R', { min: 0.1, max: 5, step: 0.05, label: 'Major radius' })
    .on('change', () => callbacks.onParamsChange(params));
  geoFolder.addBinding(params, 'r0', { min: 0.02, max: 1.5, step: 0.01, label: 'Start tube radius' })
    .on('change', () => callbacks.onParamsChange(params));

  // Decay folder
  const decayFolder = (pane as unknown as FolderApi).addFolder({ title: 'Decay', expanded: true });
  const decayTypeBinding = decayFolder.addBinding(params, 'mode', {
    options: { 'Exponential': 'Exponential', 'Linear': 'Linear' },
    label: 'Decay type'
  });
  
  const exponentialRateBinding = decayFolder.addBinding(params, 'k', { min: 0, max: 0.6, step: 0.01, label: 'Exponential rate' })
    .on('change', () => callbacks.onParamsChange(params));
  
  const linearRateBinding = decayFolder.addBinding(params, 'alpha', { min: 0, max: 0.2, step: 0.01, label: 'Linear rate' })
    .on('change', () => callbacks.onParamsChange(params));
  
  // Update visibility based on decay type
  const updateDecayVisibility = () => {
    const isExponential = params.mode === 'Exponential';
    exponentialRateBinding.hidden = !isExponential;
    linearRateBinding.hidden = isExponential;
  };
  
  decayTypeBinding.on('change', () => {
    updateDecayVisibility();
    callbacks.onParamsChange(params);
  });
  
  // Set initial visibility
  updateDecayVisibility();
  
  decayFolder.addBinding(params, 'rMin', { min: 0, max: 0.3, step: 0.005, label: 'Min tube radius' })
    .on('change', () => callbacks.onParamsChange(params));

  // Shape folder
  const shapeFolder = (pane as unknown as FolderApi).addFolder({ title: 'Shape', expanded: true });
  shapeFolder.addBinding(params, 'h', { min: -2, max: 2, step: 0.1, label: 'Axial rise' })
    .on('change', () => callbacks.onParamsChange(params));
  shapeFolder.addBinding(params, 'epsilon', { min: 0, max: 0.5, step: 0.01, label: 'Eccentricity' })
    .on('change', () => callbacks.onParamsChange(params));
  shapeFolder.addBinding(params, 'twist', { min: -2 * Math.PI, max: 2 * Math.PI, step: 0.1, label: 'Cross-section twist' })
    .on('change', () => callbacks.onParamsChange(params));
  shapeFolder.addBinding(params, 'wallThickness', { min: 0, max: 0.3, step: 0.01, label: 'Wall thickness' })
    .on('change', () => callbacks.onParamsChange(params));

  // Mesh folder
  const meshFolder = (pane as unknown as FolderApi).addFolder({ title: 'Mesh', expanded: true });
  meshFolder.addBinding(params, 'uDiv', { min: 16, max: 480, step: 8, label: 'U divisions' })
    .on('change', () => callbacks.onParamsChange(params));
  meshFolder.addBinding(params, 'vDiv', { min: 16, max: 160, step: 4, label: 'V divisions' })
    .on('change', () => callbacks.onParamsChange(params));

  // Rendering folder
  const renderFolder = (pane as unknown as FolderApi).addFolder({ title: 'Rendering', expanded: true });
  renderFolder.addBinding(params, 'projection', {
    options: { 'Orthographic': 'Orthographic', 'Perspective': 'Perspective' },
    label: 'Projection'
  }).on('change', (ev: any) => {
    callbacks.onProjectionChange(ev.value as 'Orthographic' | 'Perspective');
  });
  renderFolder.addBinding(params, 'renderStyle', {
    options: { 'Wireframe': 'Wireframe', 'Hidden-line': 'Hidden-line', 'Solid': 'Solid' },
    label: 'Render style'
  }).on('change', () => callbacks.onParamsChange(params));
  renderFolder.addBinding(params, 'showMeridians', { label: 'Show meridians' })
    .on('change', () => callbacks.onParamsChange(params));
  renderFolder.addBinding(params, 'showParallels', { label: 'Show parallels' })
    .on('change', () => callbacks.onParamsChange(params));
  renderFolder.addBinding(params, 'showInnerSurface', { label: 'Show inner surface' })
    .on('change', () => callbacks.onParamsChange(params));
  renderFolder.addBinding(params, 'occludeInner', { label: 'Occlude inner mesh' })
    .on('change', () => callbacks.onParamsChange(params));
  renderFolder.addBinding(params, 'outerColor', { label: 'Outer color' })
    .on('change', () => callbacks.onParamsChange(params));
  renderFolder.addBinding(params, 'innerColor', { label: 'Inner color' })
    .on('change', () => callbacks.onParamsChange(params));
  renderFolder.addBinding(params, 'backgroundColor', { label: 'Background' })
    .on('change', (ev: any) => {
      callbacks.onBackgroundChange(ev.value);
    });
  renderFolder.addBinding(params, 'showGrid', { label: 'Show grid' })
    .on('change', (ev: any) => {
      callbacks.onGridChange(ev.value);
    });

  // Texture folder
  const textureFolder = (pane as unknown as FolderApi).addFolder({ title: 'Texture' });
  
  // Initialize texture parameters if not present
  if (!params.textureRepeat) {
    params.textureRepeat = { u: 1, v: 1 };
  }
  if (!params.textureOffset) {
    params.textureOffset = { u: 0, v: 0 };
  }
  
  textureFolder.addButton({ title: 'Load Image' }).on('click', () => {
    console.log('Load Image button clicked');
    
    // Create file input
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.style.position = 'fixed';
    input.style.top = '-1000px';
    input.style.left = '-1000px';
    
    const handleFileSelect = (e: Event) => {
      console.log('File input changed');
      const target = e.target as HTMLInputElement;
      const file = target.files?.[0];
      
      if (!file) {
        console.log('No file selected');
        document.body.removeChild(input);
        return;
      }
      
      console.log('File selected:', file.name, file.type, file.size);
      
      const reader = new FileReader();
      
      reader.onerror = (error) => {
        console.error('FileReader error:', error);
        alert('Error reading image file');
        document.body.removeChild(input);
      };
      
      reader.onload = (event: ProgressEvent<FileReader>) => {
        const result = event.target?.result;
        if (typeof result === 'string') {
          console.log('File read successfully, data URL length:', result.length);
          params.textureImage = result;
          console.log('Setting textureImage, calling onParamsChange');
          console.log('Current renderStyle:', params.renderStyle);
          if (params.renderStyle !== 'Solid') {
            console.warn('⚠️ Texture loaded but renderStyle is not "Solid". Switch to "Solid" mode to see the texture.');
          }
          callbacks.onParamsChange(params);
          console.log('Texture should now be applied');
        } else {
          console.error('FileReader result is not a string');
        }
        document.body.removeChild(input);
      };
      
      reader.readAsDataURL(file);
    };
    
    input.addEventListener('change', handleFileSelect);
    input.addEventListener('cancel', () => {
      console.log('File selection cancelled');
      document.body.removeChild(input);
    });
    
    document.body.appendChild(input);
    console.log('Triggering file input click');
    input.click();
  });
  
  textureFolder.addButton({ title: 'Remove Texture' }).on('click', () => {
    params.textureImage = undefined;
    callbacks.onParamsChange(params);
    console.log('Texture removed');
  });
  
  // Add indicator for texture status
  const textureStatusObj = { hasTexture: params.textureImage ? 'Yes' : 'No' };
  const textureStatusBinding = textureFolder.addBinding(
    textureStatusObj,
    'hasTexture',
    { label: 'Texture loaded', readonly: true }
  );
  
  // Update texture status when params change
  const originalOnParamsChange = callbacks.onParamsChange;
  callbacks.onParamsChange = (updatedParams: SpiralParams) => {
    const hasTexture = !!updatedParams.textureImage;
    textureStatusObj.hasTexture = hasTexture ? 'Yes' : 'No';
    // Force refresh of the binding
    if (textureStatusBinding && 'refresh' in textureStatusBinding) {
      (textureStatusBinding as any).refresh();
    }
    console.log('Updating texture status:', hasTexture, 'textureImage length:', updatedParams.textureImage?.length || 0);
    originalOnParamsChange(updatedParams);
  };
  
  textureFolder.addBinding(params.textureRepeat, 'u', { min: 0.1, max: 10, step: 0.1, label: 'Repeat U' })
    .on('change', () => callbacks.onParamsChange(params));
  textureFolder.addBinding(params.textureRepeat, 'v', { min: 0.1, max: 10, step: 0.1, label: 'Repeat V' })
    .on('change', () => callbacks.onParamsChange(params));
  textureFolder.addBinding(params.textureOffset, 'u', { min: -1, max: 1, step: 0.01, label: 'Offset U' })
    .on('change', () => callbacks.onParamsChange(params));
  textureFolder.addBinding(params.textureOffset, 'v', { min: -1, max: 1, step: 0.01, label: 'Offset V' })
    .on('change', () => callbacks.onParamsChange(params));

  // Camera/View folder
  const cameraFolder = (pane as unknown as FolderApi).addFolder({ title: 'Views' });
  if (orbitControls) {
    cameraFolder.addBinding(params, 'autoRotate', { label: 'Auto Rotate' })
      .on('change', (ev: any) => {
        if (orbitControls) orbitControls.autoRotate = ev.value;
        if (callbacks.onAutoRotateChange) callbacks.onAutoRotateChange(ev.value);
      });
    cameraFolder.addBinding(orbitControls, 'autoRotateSpeed', { min: 0.1, max: 5, step: 0.1, label: 'Rotate Speed' });
  }
  if (camera instanceof THREE.PerspectiveCamera) {
    cameraFolder.addBinding(params, 'fov', { min: 10, max: 120, step: 1, label: 'Field of View' })
      .on('change', (ev: any) => {
        if (camera instanceof THREE.PerspectiveCamera) {
          camera.fov = ev.value;
          camera.updateProjectionMatrix();
        }
      });
  }
  if (camera instanceof THREE.OrthographicCamera) {
    cameraFolder.addBinding(params, 'orthoSize', { min: 1, max: 10, step: 0.1, label: 'Ortho Size' })
      .on('change', (ev: any) => {
        if (camera instanceof THREE.OrthographicCamera) {
          const aspect = window.innerWidth / window.innerHeight;
          camera.left = -ev.value * aspect;
          camera.right = ev.value * aspect;
          camera.top = ev.value;
          camera.bottom = -ev.value;
          camera.updateProjectionMatrix();
        }
      });
  }
  
  // View presets as toggle buttons
  const viewOptions = [
    { title: 'Front', position: [0, 0, 5] },
    { title: 'Side', position: [5, 0, 0] },
    { title: 'Top', position: [0, 5, 0] },
    { title: 'Isometric', position: [5, 4, 5] }
  ];
  
  viewOptions.forEach(view => {
    cameraFolder.addButton({ title: view.title }).on('click', () => {
      if (orbitControls) {
        orbitControls.target.set(0, 0, 0);
        camera.position.set(view.position[0], view.position[1], view.position[2]);
        orbitControls.update();
      }
    });
  });
  
  if (orbitControls) {
    cameraFolder.addButton({ title: 'Reset Camera' }).on('click', () => {
      if (callbacks.onCameraReset) {
        callbacks.onCameraReset();
      } else {
        orbitControls.reset();
      }
    });
  }


  // Visualization folder
  const vizFolder = (pane as unknown as FolderApi).addFolder({ title: 'Visualization' });
  if (axesHelper) {
    vizFolder.addBinding(params, 'showAxes', { label: 'Show Axes' })
      .on('change', (ev: any) => {
        if (axesHelper) axesHelper.visible = ev.value;
        if (callbacks.onAxesChange) callbacks.onAxesChange(ev.value);
      });
  }

  // Cross-section folder
  const crossSectionFolder = (pane as unknown as FolderApi).addFolder({ title: 'Cross-Section' });
  crossSectionFolder.addBinding(params, 'showCrossSection', { label: 'Show cross-section' })
    .on('change', () => callbacks.onParamsChange(params));
  crossSectionFolder.addBinding(params, 'crossSectionSpokes', { min: 4, max: 48, step: 1, label: 'Radial spokes' })
    .on('change', () => callbacks.onParamsChange(params));
  crossSectionFolder.addBinding(params, 'crossSectionCircles', { min: 0, max: 8, step: 1, label: 'Concentric circles' })
    .on('change', () => callbacks.onParamsChange(params));
  crossSectionFolder.addBinding(params, 'crossSectionColor', { label: 'Color' })
    .on('change', () => callbacks.onParamsChange(params));

  // Presets folder
  const presetsFolder = (pane as unknown as FolderApi).addFolder({ title: 'Presets' });
  presetsFolder.addButton({ title: 'Denes Original' }).on('click', () => {
    applyPreset('denesOriginal', params, scene, gridHelper, callbacks.onParamsChange, callbacks.onProjectionChange);
  });
  presetsFolder.addButton({ title: 'Denes-like' }).on('click', () => {
    applyPreset('denes', params, scene, gridHelper, callbacks.onParamsChange, callbacks.onProjectionChange);
  });
  presetsFolder.addButton({ title: 'Snail tight' }).on('click', () => {
    applyPreset('snail', params, scene, gridHelper, callbacks.onParamsChange, callbacks.onProjectionChange);
  });
  presetsFolder.addButton({ title: 'Wide torus' }).on('click', () => {
    applyPreset('wide', params, scene, gridHelper, callbacks.onParamsChange, callbacks.onProjectionChange);
  });
  presetsFolder.addButton({ title: 'Flat coil' }).on('click', () => {
    applyPreset('flat', params, scene, gridHelper, callbacks.onParamsChange, callbacks.onProjectionChange);
  });

  // Export folder
  const exportFolder = (pane as unknown as FolderApi).addFolder({ title: 'Export' });
  
  // 2D/Screenshot exports
  exportFolder.addButton({ title: 'PNG Screenshot' }).on('click', () => {
    downloadPNG(renderer, scene, camera, canvas);
  });
  exportFolder.addButton({ title: 'SVG Wireframe' }).on('click', () => {
    downloadSVG(renderer, scene, camera, meshGroup, params);
  });
  
  // 3D Model exports
  exportFolder.addButton({ title: 'STL (Binary)' }).on('click', () => {
    exportSTL(meshGroup);
  });
  exportFolder.addButton({ title: 'OBJ Model' }).on('click', () => {
    exportOBJ(meshGroup);
  });
  exportFolder.addButton({ title: 'USDZ (Apple AR)' }).on('click', async () => {
    await exportUSDZ(meshGroup);
  });
  exportFolder.addButton({ title: 'GLB Model' }).on('click', async () => {
    await exportGLB(meshGroup);
  });
  
  // Settings/Config exports
  exportFolder.addButton({ title: 'Copy JSON Config' }).on('click', () => {
    copyJSON(params, camera, orbitControls);
    alert('Configuration copied to clipboard!');
  });
  exportFolder.addButton({ title: 'Save JSON Config' }).on('click', () => {
    saveJSON(params, camera, orbitControls);
  });
  exportFolder.addButton({ title: 'Load JSON Config' }).on('click', () => {
    loadJSON({
      onParamsLoad: (loaded) => {
        Object.assign(params, loaded);
        callbacks.onParamsChange(params);
        if (loaded.projection) {
          callbacks.onProjectionChange(loaded.projection);
        }
        if (loaded.backgroundColor) {
          callbacks.onBackgroundChange(loaded.backgroundColor);
        }
        if (loaded.showGrid !== undefined) {
          callbacks.onGridChange(loaded.showGrid);
        }
      },
      onCameraLoad: (cameraData) => {
        if (cameraData.position && orbitControls) {
          camera.position.set(cameraData.position.x, cameraData.position.y, cameraData.position.z);
        }
        if (cameraData.target && orbitControls) {
          orbitControls.target.set(cameraData.target.x, cameraData.target.y, cameraData.target.z);
        }
        if (cameraData.fov && camera instanceof THREE.PerspectiveCamera) {
          camera.fov = cameraData.fov;
          camera.updateProjectionMatrix();
        }
        if (cameraData.orthoSize && camera instanceof THREE.OrthographicCamera) {
          const aspect = window.innerWidth / window.innerHeight;
          camera.left = -cameraData.orthoSize * aspect;
          camera.right = cameraData.orthoSize * aspect;
          camera.top = cameraData.orthoSize;
          camera.bottom = -cameraData.orthoSize;
          camera.updateProjectionMatrix();
        }
        if (orbitControls) {
          orbitControls.update();
        }
      }
    });
  });


  return pane;
}
