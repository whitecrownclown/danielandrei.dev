import React, { useRef } from 'react';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import sun from '../../assets/images/sun.jpg';

export default function Sun({ children }) {
  const texture = useTexture(sun);
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.0015;
  });

  return (
    <mesh position={[0, 0, 0]} ref={ref}>
      <pointLight // Sunlight
        intensity={2}
        position={[0, 0, 0]}
        width={5}
        height={5}
      />
      <sphereBufferGeometry attach="geometry" args={[3, 256, 256]} />
      <meshLambertMaterial
        emissive="#FCD440"
        emissiveIntensity={2}
        attach="material"
        emissiveMap={texture}
      />
      {children}
    </mesh>
  );
}
