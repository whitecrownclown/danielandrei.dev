import React, { Suspense, useMemo, useRef } from 'react';
import { hot } from 'react-hot-loader';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';

import earthImg from './assets/images/earth.jpg';
import bumpImg from './assets/images/bump.jpg';

import sunImg from './assets/images/sun.jpg';

import moonImg from './assets/images/moon.jpg';
import moonBump from './assets/images/moon_bump.jpg';

import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

function Stars({ count = 5000 }) {
  const positions = useMemo(() => {
    let positions = [];
    for (let i = 0; i < count; i++) {
      const r = 4000;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const x =
        r * Math.cos(theta) * Math.sin(phi) + (-2000 + Math.random() * 4000);
      const y =
        r * Math.sin(theta) * Math.sin(phi) + (-2000 + Math.random() * 4000);
      const z = r * Math.cos(phi) + (-1000 + Math.random() * 2000);
      positions.push(x, y, z);
    }
    return new Float32Array(positions);
  }, [count]);
  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={['attributes', 'position']}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={12.5}
        sizeAttenuation
        color="white"
        fog={false}
      />
    </points>
  );
}

const Sun = ({ children }) => {
  const texture = useTexture(sunImg);
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
};

const Earth = ({ children }) => {
  const [earth, bump] = useTexture([earthImg, bumpImg]);
  const ref = useRef();
  const earthRef = useRef();

  useFrame(() => {
    earthRef.current.rotation.y += 0.01;
  });

  return (
    <group ref={ref} position={[24, 0, 0]}>
      <mesh ref={earthRef}>
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
};

const Moon = () => {
  const ref = useRef();
  const [texture, bump] = useTexture([moonImg, moonBump]);

  useFrame(() => {
    ref.current.rotation.y += 0.0005;
  });

  return (
    <mesh position={[0, 0.5, 4]} ref={ref}>
      <sphereBufferGeometry attach="geometry" args={[0.4, 64, 64]} />
      <meshStandardMaterial attach="material" map={texture} bumpMap={bump} bumpScale={0.2} />
    </mesh>
  );
};

function ZoomIn() {
  const vec = { x: 0, y: 10, z: -50 };
  return useFrame(({ camera }) => camera.position.lerp(vec, 0.02));
}

const App = () => {
  return (
    <div id="canvas-container">
      <Header />
      <Canvas
        camera={{ position: [0, -30, -10000], fov: 40, far: 10000 }}
        colorManagement={false}
      >
        <ZoomIn />
        <OrbitControls />
        <ambientLight intensity={0.1} />
        <Suspense fallback={null}>
          <Stars />
          <Sun>
            <Earth>
              <Moon />
            </Earth>
          </Sun>
        </Suspense>
      </Canvas>
      <Footer />
    </div>
  );
};

export default hot(module)(App);
