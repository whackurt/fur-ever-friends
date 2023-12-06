import React, { useState } from 'react';
import { LoginAdmin } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/fur-ever-friends.png';

const AdminLogin = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const navigate = useNavigate();

	const login = async () => {
		setError(false);
		setLoading(true);

		const res = await LoginAdmin({ username: username, password: password });

		if (res.status == 200) {
			localStorage.setItem('adminToken', res.data.adminToken);
			navigate('/admin');
		} else {
			setError(true);
		}
		setLoading(false);
	};

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
			<div className="hidden sm:block bg-white md:flex lg:flex justify-center items-center">
				<img width={500} height={200} src={Logo} alt="" />
			</div>

			<div className="bg-gray-100 flex flex-col justify-center px-4">
				<div className="max-w-[400px] w-full mx-auto bg-white p-4 rounded-md shadow-lg">
					<form className="">
						<h2 className="text-4xl font-bold text-center py-6 text-primary">
							Login
						</h2>
						<div className="flex flex-col py-2">
							<label className="font-medium text-sm mb-1">Username</label>
							<input
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								className="border p-2 rounded-md"
								type="text"
							/>
						</div>
						<div className="flex flex-col py-2">
							<label className="font-medium text-sm mb-1">Password</label>
							<input
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="border p-2 rounded-md"
								type="password"
							/>
						</div>
						<div className="text-center text-red-500 text-xs">
							{error ? 'Invalid username or password.' : null}
						</div>
					</form>
					<button
						onClick={() => login()}
						className="border w-full rounded-md my-5 py-2 bg-primary hover:bg-secondary text-white"
					>
						{loading ? 'Logging in...' : 'Log In'}
					</button>
				</div>
			</div>
		</div>
	);
};

export default AdminLogin;
