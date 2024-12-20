/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { db } from '../../utils/db'; // Pastikan db sudah di-set dengan benar
import { usersTable } from '../../utils/schema'; // Pastikan schema sudah di-set dengan benar
import toast, { Toaster } from 'react-hot-toast';
import FaQ from '../components/FaQ';

const Saran = () => {
	const [form, setForm] = useState({
		username: '',
		email: '',
		comment: '',
	});

	// Memperbaiki handleChange
	const handleChange = (e) => {
		const { name, value } = e.target; // Ambil name dan value dari input
		setForm({
			...form,
			[name]: value, // Perbarui form dengan name yang sesuai
		});
	};

	// Handle submit form
	const handleSubmit = async (e) => {
		e.preventDefault();

		// Validasi form
		if (!form.username || !form.email || !form.comment) {
			toast.error('All fields are required');
			return;
		}

		try {
			// Insert data ke Neon menggunakan Drizzle
			await db
				.insert(usersTable)
				.values({
					username: form.username,
					email: form.email,
					comment: form.comment,
				})
				.returning();

			toast.success(`sukses menambahkan kritik saran dan komentar terimakasih`);
			// Reset form setelah submit berhasil
			setForm({
				username: '',
				email: '',
				comment: '',
			});
		} catch (error) {
			console.error('Error inserting data:', error);
			toast.error(`error inserting data ${error.message}`);
		}
	};

	return (
		<>
			<Toaster />
			<section className='min-h-screen mt-[64px]'>
				<div className='mockup-browser bg-base-300 border md:h-screen'>
					<div className='mockup-browser-toolbar'>
						<div className='input'>kritik dan saran</div>
					</div>
					<form onSubmit={handleSubmit}>
						<div className='bg-base-200 flex flex-col justify-center px-4 py-16 items-center flex-1 space-y-4'>
							{/* Input untuk Username */}
							<input
								type='text'
								value={form.username}
								onChange={handleChange}
								name='username' // Pastikan name sesuai dengan key di form
								placeholder='masukan username'
								className='input input-bordered w-full max-w-xs'
							/>
							{/* Input untuk Email */}
							<input
								type='email'
								value={form.email}
								onChange={handleChange}
								name='email' // Pastikan name sesuai dengan key di form
								placeholder='masukkan email'
								className='input input-bordered w-full max-w-xs'
							/>
							{/* Input untuk Comment */}
							<input
								type='text'
								value={form.comment}
								onChange={handleChange}
								name='comment' // Pastikan name sesuai dengan key di form
								placeholder='kritik dan saran disini'
								className='input input-bordered w-full max-w-xs'
							/>
							{/* Tombol Submit */}
							<button className='btn btn-primary' type='submit'>
								submit
							</button>
						</div>
					</form>
					<div className='flex justify-center text-xl font-bold p-4'>terimakasih atas kritik dan saran nya</div>
				</div>
				{/* FAQ Section */}
				<div className='md:hidden mt-3 mb-3'>
					<FaQ />
				</div>
			</section>
		</>
	);
};

export default Saran;
