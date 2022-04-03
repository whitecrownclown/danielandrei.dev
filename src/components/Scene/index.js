import React, { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, Loader, OrbitControls, Stars } from '@react-three/drei';
import { HalfFloatType } from 'three';
import { EffectComposer, SelectiveBloom } from '@react-three/postprocessing';

import backgroundSound from '../../assets/background.mp3';

import ZoomIn from './zoom';
import Sound from './sound';

import Sun from './sun';

import Mercury from './mercury';
import Venus from './venus';

import Earth from './earth';
import Moon from './moon';

import Ship from './ship';

const containerStyles = { transform: 'scale(1.6)' };

export default function Scene() {
  const sunRef = useRef();
  const ambientLightRef = useRef();

  const [canUseControls, setCanUseControls] = useState(false);

  return (
    <Canvas
      camera={{ position: [0, 0, -1800], fov: 50, far: 1000 }}
      colorManagement={false}
      shadows={{ enabled: true }}
    >
      <ZoomIn enabled={!canUseControls} onEnd={setCanUseControls} />
      <OrbitControls enabled={canUseControls} />
      <ambientLight intensity={0.1} ref={ambientLightRef} />
      <Suspense
        fallback={
          <Html>
            <Loader containerStyles={containerStyles} />
          </Html>
        }
      >
        <Stars
          radius={100}
          depth={50}
          count={10000}
          factor={4}
          saturation={0}
          fade
        />
        <Sun ref={sunRef}>
          <Mercury />
          <Venus />
          <Earth>
            <Moon />
          </Earth>
        </Sun>
        <Ship />
        <Sound url={backgroundSound} />
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
