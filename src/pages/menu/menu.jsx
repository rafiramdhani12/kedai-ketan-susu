/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { InsideScene } from "../../components/InsideScene.jsx";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { dataMenu } from "../../dataset/menu";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setMenu(dataMenu);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : menu.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < menu.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="w-full h-screen relative">
      {/* Canvas 3D */}
      <Canvas camera={{ position: [0, 1.6, 0], fov: 70 }}>
        <color attach="background" args={["#f0f0f0"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <InsideScene />

        {/* Render menu panels dalam lingkaran */}

        <OrbitControls
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          maxDistance={7}
          minDistance={2}
        />
      </Canvas>

      {/* Menu yang Bisa Digeser */}
      <div className="absolute bottom-20 left-0 w-full px-4">
        <div className="relative max-w-4xl mx-auto bg-white/90 rounded-lg p-4 shadow-lg">
          {/* Tombol Navigasi */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-6 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-6 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Kartu Menu */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {menu.map((item) => (
                <Link
                  key={item.id}
                  to={`/menu/${item.id}`}
                  className="flex-shrink-0 w-full"
                >
                  <div className="bg-white rounded-lg shadow p-4 m-2">
                    <h3 className="font-bold text-xl mb-2">{item.nama}</h3>
                    <p className="text-gray-600">Rp {item.harga}K</p>
                    <p className="text-yellow-500">⭐ {item.rating}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Instruksi */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center bg-black/50 px-4 py-2 rounded-full">
        Gunakan mouse untuk melihat sekeliling
      </div>
    </div>
  );
};

export default Menu;
