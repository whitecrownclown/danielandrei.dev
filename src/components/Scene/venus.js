import React, { useRef } from 'react';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import venusImg from '../../assets/images/venusmap.jpg';
import venusBump from '../../assets/images/venusbump.jpg';

export default function Venius({ children }) {
  const [venus, bump] = useTexture([venusImg, venusBump]);
  const ref = useRef();
  const venusRef = useRef();

  useFrame(() => {
    venusRef.current.rotation.y += 0.015;
  });

  return (
    <group ref={ref} position={[15, 0, -12]} scale={0.5}>
      <mesh ref={venusRef} castShadow receiveShadow>
        <sphereBufferGeometry attach="geometry" args={[1, 64, 64]} />
        <meshStandardMaterial attach="material" map={venus} />
        <meshStandardMaterial
          attach="material"
          map={venus}
          bumpMap={bump}
          bumpScale={0.05}
        />
        {children}
      </mesh>
    </group>
  );
}
