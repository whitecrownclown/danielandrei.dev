import { useFrame } from '@react-three/fiber';

export default function ZoomIn({ enabled, onEnd }) {
  const vec = { x: 0, y: 0, z: -70 };

  return useFrame(({ camera }) => {
    if (Math.round(camera.position.z) === vec.z) {
      onEnd(true);
    }

    if (!enabled) return;

    camera.position.lerp(vec, 0.03);
  });
}
