import React, { useState } from 'react';
import { CreatePet } from '../../services/Pet/pet.services';
import { useNavigate } from 'react-router-dom';

const AddNewPet = () => {
	const [addSuccess, setAddSuccess] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		animalType: '',
		breed: '',
		age: 0,
		adoptionFee: '',
	});

	const navigate = useNavigate();

	const addPet = async () => {
		const res = await CreatePet({
			name: formData.name,
			animalType: formData.animalType,
			breed: formData.breed,
			age: formData.age,
			adoptionFee: formData.adoptionFee,
		});

		if (res.status === 201) {
			setAddSuccess(true);
			toggleModal();
		}
	};

	const okay = () => {
		setShowModal(false);
		setFormData({
			name: '',
			animalType: '',
			breed: '',
			age: '',
			adoptionFee: '',
		});
		navigate('/admin/manage-pets');
	};

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	return (
		<div className="w-2/3 mb-8 md:w-1/2 lg:w-1/3 p-6 mx-auto mt-10 rounded shadow-lg bg-white">
			{addSuccess && (
				<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
					<div className="absolute bg-white w-2/3 md:w-1/2 lg:w-1/3 p-6 rounded shadow-lg">
						<span
							onClick={toggleModal}
							className="cursor-pointer text-2xl absolute top-0 right-0 p-4"
						>
							&times;
						</span>
						<h2 className="font-bold">{'Manage Pets'}</h2>
						<div>
							<div className="flex py-4">
								<p className="">Pet added successfully.</p>
							</div>
							<div className="flex justify-end">
								<button
									onClick={() => okay()}
									type="submit"
									className="mt-4 bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
								>
									Okay
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
			<h2 className="text-xl font-bold mb-4 text-center">Add New Pet</h2>
			<div>
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
				<div className="mb-8">
					<div className="mb-4">
						<label
							htmlFor="animaltype"
							className="block text-gray-700 font-medium mb-2"
						>
							Animal Type:
						</label>
						<input
							type="text"
							id="animalType"
							name="animalType"
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
							Age {'(in years)'}
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
							type="number"
							id="adoptionFee"
							min={0}
							name="adoptionFee"
							value={formData.adoptionFee}
							onChange={handleInputChange}
							className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
						/>
					</div>
				</div>
				<button
					onClick={() => addPet()}
					type="submit"
					className="bg-primary w-full hover:bg-secondary text-white font-bold py-2 px-4 rounded"
				>
					Add Pet
				</button>
			</div>
		</div>
	);
};

export default AddNewPet;
