import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
	const location = useLocation();

	const isTransparent = location.pathname === '/';

	return (
		<>
			<div
				className={`navbar ${
					isTransparent ? 'opacity-90 text-amber-400 font-bold' : 'bg-base-100 text-black shadow-md'
				} fixed top-0 w-full z-50 transition-all duration-300 `}>
				<div className='flex-1'>
					<Link to='/' className='btn btn-ghost text-xl'>
						Keendtu
					</Link>
				</div>
				<div className='flex-none'>
					<ul className='menu menu-horizontal px-1'>
						<li>
							<Link to='/menu'>menu</Link>
						</li>
						<li>
							<Link to='/saran'>kritik dan saran</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Navbar;
