import React, { useState } from 'react';

const AddNewPet = () => {
	const [formData, setFormData] = useState({
		name: '',
		animalType: '',
		breed: '',
		age: '',
		adoptionFee: '',
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Process form data here, e.g., submit to backend or perform actions
		console.log(formData);
		// Clear form fields after submission
		setFormData({
			name: '',
			animalType: '',
			breed: '',
			age: '',
			adoptionFee: '',
		});
	};

	return (
		<div className="w-2/3 md:w-1/2 lg:w-1/3 p-6 mx-auto mt-10 rounded shadow-lg bg-white">
			<h2 className="text-xl font-bold mb-4 text-center">Add New Pet</h2>
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label
						htmlFor="name"
						className="block text-gray-700 font-medium mb-2"
					>
						Name:
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleInputChange}
						className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
						required
					/>
				</div>
				<div className="mb-4">
					<div className="mb-4">
						<label
							htmlFor="animaltype"
							className="block text-gray-700 font-medium mb-2"
						>
							Animal Type:
						</label>
						<input
							type="text"
							id="animaltype"
							name="animaltype"
							value={formData.animalType}
							onChange={handleInputChange}
							className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="breed"
							className="block text-gray-700 font-medium mb-2"
						>
							Breed
						</label>
						<input
							type="text"
							id="breed"
							name="breed"
							value={formData.breed}
							onChange={handleInputChange}
							className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="age"
							className="block text-gray-700 font-medium mb-2"
						>
							Age
						</label>
						<input
							type="text"
							id="age"
							name="age"
							value={formData.age}
							onChange={handleInputChange}
							className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="adoptionfee"
							className="block text-gray-700 font-medium mb-2"
						>
							Adoption Fee
						</label>
						<input
							type="text"
							id="adoptionfee"
							name="adoptionfee"
							value={formData.adoptionFee}
							onChange={handleInputChange}
							className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
						/>
					</div>
				</div>
				<button
					type="submit"
					className="bg-primary w-full hover:bg-secondary text-white font-bold py-2 px-4 rounded"
				>
					Add Pet
				</button>
			</form>
		</div>
	);
};

export default AddNewPet;
