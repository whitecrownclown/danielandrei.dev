import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

import ZoomIn from './zoom';

import Sun from './sun';
import Earth from './earth';
import Moon from './moon';

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, -30, -3000], fov: 40, far: 10000 }}
      colorManagement={false}
    >
      <ZoomIn />
      <OrbitControls />
      <ambientLight intensity={0.1} />
      <Suspense fallback={null}>
        <Stars count={10000} />
        <Sun>
          <Earth>
            <Moon />
          </Earth>
        </Sun>
      </Suspense>
    </Canvas>
  );
}
