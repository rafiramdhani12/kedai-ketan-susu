import { useEffect, useState } from 'react';
import { db } from '../../utils/db';
import { usersTable } from '../../utils/schema';

const Monitor = () => {
	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		try {
			const result = await db.select().from(usersTable);
			setUsers(result);
		} catch (error) {
			console.error('Error fetching users:', error);
		}
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div className='min-h-screen bg-gray-100 flex flex-col items-center p-6 mt-[64px]'>
			<h1 className='text-3xl font-bold mb-6 text-center'>User Comments</h1>
			<div className='space-y-4 w-full max-w-2xl'>
				{users.map((user) => (
					<div key={user.id} className='card bg-white shadow-md rounded-lg p-4 flex items-start space-x-4'>
						<div>
							<h2 className='text-lg font-semibold text-gray-800'>{user.username}</h2>
							<p className='text-gray-600 text-sm mb-2'>{user.email}</p>
							<p className='text-gray-700'>{user.comment}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Monitor;
