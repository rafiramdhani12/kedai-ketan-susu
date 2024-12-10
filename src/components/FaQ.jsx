const FaQ = () => {
	return (
		<>
			<div className='h-screen pt-[100px]'>
				<h1 className='flex justify-center text-orange-500 font-bold text-2xl'>FAQ</h1>
				<div className='join join-vertical w-full p-4'>
					<div className='collapse collapse-arrow join-item border-base-300 border'>
						<input type='radio' name='my-accordion-4' defaultChecked />
						<div className='collapse-title text-xl font-medium'>
							apakah bahan yg dipakai segar layak dikonsumsi dan halal ?
						</div>
						<div className='collapse-content'>
							<p>
								ya! kami sangat memperhatikan kualitas produk kami dan kami pastikan tidak ada yg terlewat dari quality
								control kami
							</p>
						</div>
					</div>
					<div className='collapse collapse-arrow join-item border-base-300 border'>
						<input type='radio' name='my-accordion-4' />
						<div className='collapse-title text-xl font-medium'>
							apakah ada rasa yg sangat popular dan direkomendasikan disini?
						</div>
						<div className='collapse-content'>
							<p>
								ya ada ! meski kami banyak sekali menu dan semuanya enak enak tapi kami punya menu andalan yaitu choco
								chrunchy dan matcha
							</p>
						</div>
					</div>
					<div className='collapse collapse-arrow join-item border-base-300 border'>
						<input type='radio' name='my-accordion-4' />
						<div className='collapse-title text-xl font-medium'>berapa lama makanan ini bisa bertahan ?</div>
						<div className='collapse-content'>
							<p>
								jika kita tidak memasukkan kondimen nya akan bertahan lama tapi jika sudah dikemas dan dimasukkan
								semuanya maka kami rasa hanya bertahan dalam hitungan jam karena produk kami memakai dairy produk saran
								kami sedikit konyol kami akan memisahkan semua kondimen nya jika anda memesan untuk dimakan nanti malam
								/ waktu yg tidak ditentukan
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FaQ;
