import React, { forwardRef } from 'react';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import sun from '../../assets/images/sun.jpg';

const Sun = forwardRef(({ children }, ref) => {
  const texture = useTexture(sun);

  useFrame(() => {
    ref.current.rotation.y += 0.0015;
  });

  return (
    <mesh position={[0, 0, 0]} ref={ref}>
      <pointLight // Sunlight
        intensity={2}
        position={[0, 0, 0]}
        decay={2}
        castShadow
      />
      <sphereBufferGeometry attach="geometry" args={[4, 256, 256]} />
      <meshLambertMaterial
        emissive="#FCD440"
        emissiveIntensity={2}
        attach="material"
        emissiveMap={texture}
      />
      {children}
    </mesh>
  );
});

Sun.displayName = 'Sun';

export default Sun;
