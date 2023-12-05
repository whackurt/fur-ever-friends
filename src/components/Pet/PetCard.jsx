import { Link } from 'react-router-dom';

const PetCard = ({ photo, name, age, breed, id }) => {
	return (
		<Link to={`/pet/${id}`}>
			<div className="max-w-sm rounded overflow-hidden shadow-lg my-4">
				<div className="h-48 overflow-hidden">
					<img src={photo} alt={name} className="w-full h-full object-cover" />
				</div>
				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2">{name}</div>
					<p className="text-gray-700 text-base">
						<span className="font-medium">Age:</span> {age} yr/s,{' '}
						<span className="font-medium">Breed:</span> {breed}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default PetCard;
