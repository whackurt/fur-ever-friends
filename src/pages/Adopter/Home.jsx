import React, { useEffect, useState } from 'react';
import PetCard from '../../components/Pet/PetCard';
import { GetPets } from '../../services/pet.services';
import Logo from '../../assets/fur-ever-friends.png';

const Home = () => {
	const [pets, setPets] = useState([]);

	useEffect(() => {
		const getAllPets = async () => {
			const res = await GetPets();
			setPets(res.data.data.pets);
		};

		getAllPets();
	}, []);

	return (
		<div className="py-8">
			<div className="flex flex-col items-center justify-center">
				{/* <img src={Logo} alt="" /> */}
				<div className="flex flex-col  py-4  w-full items-center">
					<p className="text-xl lg:text-3xl font-bold text-secondary ">
						Every Pet Deserves a Loving Home
					</p>
					<p className="lg:text-xl font-semibold text-mainText">
						Adopt a Pet Now!
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-4 gap-x-3">
					{pets?.map((pet) => (
						<div className="col-span-1">
							<PetCard
								id={pet._id}
								photo={pet.photos[0]}
								name={pet.name}
								age={pet.age}
								breed={pet.breed}
								availableForAdoption={pet.availableForAdoption}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
