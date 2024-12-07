import { motion } from 'framer-motion'; // Pastikan impor ini benar
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<section
			className="h-screen mx-auto px-4 py-20 text-center bg-[url('/ketanOreo.jpg')] bg-center bg-no-repeat bg-cover"
			style={{
				backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/ketanOreo.jpg')",
			}}>
			{/* Div dengan animasi bergerak dari kiri ke tengah */}
			<motion.div
				initial={{ x: '-100vw', opacity: 0 }} // Mulai dari luar layar kiri
				animate={{ x: 0, opacity: 1 }} // Animasi bergerak ke tengah
				transition={{ duration: 1.2, ease: 'easeOut' }} // Durasi dan easing animasi
				className='bg-black/60 backdrop-blur-sm rounded-xl p-10 max-w-2xl mx-auto mt-20 md:mt-10 xl:mt-32'>
				<h1 className='text-5xl font-extrabold text-amber-300 mb-6'>Kelezatan Tradisional</h1>
				<p className='text-white text-xl mb-8'>Nikmati kelembutan ketan susu kami yang dibuat dengan resep warisan</p>
				<Link to={'/menu'}>
					<button className='bg-amber-400 text-black px-8 py-3 rounded-full hover:bg-amber-500 transition transform hover:scale-105'>
						Pesan Sekarang
					</button>
				</Link>
			</motion.div>
		</section>
	);
};

export default Home;
