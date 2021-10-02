import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import shipGLTF from '../../assets/ship.gltf';

export default function Ship() {
  const ref = useRef();
  const { scene } = useGLTF(shipGLTF);

  useEffect(() => {
    ref.current.rotation.y = 0;
    ref.current.rotation.x = -0.4;
  }, []);

  useFrame(() => {
    ref.current.position.x += 0.02;
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      position={[-10, -6, -8]}
      dispose={null}
      scale={1}
    />
  );
}
