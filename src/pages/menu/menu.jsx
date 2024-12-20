import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { dataMenu } from '../../dataset/menu';
import { motion } from 'motion/react';

const Model = () => {
	const [menu, setMenu] = useState([]);

	useEffect(() => {
		setMenu(dataMenu);
	}, []);

	return (
		<motion.div
			initial={{ x: '-100vw', opacity: 0 }} // Mulai dari luar layar kiri
			animate={{ x: 0, opacity: 1 }} // Animasi bergerak ke tengah
			transition={{ duration: 1.2, ease: 'easeOut' }} // Durasi dan easing animasi
			className='container mx-auto px-4 py-12 max-w-4xl mt-[64px]'>
			<h1 className='text-3xl font-bold text-center text-gray-800 mb-10 tracking-tight'>Selamat Datang di Menu Kami</h1>

			<div className='grid md:grid-cols-2 gap-10 items-center'>
				{/* Image Section */}
				<div className='flex justify-center'>
					<img
						src='/keju.png'
						alt='Logo'
						className='w-64 h-64 object-cover rounded-lg shadow-md transition-transform hover:scale-105'
					/>
				</div>

				<div className='space-y-4'>
					{menu.map((menuItem) => (
						<Link key={menuItem.id} to={`/menu/${menuItem.id}`} className='block'>
							<div className='bg-gray-100 hover:bg-gray-200 rounded-lg p-4 flex flex-wrap items-center justify-between transition-colors'>
								<span className='text-lg font-medium text-gray-800'>{menuItem.nama}</span>
								{menuItem?.label && <span className='badge badge-secondary mt-2 sm:mt-0'>{menuItem.label}</span>}
							</div>
						</Link>
					))}
				</div>
			</div>

			{/* Coming Soon Section */}
			<div className='mt-16 text-center'>
				<h2 className='text-2xl font-semibold text-gray-700 mb-6'>Coming Soon</h2>
				<div className='flex justify-center'>
					<div className='relative w-80 h-80 rounded-lg overflow-hidden shadow-lg group'>
						<img
							src='/minuman.jpg'
							alt='Minuman'
							className='w-full h-full object-cover absolute inset-0 group-hover:scale-110 transition-transform duration-300'
						/>
						<div className='absolute inset-0 bg-black bg-opacity-30 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
							<div className='text-white'>
								<h3 className='text-xl font-bold mb-2'>Sesuatu yang Segar</h3>
								<p className='text-sm'>Nantikan segera sesuatu yang segar dari kami</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Model;
