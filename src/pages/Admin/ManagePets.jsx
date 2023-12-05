import React, { useState } from 'react';
import { MdOpenInNew } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';

const ManagePets = () => {
	const [showModal, setShowModal] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		animalType: '',
		breed: '',
		age: '',
		adoptionFee: '',
	});

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

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(formData);
		setShowModal(false);
	};

	return (
		<div className="relative overflow-x-auto">
			<div>
				{showModal && (
					<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
						<div className="absolute bg-white w-2/3 md:w-1/2 lg:w-1/3 p-6 rounded shadow-lg">
							<span
								onClick={toggleModal}
								className="cursor-pointer text-2xl absolute top-0 right-0 p-4"
							>
								&times;
							</span>
							<h2 className="text-lg font-bold mb-4">Update Pet Information</h2>
							<form onSubmit={handleSubmit}>
								<div className="mb-4">
									<label
										htmlFor="name"
										className="block text-gray-700 font-bold mb-2"
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
									/>
								</div>
								<div className="mb-4">
									<label
										htmlFor="animaltype"
										className="block text-gray-700 font-bold mb-2"
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
										className="block text-gray-700 font-bold mb-2"
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
										className="block text-gray-700 font-bold mb-2"
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
										className="block text-gray-700 font-bold mb-2"
									>
										Age
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
								<button
									type="submit"
									className="w-full bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
								>
									Save Changes
								</button>
							</form>
						</div>
					</div>
				)}
			</div>
			<div className="flex justify-between">
				<h1 className="font-bold text-2xl text-slate-600">Manage Pets</h1>
				<Link to={'/admin/manage-pets/add'}>
					{' '}
					<button className="bg-primary text-white px-4 py-1 rounded">
						Add New Pet
					</button>
				</Link>
			</div>
			<table className="w-full my-4 text-sm border  rounded-md text-left rtl:text-right text-gray-600">
				<thead className="text-xs text-white uppercase bg-secondary">
					<tr>
						<th scope="col" className="px-6 py-3">
							Name
						</th>
						<th scope="col" className="px-6 py-3">
							Animal Type
						</th>
						<th scope="col" className="px-6 py-3">
							Breed
						</th>
						<th scope="col" className="px-6 py-3">
							Age
						</th>
						<th scope="col" className="px-6 py-3">
							Adoption Fee
						</th>
						<th scope="col" className="px-6 py-3">
							Status
						</th>
						<th scope="col" className="px-6 py-3">
							Actions
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className="bg-white border-b ">
						<th
							scope="row"
							className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
						>
							Coffee
						</th>
						<td className="px-6 py-4">Dog</td>
						<td className="px-6 py-4">Jack Russell</td>
						<td className="px-6 py-4">1</td>
						<td className="px-6 py-4">Php 6000</td>
						<td className="px-6 py-4">Available</td>
						<td className="px-6 py-4">
							<div className="flex gap-x-2">
								<button onClick={toggleModal}>
									<FaRegEdit color="#246b07" size={20} />
									{/* Edit */}
								</button>
								<button>
									<MdDeleteOutline color="#b50e1a" size={20} />
								</button>
							</div>
						</td>
					</tr>
					<tr className="bg-white border-b ">
						<th
							scope="row"
							className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
						>
							Coffee
						</th>
						<td className="px-6 py-4">Dog</td>
						<td className="px-6 py-4">Jack Russell</td>
						<td className="px-6 py-4">1</td>
						<td className="px-6 py-4">Php 6000</td>
						<td className="px-6 py-4">Available</td>
						<td className="px-6 py-4">
							<div className="flex gap-x-2">
								<button onClick={toggleModal}>
									<FaRegEdit color="#246b07" size={20} />
									{/* Edit */}
								</button>
								<button>
									<MdDeleteOutline color="#b50e1a" size={20} />
								</button>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default ManagePets;
