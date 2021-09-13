import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { EffectComposer, SelectiveBloom } from '@react-three/postprocessing';

import ZoomIn from './zoom';

import Sun from './sun';
import Earth from './earth';
import Moon from './moon';

export default function Scene() {
  const sunRef = useRef();
  const ambientLightRef = useRef();

  return (
    <Canvas
      camera={{ position: [0, -30, -3000], fov: 40, far: 10000 }}
      colorManagement={false}
    >
      <ZoomIn />
      <OrbitControls />
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
        <EffectComposer>
          <SelectiveBloom
            lights={[ambientLightRef]}
            selection={[sunRef]}
            selectionLayer={5}
            intensity={4.0}
            luminanceThreshold={0.25}
            luminanceSmoothing={0.5}
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
