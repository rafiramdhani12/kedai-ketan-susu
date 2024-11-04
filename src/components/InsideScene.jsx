/* eslint-disable react/no-unknown-property */
import { OrbitControls, Environment } from "@react-three/drei";
import { InsideModel } from "./InsideModel"; // Pastikan path ini benar

export const InsideScene = () => {
  return (
    <>
      {/* Pencahayaan untuk suasana yang lebih baik */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />

      {/* Memuat model interior restoran */}
      <InsideModel position={[0, 0, 0]} scale={1} />

      {/* Kontrol kamera */}
      <OrbitControls
        enablePan={true}
        autoRotate={false}
        maxPolarAngle={Math.PI / 2.2} // Batasi sudut pandang vertikal
        minPolarAngle={Math.PI / 4} // Menyesuaikan sudut pandang agar lebih tinggi
        target={[0, 1, 0]} // Mengatur target untuk fokus pada menu
        maxDistance={4} // Jarak maksimum kamera dari objek
        minDistance={2} // Jarak minimum kamera
      />

      {/* Mengatur posisi kamera */}
      <perspectiveCamera
        position={[0, 1.5, 3]} // Posisi kamera di depan menu
        fov={75}
        near={0.1}
        far={1000}
        up={[0, 1, 0]} // Memastikan orientasi yang benar
      />

      {/* Lingkungan untuk suasana */}
      <Environment preset="city" background blur={0.5} />
    </>
  );
};
