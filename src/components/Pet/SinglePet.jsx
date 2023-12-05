import { useParams } from 'react-router-dom';

const SinglePet = () => {
	const { id } = useParams(); // Assuming you get the pet ID from the URL

	// Fetch the detailed information of the pet based on the ID

	// Sample data for demonstration
	const petDetails = {
		id: id,
		name: 'Fluffy',
		age: '2 years',
		breed: 'Labrador',
		description: 'A lovely Labrador ready for adoption!',
		// Add more details as needed
		// photo, price, etc.
	};

	return (
		<div className="container mx-auto my-4 p-4 bg-white rounded shadow-lg">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{/* Left section for image */}
				<div>
					{/* Replace with actual pet image */}
					<img
						src="path/to/pet-image.jpg"
						alt={petDetails.name}
						className="w-full h-auto rounded-lg"
					/>
				</div>

				{/* Right section for pet details */}
				<div className="text-left">
					<h1 className="text-2xl font-bold">{petDetails.name}</h1>
					<p className="text-gray-600">
						{petDetails.age} | {petDetails.breed}
					</p>
					<p className="mt-4">{petDetails.description}</p>
					{/* Add more pet details here */}
				</div>
			</div>
		</div>
	);
};

export default SinglePet;
