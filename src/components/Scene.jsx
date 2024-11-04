/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Model } from "./Model";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

// Komponen untuk mengatur rotasi model
const RotatingModel = (props) => {
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      // Putar model secara perlahan pada sumbu Y (rotasi 360)
      modelRef.current.rotation.y += 0.005; // Sesuaikan kecepatan rotasi di sini
    }
  });

  return <Model ref={modelRef} {...props} />;
};

export const Scene = () => {
  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ position: [2, 2, 5], fov: 50 }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <RotatingModel position={[0, -1, 0]} scale={0.7} />
      <OrbitControls enablePan={false} autoRotate={true} autoRotateSpeed={2} />
      <Environment preset="city" background blur={0.5} />
    </Canvas>
  );
};
