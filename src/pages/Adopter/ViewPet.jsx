import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ViewPet = () => {
	const { id } = useParams();
	const [showModal, setShowModal] = useState(false);
	const petDetails = {
		_id: id,
		name: 'Fluffy',
		age: '2',
		breed: 'Labrador',
		animalType: 'Dog',
		adoptionFee: 6000,
		availableForAdoption: false,
	};

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(formData);
		setShowModal(false);
	};

	return (
		<div className="container mx-4 my-8 p-4 bg-white rounded shadow-lg w-3/4">
			{showModal && (
				<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
					<div className="absolute bg-white w-2/3 md:w-1/2 lg:w-1/3 p-6 rounded shadow-lg">
						<span
							onClick={toggleModal}
							className="cursor-pointer text-2xl absolute top-0 right-0 p-4"
						>
							&times;
						</span>
						<h2 className="font-bold">Confirm Application</h2>
						<form onSubmit={handleSubmit}>
							<div className="flex py-4">
								<p className="">Are you sure you want to adopt this pet?</p>
							</div>
							<div className="flex justify-end">
								<button
									type="submit"
									className="mt-4 bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
								>
									Confirm
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{/* Left section for image */}
				<div>
					<img
						src="https://images.squarespace-cdn.com/content/v1/53a60116e4b0488fb14d69d8/1597336605370-5BEYBPCYKAZEMWC4J7KQ/image-asset.jpeg"
						alt={petDetails.name}
						className="w-full h-auto rounded-lg"
					/>
				</div>

				{/* Right section for pet details */}
				<div className="text-left">
					<div className="flex flex-col">
						<div className="">
							<h1 className="text-2xl font-bold">{petDetails.name}</h1>
							<hr />
							<p className="py-2">
								<span className="font-medium text-gray-700">Animal Type: </span>{' '}
								{petDetails.animalType}
							</p>
							<p className="py-2">
								<span className="font-medium text-gray-700">Breed: </span>{' '}
								{petDetails.breed}
							</p>
							<p className="py-2">
								<span className="font-medium text-gray-700">Age: </span>{' '}
								{petDetails.age} year/s
							</p>
							<p className="py-2">
								<span className="font-medium text-gray-700">
									Adoption Fee:{' '}
								</span>{' '}
								Php {petDetails.adoptionFee}
							</p>
							<p className="py-2">
								<span className="font-medium text-gray-700">
									Available for Adoption:{' '}
								</span>{' '}
								{petDetails.availableForAdoption ? 'Yes' : 'No'}
							</p>

							<button
								onClick={toggleModal}
								className="bg-primary w-full hover:bg-secondary text-white font-bold py-2 px-4 rounded"
							>
								Adopt
							</button>
						</div>
					</div>

					{/* Add more pet details here */}
				</div>
			</div>
		</div>
	);
};

export default ViewPet;
