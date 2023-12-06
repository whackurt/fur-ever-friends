import React from 'react';
import Navbar from '../Adopter/Navbar';
import AdopterFooter from '../Footer/AdopterFooter';

const AdopterLayout = ({ location, children }) => {
	return (
		<>
			<Navbar location={location} />
			<div className="bg-white w-full min-h-screen">
				<div className="flex justify-center mt-24">
					<div className="flex justify-center  lg:w-3/4">{children}</div>
				</div>
			</div>
			<AdopterFooter />
		</>
	);
};

export default AdopterLayout;
