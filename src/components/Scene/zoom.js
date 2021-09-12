import { useFrame } from '@react-three/fiber';

export default function ZoomIn() {
  const vec = { x: -20, y: 30, z: -70 };
  return useFrame(({ camera }) => camera.position.lerp(vec, 0.02));
}
