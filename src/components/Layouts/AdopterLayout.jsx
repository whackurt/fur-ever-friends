import React from 'react';
import Navbar from '../Adopter/Navbar';

const AdopterLayout = ({ location, children }) => {
	return (
		<>
			<Navbar location={location} />
			<div className="bg-gray-100 w-full min-h-screen ">
				<div className="flex justify-center my-24">
					<div className="flex justify-center  lg:w-3/4">{children}</div>
				</div>
			</div>
		</>
	);
};

export default AdopterLayout;
