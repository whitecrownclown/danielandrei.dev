import React, { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { HalfFloatType } from 'three';
import { EffectComposer, SelectiveBloom } from '@react-three/postprocessing';

import ZoomIn from './zoom';

import Sun from './sun';
import Earth from './earth';
import Moon from './moon';

export default function Scene() {
  const sunRef = useRef();
  const ambientLightRef = useRef();

  const [canUseControls, setCanUseControls] = useState(false);

  return (
    <Canvas
      camera={{ position: [0, 0, -3000], fov: 40, far: 10000 }}
      colorManagement={false}
      shadows={{ enabled: true }}
    >
      <ZoomIn enabled={!canUseControls} onEnd={setCanUseControls} />
      <OrbitControls enabled={canUseControls} />
      <ambientLight intensity={0.1} ref={ambientLightRef} />
      <Suspense fallback={null}>
        <Stars
          radius={100}
          depth={50}
          count={10000}
          factor={4}
          saturation={0}
          fade
        />
        <Sun ref={sunRef}>
          <Earth>
            <Moon />
          </Earth>
        </Sun>
        <EffectComposer frameBufferType={HalfFloatType}>
          <SelectiveBloom
            lights={[ambientLightRef]}
            selection={[sunRef]}
            selectionLayer={5}
            intensity={3.0}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.85}
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
