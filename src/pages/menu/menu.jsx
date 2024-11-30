import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { dataMenu } from '../../dataset/menu';
import { Link } from 'react-router-dom';
const Menu = () => {
	const [menu, setMenu] = useState([]);
	useEffect(() => {
		setMenu(dataMenu);
	}, []);

	return (
		<div className='flex justify-center items-center h-auto min-h-screen bg-gray-100 mt-[64px]'>
			<div className='w-[90%] max-w-4xl bg-white rounded-lg shadow-lg p-8 m-4 border border-gray-300 overflow-auto'>
				<h2 className='text-2xl font-bold mb-4 text-gray-700 text-center'>Ini adalah menu kami</h2>
				<div className='flex flex-wrap justify-center gap-4'>
					{menu.length > 0 ? (
						menu.map((m) => (
							<Link key={m.id} to={`/menu/${m.id}`}>
								<div className='card bg-base-100 w-80 shadow-xl'>
									<figure>
										<img width={500} height={500} src={m.img} alt={m.nama} className='object-cover h-48 w-full' />
									</figure>
									<div className='card-body'>
										<h2 className='card-title'>
											{m.nama}
											{m?.label && <div className='badge badge-secondary'>{m.label}</div>}
										</h2>
										<p>{m.deskripsi}</p>
										<p className='text-lg font-semibold'>Rp {m.harga}K</p>
										<div className='card-actions justify-end'>
											<div className='flex justify-end'>
												<p className='text-4xl'>{m.rating}</p>
												<p className='text-4xl'>
													<Star color='#e0fe01' size={36} />
												</p>
											</div>
										</div>
									</div>
								</div>
							</Link>
						))
					) : (
						<p className='text-gray-500'>Menu tidak tersedia</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default Menu;
