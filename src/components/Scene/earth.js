import React, { useRef } from 'react';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import earthImg from '../../assets/images/earth.jpg';
import bumpImg from '../../assets/images/bump.jpg';

export default function Earth({ children }) {
  const [earth, bump] = useTexture([earthImg, bumpImg]);
  const ref = useRef();
  const earthRef = useRef();

  useFrame(() => {
    earthRef.current.rotation.y += 0.01;
  });

  return (
    <group ref={ref} position={[24, 0, 0]}>
      <mesh ref={earthRef} castShadow receiveShadow>
        <sphereBufferGeometry attach="geometry" args={[1, 64, 64]} />
        <meshStandardMaterial attach="material" map={earth} />
        <meshStandardMaterial
          attach="material"
          map={earth}
          bumpMap={bump}
          bumpScale={0.05}
        />
        {children}
      </mesh>
    </group>
  );
}
