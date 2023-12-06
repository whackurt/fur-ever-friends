import { Link } from 'react-router-dom';

const PetCard = ({ photo, name, age, breed, id, availableForAdoption }) => {
	return (
		<Link to={`/pet/${id}`}>
			<div className=" max-w-sm rounded-lg shadow-lg my-4  h-[280px] overflow-y-hidden">
				<div className="flex relative justify-end">
					<div
						className={`absolute top-1 right-1 flex ml-auto ${
							availableForAdoption ? 'bg-green-600' : 'bg-red-600'
						} text-xs text-white justify-end px-2 py-1 rounded-lg `}
					>
						{availableForAdoption ? 'Available' : 'Adopted'}
					</div>
				</div>

				<div className="h-48 overflow-hidden">
					<img src={photo} alt={name} className="w-full h-full object-cover" />
				</div>
				<div className="px-6 py-4">
					<div className="flex justify-between font-bold text-gray-800 text-xl mb-2">
						{name}
					</div>
					<p className="text-gray-700 text-base">
						<span className="font-semibold">Age :</span> {age} yr/s,{' '}
						<span className="font-semibold">Breed :</span> {breed}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default PetCard;
