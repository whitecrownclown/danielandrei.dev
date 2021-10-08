import React, { useRef } from 'react';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import moonMap from '../../assets/images/moonmap.jpg';
import moonBump from '../../assets/images/moonbump.jpg';

export default function Moon() {
  const ref = useRef();
  const [texture, bump] = useTexture([moonMap, moonBump]);

  useFrame(() => {
    ref.current.rotation.y += 0.0005;
  });

  return (
    <mesh position={[0, 0, 4]} ref={ref} castShadow receiveShadow>
      <sphereBufferGeometry attach="geometry" args={[0.3, 32, 32]} />
      <meshStandardMaterial
        attach="material"
        map={texture}
        bumpMap={bump}
        bumpScale={0.2}
      />
    </mesh>
  );
}
