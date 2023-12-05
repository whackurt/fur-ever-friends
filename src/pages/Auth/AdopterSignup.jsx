import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginAdopter, SignupAdopter } from '../../services/Auth/auth';
import Logo from '../../assets/fur-ever-friends.png';

const AdopterSignup = () => {
	const [name, setName] = useState('');
	const [address, setAddress] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [complete, setComplete] = useState(false);
	const [fillMsg, setFillMsg] = useState('');
	const navigate = useNavigate();

	const validate = () => {
		setComplete(true);
		if (
			name === '' ||
			address === '' ||
			email === '' ||
			password === '' ||
			phone === ''
		) {
			setComplete(false);
			setFillMsg('Please enter all the required fields.');
		} else {
			setComplete(true);
			setFillMsg('');
		}
	};

	const signup = async () => {
		validate();

		setError(false);
		setLoading(true);

		if (complete) {
			const res = await SignupAdopter({
				email: email,
				password: password,
				name: name,
				address: address,
				phone: phone,
			});

			if (res.status == 201) {
				const res = await LoginAdopter({ email: email, password: password });

				if (res.status == 200) {
					localStorage.setItem('adopterToken', res.data.adopterToken);
					navigate('/');
				}
			} else {
				setError(true);
			}
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
							Sign Up
						</h2>
						<div className="flex flex-col py-2">
							<label className="font-medium text-sm mb-1">Name</label>
							<input
								placeholder="Enter your complete name"
								onChange={(e) => setName(e.target.value)}
								className="border p-2"
								required
								type="text"
							/>
						</div>
						<div className="flex flex-col py-2">
							<label className="font-medium text-sm mb-1">Address</label>
							<input
								placeholder="Enter your address"
								onChange={(e) => setAddress(e.target.value)}
								className="border p-2"
								required
								type="text"
							/>
						</div>
						<div className="flex flex-col py-2">
							<label className="font-medium text-sm mb-1">Phone number</label>
							<input
								placeholder="Enter your phone"
								onChange={(e) => setPhone(e.target.value)}
								className="border p-2"
								required
								type="text"
							/>
						</div>
						<div className="flex flex-col py-2">
							<label className="font-medium text-sm mb-1">Email</label>
							<input
								placeholder="Enter your email"
								onChange={(e) => setEmail(e.target.value)}
								className="border p-2"
								required
								type="text"
							/>
						</div>
						<div className="flex flex-col py-2">
							<label className="font-medium text-sm mb-1">Password</label>
							<input
								placeholder="Enter your password"
								onChange={(e) => setPassword(e.target.value)}
								className="border p-2"
								required
								type="password"
							/>
						</div>
						<div className="text-center text-red-500 text-xs">
							{error ? 'Invalid signup.' : null}
						</div>
						<div className="text-center text-red-500 text-xs">{fillMsg}</div>
					</form>
					<button
						onClick={() => signup()}
						className="border w-full rounded-md my-5 py-2 bg-primary hover:bg-secondary text-white"
					>
						Sign Up
					</button>
					<div className="flex justify-center">
						<p className="text-xs">Already have an account? </p>
						<Link
							to={'/auth/login'}
							className="font-medium text-xs text-primary"
						>
							{' '}
							Log in
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdopterSignup;
