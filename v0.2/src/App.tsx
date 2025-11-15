import { useState } from 'react';
import * as THREE from 'three';
import { Canvas } from './components/Canvas';
import { Controls } from './components/Controls';
import { defaultParams } from './utils/params';
import type { SpiralParams } from './utils/types';
import type { SceneSetup } from './rendering/scene';

export function App() {
  const [params, setParams] = useState<SpiralParams>(defaultParams);
  const [sceneSetup, setSceneSetup] = useState<SceneSetup | null>(null);
  const [meshGroup, setMeshGroup] = useState<THREE.Group | null>(null);

  const handleSceneReady = (setup: SceneSetup, group: THREE.Group) => {
    setSceneSetup(setup);
    setMeshGroup(group);
  };

  return (
    <>
      <Canvas params={params} onSceneReady={handleSceneReady} />
      <Controls params={params} onParamsChange={setParams} sceneSetup={sceneSetup} meshGroup={meshGroup} />
    </>
  );
}

