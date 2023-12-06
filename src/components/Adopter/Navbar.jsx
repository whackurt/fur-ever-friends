import React, { useEffect, useState } from 'react';
import Button from '../Button';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/fur-ever-friends.png';
import { GetAdopterById } from '../../services/adopter.services';
const Navbar = ({ location }) => {
	let Links = [
		{ name: 'Home', link: '/pet' },
		{ name: 'Applications', link: '/applications' },
	];
	const [adopterData, setAdopterData] = useState({});
	let [open, setOpen] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const logout = () => {
		// Implement logout functionality here
		console.log('Logged out');
	};
	const navigate = useNavigate();

	useEffect(() => {
		const getAdopter = async () => {
			const res = await GetAdopterById(localStorage.getItem('adopterId'));
			if (res.status === 200) {
				setAdopterData(res.data.adopter);
			}
			console.log(adopterData);
		};

		getAdopter();
	}, []);

	return (
		<div className="z-50 shadow-md w-full fixed top-0 left-0">
			<div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
				<div
					className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] gap-x-3
      text-gray-800"
				>
					<img
						width={150}
						height={40}
						src={Logo}
						className={`cursor-pointer duration-500 ${
							open && 'rotate-[360deg]'
						}`}
					/>
					<p>{adopterData.name}</p>
				</div>

				<div
					onClick={() => setOpen(!open)}
					className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
				>
					<ion-icon name={open ? 'close' : 'menu'}></ion-icon>
				</div>

				<ul
					className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
						open ? 'top-20 ' : 'top-[-490px]'
					}`}
				>
					{Links.map((link) => (
						<Link to={link.link} key={link.name}>
							<li className="md:ml-8 text-md font-regular md:my-0 my-7">
								<p
									className={`${
										location === link.name ? 'text-primary' : ' text-gray-800'
									}  hover:text-gray-400 duration-500`}
								>
									{link.name}
								</p>
							</li>
						</Link>
					))}
					{/* <div className="relative inline-block text-left">
						<div className="flex items-center gap-x-4">
							<p className="font-medium">{adopterData.name}</p>
							<button
								onClick={toggleDropdown}
								type="button"
								className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-gray-200 text-gray-700 focus:outline-none"
							>
								<img
									src="https://cdn-icons-png.flaticon.com/512/4021/4021443.png"
									alt="Profile"
									className="w-6 h-6"
								/>
							</button>
						</div>
						{isOpen && (
							<div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
								<div
									className="py-1"
									role="menu"
									aria-orientation="vertical"
									aria-labelledby="options-menu"
								>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
										role="menuitem"
									>
										Profile
									</a>
									<button
										onClick={() => {
											localStorage.clear();
											navigate('/auth/login');
										}}
										type="button"
										className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
										role="menuitem"
									>
										Logout
									</button>
								</div>
							</div>
						)}
					</div> */}
					<Button
						onClick={() => {
							localStorage.clear();
							navigate('/login');
						}}
					>
						Log out
					</Button>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
