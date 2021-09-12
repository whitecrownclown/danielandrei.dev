import { useFrame } from '@react-three/fiber';

export default function ZoomIn() {
  const vec = { x: 0, y: 10, z: -50 };
  return useFrame(({ camera }) => camera.position.lerp(vec, 0.02));
}
