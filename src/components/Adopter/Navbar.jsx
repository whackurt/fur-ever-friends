import React, { useState } from 'react';
import Button from '../Button';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/fur-ever-friends.png';
const Navbar = ({ location }) => {
	let Links = [
		{ name: 'Home', link: '/' },
		{ name: 'Applications', link: '/applications' },
	];
	let [open, setOpen] = useState(false);
	const navigate = useNavigate();

	return (
		<div className="shadow-md w-full fixed top-0 left-0">
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
					<Button
						onClick={() => {
							localStorage.clear();
							navigate('/auth/login');
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
