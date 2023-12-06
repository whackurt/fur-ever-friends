import React, { useEffect, useState } from 'react';
import { MdOpenInNew } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import {
	DeletePetById,
	GetPets,
	UpdatePetById,
	UploadPetImage,
} from '../../services/pet.services';

const ManagePets = () => {
	const [showModal, setShowModal] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [deleteSuccess, setDeleteSuccess] = useState(false);
	const [loading, setLoading] = useState(false);
	const [img, setImg] = useState(null);

	const [idToEdit, setIdToEdit] = useState(null);
	const [idToDelete, setIdToDelete] = useState(null);

	const [pets, setPets] = useState([]);
	const [petDetails, setPetDetails] = useState({});
	const [updates, setUpdates] = useState({});

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	const toggleDeleteModal = () => {
		setShowDeleteModal(!showDeleteModal);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const getPets = async () => {
		const res = await GetPets();

		if (res.status === 200) {
			setPets(res.data.data.pets);
		}
	};

	const saveUpdate = async () => {
		try {
			var imgUrls = [];
			var updatedPic = false;
			var updatesEmpty = Object.keys(updates).length === 0;

			if (img != null) {
				setLoading(true);

				for (let i = 0; i < img.length; i++) {
					const url = await UploadPetImage(img[i]);
					imgUrls.push(url);
				}

				if (imgUrls.length > 0) {
					const res = await UpdatePetById(petDetails[0]._id, {
						photos: imgUrls,
					});

					if (res.status === 200) {
						updatedPic = true;

						if (updatesEmpty) {
							setShowModal(false);
							setImg(null);
							getPets();
						}
					}
				}
			}

			if (!updatesEmpty) {
				setLoading(true);

				const res = await UpdatePetById(petDetails[0]._id, updates);

				if (res.status === 200 || updatedPic) {
					setShowModal(false);
					setUpdates({});
					getPets();
				}
			}

			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const okay = () => {
		toggleDeleteModal();
		setDeleteSuccess(false);
		setIdToDelete(null);
		getPets();
	};

	const deletePet = async () => {
		const res = await DeletePetById(idToDelete);

		if (res.status === 200) {
			setDeleteSuccess(true);
		}
	};

	useEffect(() => {
		getPets();
	}, []);

	useEffect(() => {
		console.log(updates);
	}, []);

	useEffect(() => {
		setUpdates({});
		setPetDetails(pets.filter((pet) => pet._id === idToEdit));
	}, [idToEdit]);

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
										placeholder={petDetails[0]?.name}
										onChange={(e) =>
											setUpdates({
												...updates,
												name: e.target.value,
											})
										}
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
										id="animalType"
										name="animalType"
										placeholder={petDetails[0]?.animalType}
										onChange={(e) =>
											setUpdates({
												...updates,
												animalType: e.target.value,
											})
										}
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
										placeholder={petDetails[0]?.breed}
										onChange={(e) =>
											setUpdates({
												...updates,
												breed: e.target.value,
											})
										}
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
										placeholder={petDetails[0]?.age}
										onChange={(e) =>
											setUpdates({
												...updates,
												age: e.target.value,
											})
										}
										className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
									/>
								</div>
								<div className="mb-4">
									<label
										htmlFor="adoptionfee"
										className="block text-gray-700 font-bold mb-2"
									>
										Adoption Fee
									</label>
									<input
										type="text"
										id="adoptionFee"
										name="adoptionFee"
										placeholder={petDetails[0]?.adoptionFee}
										onChange={(e) =>
											setUpdates({
												...updates,
												adoptionFee: e.target.value,
											})
										}
										className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
									/>
								</div>
								<div className="mb-4">
									<label
										htmlFor="adoptionfee"
										className="block text-gray-700 font-medium mb-2"
									>
										Photos
									</label>
									<div className="flex gap-x-2 pb-2 items-end">
										{petDetails[0]?.photos.map((photo) => (
											<div className="col-span-1">
												<img src={photo} width={100} alt={photo} />
											</div>
										))}
									</div>
									<input
										type="file"
										accept="image/*"
										id="photos"
										multiple
										name="photos"
										onChange={(e) => setImg(e.target.files)}
										className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
									/>
								</div>
								<button
									onClick={() => saveUpdate()}
									type="submit"
									className="w-full bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
								>
									{loading ? 'Saving...' : 'Save Changes'}
								</button>
							</form>
						</div>
					</div>
				)}
				{showDeleteModal && (
					<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
						<div className="absolute bg-white w-2/3 md:w-1/2 lg:w-1/3 p-6 rounded shadow-lg">
							<span
								onClick={toggleDeleteModal}
								className="cursor-pointer text-2xl absolute top-0 right-0 p-4"
							>
								&times;
							</span>
							<h2 className="font-bold">Delete Pet</h2>
							<div>
								<div className="flex py-4">
									<p className="">
										{deleteSuccess
											? 'Pet deleted successfully.'
											: 'Are you sure you want to delete this pet?'}
									</p>
								</div>
								<div className="flex justify-end">
									{deleteSuccess ? (
										<button
											onClick={() => okay()}
											type="submit"
											className="mt-4 bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
										>
											Okay
										</button>
									) : (
										<button
											onClick={() => deletePet()}
											type="submit"
											className="mt-4 bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
										>
											Delete
										</button>
									)}
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
			<div className="flex justify-between">
				<h1 className="font-bold text-2xl text-slate-600">Manage Pets</h1>
				<Link to={'/admin/manage-pets/add'}>
					{' '}
					<button className="bg-green-600 hover:bg-green-700 text-sm text-white px-4 py-1 rounded">
						Add New Pet
					</button>
				</Link>
			</div>
			<table className="w-full my-2 text-sm border  rounded-md text-left rtl:text-right text-gray-600">
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
							Photos
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
					{pets.map((pet) => (
						<tr key={pet._id} className="bg-white border-b ">
							<th
								scope="row"
								className="px-6 py-4 text-md font-medium text-gray-900 whitespace-nowrap"
							>
								{pet.name}
							</th>
							<td className="px-6 py-4">{pet.animalType}</td>
							<td className="px-6 py-4">{pet.breed}</td>
							<td className="px-6 py-4">{pet.age}</td>
							<td className="px-6 py-4">Php {pet.adoptionFee}.00</td>
							<td className="px-6 py-4">
								<div className="flex gap-x-1">
									{pet.photos.slice(0, 3).map((photo) => (
										<img key={photo} src={photo} width={50} alt="" />
									))}
								</div>
							</td>
							<td className="px-6 py-4">
								<div className="flex text-xs">
									<p
										className={`px-2 py-1 rounded text-white  ${
											pet.availableForAdoption ? 'bg-green-600' : 'bg-red-600'
										}`}
									>
										{pet.availableForAdoption ? 'Available' : 'Adopted'}
									</p>
								</div>
							</td>
							<td className="px-6 py-4">
								<div className="flex gap-x-2">
									<button
										onClick={() => {
											setIdToEdit(pet._id);
											toggleModal();
										}}
									>
										<FaRegEdit color="#246b07" size={20} />
										{/* Edit */}
									</button>
									<button
										onClick={() => {
											setIdToDelete(pet._id);
											toggleDeleteModal();
										}}
									>
										<MdDeleteOutline color="#b50e1a" size={20} />
									</button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ManagePets;
