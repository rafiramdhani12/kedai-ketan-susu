/* eslint-disable react/prop-types */
import { dataMenu } from '../../dataset/menu';

import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const DetailMenu = () => {
	const { id } = useParams();
	const menuItem = dataMenu.find((item) => item.id === Number(id));

	const toppingPrice = {
		keju: 2,
		oreo: 2,
		matcha: 2,
		choco: 2,
	};

	const [selecTopping, setSelectTopping] = useState(new Set());
	const [buyerName, setBuyerName] = useState('');
	const [message, setMessage] = useState('');
	const [address, setAddress] = useState('');

	// ! menghitung total harga
	const hitungHarga = () => {
		let total = menuItem.harga;
		selecTopping.forEach((topping) => {
			total += toppingPrice[topping];
		});
		return total;
	};

	const handleCheckbox = (topping) => {
		setSelectTopping((prev) => {
			const newSelected = new Set(prev);
			if (newSelected.has(topping)) {
				newSelected.delete(topping);
			} else {
				newSelected.add(topping);
			}
			return newSelected;
		});
	};

	const handlePayment = () => {
		const waNum = '+6281289618423';

		// ! kumpulkan topping yg dipilih
		const selectedTopping = Array.from(selecTopping)
			.map((topping) => topping)
			.join(',');

		const encodeMessage = encodeURIComponent(
			`Menu makanan yang kamu beli: ${
				menuItem.nama
			}\nHarga: Rp ${hitungHarga()}K\nNama pembeli: ${buyerName}\nPesan: ${message}\nAlamat: ${address}\n topping yg ditambahkan ${selectedTopping}`
		);
		const whatssapLink = `https://wa.me/${waNum}?text=${encodeMessage}`;

		window.open(whatssapLink, '_blank');
	};

	if (!menuItem) {
		return <p>menu tidak ditemukan</p>;
	}

	return (
		<>
			<div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8 mt-[64px]'>
				<div className='max-w-7xl mx-auto'>
					<div className='bg-white rounded-2xl shadow-xl overflow-hidden'>
						<div className='flex flex-col md:flex-row'>
							{/* Image Section - Full width on mobile, left side on desktop */}
							<div className='md:w-1/3'>
								<div className='relative h-auto md:h-[300px] lg:h-full'>
									<img
										src={menuItem.img}
										alt={menuItem.nama}
										width={150}
										height={150}
										className='w-[350px] h-[350px] md:w-full md:h-full object-cover rounded-lg'
									/>
								</div>
							</div>

							{/* Content Section - Stacked on mobile, right side on desktop */}
							<div className='md:w-1/2 p-6 md:p-8 flex flex-col md:ms-60'>
								<div className='flex-grow'>
									<h1 className='text-3xl font-bold text-gray-900 mb-4'>{menuItem.nama}</h1>
									<p className='text-gray-600 text-lg mb-6 leading-relaxed'>{menuItem.deskripsi}</p>
									<div className='bg-gray-50 rounded-xl p-4 mb-6 flex justify-between'>
										<p className='text-2xl font-bold text-gray-900'>Rp {menuItem.harga}K</p>
										<p className='text-xl font-bold text-gray-900'>rating {menuItem.rating}⭐</p>
									</div>
								</div>

								<div className='flex justify-end items-center gap-4'>
									<Link to='/menu'>
										<button className='px-6 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700 font-medium'>
											Kembali
										</button>
									</Link>
									<button
										onClick={() => document.getElementById('my-modal').showModal()}
										className='px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors text-white font-medium'>
										Beli Sekarang
									</button>
								</div>
							</div>
						</div>
					</div>

					{/* Modal - Centered on all screens */}
					<dialog id='my-modal' className='modal'>
						<div className='modal-box max-w-md bg-white rounded-2xl p-6'>
							<h3 className='text-2xl font-bold text-gray-900 mb-4'>Menu makanan yang kamu beli: {menuItem.nama}</h3>
							<p className='text-lg text-gray-600 mb-6'>Harga: Rp {hitungHarga()}K</p>

							<div className='space-y-4'>
								<input
									type='text'
									placeholder='Masukan nama pembeli'
									value={buyerName}
									onChange={(e) => setBuyerName(e.target.value)}
									className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
								/>
								<input
									type='text'
									placeholder='Tambahkan pesan jika ingin ada tambahan sesuatu'
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
								/>

								<input
									type='text'
									placeholder='Tambahkan alamat pemesanan'
									value={address}
									onChange={(e) => setAddress(e.target.value)}
									className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
								/>
								<details className='dropdown'>
									<summary className='btn m-1'>pilih topping tambahan</summary>
									<ul className='menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow'>
										{Object.keys(toppingPrice).map((topping) => (
											<div className='flex justify-between mt-3' key={topping}>
												{topping} : {toppingPrice[topping]}k
												<input
													type='checkbox'
													className='checkbox'
													checked={selecTopping.has(topping)}
													onChange={() => handleCheckbox(topping)}
												/>
											</div>
										))}
									</ul>
								</details>
							</div>

							<div className='flex justify-end gap-4 mt-6'>
								<button
									onClick={handlePayment}
									className='px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors text-white font-medium'>
									Bayar
								</button>
								<form method='dialog'>
									<button className='px-6 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition-colors text-white font-medium'>
										Batal
									</button>
								</form>
							</div>
						</div>
					</dialog>
				</div>
			</div>
		</>
	);
};

export default DetailMenu;
