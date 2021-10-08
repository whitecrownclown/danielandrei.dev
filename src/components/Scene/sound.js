import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { useThree, useLoader } from '@react-three/fiber';

export default function Sound({ url }) {
  const sound = useRef();
  const { camera } = useThree();
  const [listener] = useState(() => new THREE.AudioListener());
  const buffer = useLoader(THREE.AudioLoader, url);

  useEffect(() => {
    sound.current.setBuffer(buffer);
    sound.current.setRefDistance(50);
    sound.current.setLoop(true);
    sound.current.setVolume(0.3);
    sound.current.play();
    camera.add(listener);
    return () => camera.remove(listener);
  }, []);
  return <positionalAudio ref={sound} args={[listener]} />;
}
