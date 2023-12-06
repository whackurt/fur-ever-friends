import React from 'react';
import Logo from '../../assets/fur-ever-friends.png';

const AdopterFooter = () => {
	return (
		<footer className="bg-white border shadow-lg text-white ">
			<div className="md:flex items-center text-center justify-center lg:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-1">
				<div className="text-mainText text-center">
					© 2023 Fur-Ever Friends Haven. All rights reserved.
				</div>
				<div className="flex justify-center">
					<img className="" width={150} src={Logo} alt="" />
				</div>
			</div>
		</footer>
	);
};

export default AdopterFooter;
