import React, { useRef } from 'react';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import mercuryImg from '../../assets/images/mercurymap.jpg';
import mercuryBump from '../../assets/images/mercurybump.jpg';

export default function Mercury({ children }) {
  const [mercury, bump] = useTexture([mercuryImg, mercuryBump]);
  const ref = useRef();
  const mercuryRef = useRef();

  useFrame(() => {
    mercuryRef.current.rotation.y += 0.005;
  });

  return (
    <group ref={ref} position={[8, 0, 5]} scale={0.5}>
      <mesh ref={mercuryRef} castShadow receiveShadow>
        <sphereBufferGeometry attach="geometry" args={[1, 64, 64]} />
        <meshStandardMaterial attach="material" map={mercury} />
        <meshStandardMaterial
          attach="material"
          map={mercury}
          bumpMap={bump}
          bumpScale={0.05}
        />
        {children}
      </mesh>
    </group>
  );
}
