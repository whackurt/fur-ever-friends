import React, { useEffect, useState } from 'react';
import PetCard from '../../components/Pet/PetCard';
import { GetPets } from '../../services/Pet/pet.services';

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
		<div className="flex justify-center">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-4 gap-x-3">
				{pets?.map((pet) => (
					<div className="col-span-1">
						<PetCard
							id={pet._id}
							photo="https://www.pedigree.in/cdn-cgi/image/format=auto,q=90/sites/g/files/fnmzdf4446/files/2023-01/Puppy-Nutrition-Image-detail.png"
							name={pet.name}
							age={pet.age}
							breed={pet.breed}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
