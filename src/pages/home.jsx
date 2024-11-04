import { Link } from "react-router-dom";
import { Scene } from "../components/Scene";

const Home = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Bagian Kiri: Teks dan Tombol */}
      <div className="absolute left-0 w-1/2 h-full flex justify-center items-center z-10 pointer-events-none">
        <div className="max-w-md p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg pointer-events-auto">
          <h2 className="text-4xl font-bold mb-6 text-white/90 text-center">
            kedai ketan susu
          </h2>
          <p className="text-white/80 text-lg font-medium mb-8 text-center">
            Selamat datang di website kami ketan susu (k&2)
          </p>
          <div className="text-center">
            <Link
              to="/menu"
              className="inline-block text-white bg-blue-500 hover:bg-white/30 px-8 py-3 rounded-lg transition-all duration-300 text-lg font-semibold backdrop-blur-sm border border-white/20"
            >
              Ke sini
            </Link>
          </div>
        </div>
      </div>

      {/* Background 3D mengisi seluruh layar */}
      <div className="w-full h-full">
        <Scene />
      </div>
    </div>
  );
};

export default Home;
