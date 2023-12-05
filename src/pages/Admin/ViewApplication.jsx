import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
	GetApplicationById,
	UpdateApplicationById,
} from '../../services/Applications/applications.services';
import { UpdatePetById } from '../../services/Pet/pet.services';

export const ViewApplication = () => {
	let { id } = useParams();

	const [application, setApplication] = useState({});
	const [showApproveModal, setShowApproveModal] = useState(false);
	const [showRejectModal, setShowRejectModal] = useState(false);
	const [approveSuccess, setApproveSuccess] = useState(false);
	const [rejectSuccess, setRejectSuccess] = useState(false);

	const toggleModal = () => {
		setShowApproveModal(!showApproveModal);
	};

	const toggleRejectModal = () => {
		setShowRejectModal(!showRejectModal);
	};

	const getApplication = async () => {
		const res = await GetApplicationById(id);
		if (res.status === 200) {
			setApplication(res.data.data.application);
		}
		console.log(res);
	};

	const approveApplication = async () => {
		const approved = await UpdateApplicationById(application._id, {
			status: 1,
		});

		const availableForAdoption = await UpdatePetById(application.petId?._id, {
			availableForAdoption: false,
		});

		if (approved.status === 200 && availableForAdoption.status === 200) {
			setApproveSuccess(true);
		}

		getApplication();
	};

	const disApproveApplication = async () => {
		const approved = await UpdateApplicationById(application._id, {
			status: 0,
		});

		const availableForAdoption = await UpdatePetById(application.petId?._id, {
			availableForAdoption: true,
		});

		if (approved.status === 200 && availableForAdoption.status === 200) {
			setApproveSuccess(true);
		}

		getApplication();
	};

	const rejectApplication = async () => {
		const approved = await UpdateApplicationById(application._id, {
			status: 2,
		});

		const availableForAdoption = await UpdatePetById(application.petId?._id, {
			availableForAdoption: true,
		});

		if (approved.status === 200 && availableForAdoption.status === 200) {
			setRejectSuccess(true);
		}

		getApplication();
	};

	const okay = () => {
		if (approveSuccess) {
			setShowApproveModal(false);
			setApproveSuccess(false);
		}

		if (rejectSuccess) {
			setShowRejectModal(false);
			setRejectSuccess(false);
		}
	};

	useEffect(() => {
		getApplication();
	}, []);

	return (
		<div className="flex flex-col items-center justify-center">
			<p className="text-2xl font-medium mb-3">Application for Adoption</p>
			{showApproveModal && (
				<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
					<div className="absolute bg-white w-2/3 md:w-1/2 lg:w-1/3 p-6 rounded shadow-lg">
						<span
							onClick={toggleModal}
							className="cursor-pointer text-2xl absolute top-0 right-0 p-4"
						>
							&times;
						</span>
						<h2 className="font-bold">
							{approveSuccess ? 'Application Approved' : 'Approve Application'}
						</h2>
						<div>
							<div className="flex py-4">
								<p className="">
									{approveSuccess
										? 'Application for adoption approved successfully.'
										: 'Are you sure you want to approve this application?'}
								</p>
							</div>
							<div className="flex justify-end">
								{approveSuccess ? (
									<button
										onClick={() => okay()}
										type="submit"
										className="mt-4 bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
									>
										Okay
									</button>
								) : (
									<button
										onClick={() => approveApplication()}
										type="submit"
										className="mt-4 bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
									>
										Approve
									</button>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
			{showRejectModal && (
				<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
					<div className="absolute bg-white w-2/3 md:w-1/2 lg:w-1/3 p-6 rounded shadow-lg">
						<span
							onClick={toggleRejectModal}
							className="cursor-pointer text-2xl absolute top-0 right-0 p-4"
						>
							&times;
						</span>
						<h2 className="font-bold">
							{rejectSuccess ? 'Application Rejected' : 'Reject Application'}
						</h2>
						<div>
							<div className="flex py-4">
								<p className="">
									{rejectSuccess
										? 'Application for adoption rejected successfully.'
										: 'Are you sure you want to reject this application?'}
								</p>
							</div>
							<div className="flex justify-end">
								{rejectSuccess ? (
									<button
										onClick={() => okay()}
										type="submit"
										className="mt-4 bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
									>
										Okay
									</button>
								) : (
									<button
										onClick={() => rejectApplication()}
										type="submit"
										className="mt-4 bg-red-500 hover:bg-secondary text-white font-bold py-2 px-4 rounded"
									>
										Reject
									</button>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
			<div className="w-full lg:w-2/5 shadow-md p-4 border rounded-md">
				<div className="flex items-end flex-col py-2">
					{/* <h1 className="font-bold text-primary">Application Status</h1> */}
					<div
						className={`w-1/4 py-1 text-center rounded text-white ${
							application.status === 0
								? 'bg-yellow-600'
								: application.status === 1
								? 'bg-green-500'
								: 'bg-red-600'
						}`}
					>
						{application.status === 0
							? 'Pending'
							: application.status === 1
							? 'Approved'
							: 'Rejected'}
					</div>
				</div>
				<div className="flex flex-col py-2">
					<h1 className="font-bold text-primary">Application ID</h1>
					<p className="pl-4">{id}</p>
				</div>
				<p className="font-medium text-xl pt-4 text-primary">Pet Information</p>
				<hr />
				<div className="flex flex-col py-2">
					<h1 className="font-medium">Pet Name</h1>
					<p className="pl-4">{application.petId?.name}</p>
				</div>
				<div className="flex flex-col py-2">
					<h1 className="font-medium">Type</h1>
					<p className="pl-4">{application.petId?.animalType}</p>
				</div>
				<div className="flex flex-col py-2">
					<h1 className="font-medium">Breed</h1>
					<p className="pl-4">{application.petId?.breed}</p>
				</div>
				<div className="flex flex-col py-2">
					<h1 className="font-medium">Age</h1>
					<p className="pl-4">{application.petId?.age}</p>
				</div>
				<div className="flex flex-col py-2">
					<h1 className="font-medium">Adoption Fee</h1>
					<p className="pl-4">Php {application.petId?.adoptionFee}.00</p>
				</div>
				<div className="flex flex-col py-2">
					<h1 className="font-medium">Status</h1>

					{application.petId?.availableForAdoption ? (
						<div className="bg-green-300 rounded-md w-[185px] pl-4 text-gray-700">
							Available for Adoption
						</div>
					) : (
						<div className="bg-red-300 rounded-md w-[95px] pl-4 text-gray-700">
							Adopted
						</div>
					)}
				</div>

				<p className="font-medium text-xl pt-4 text-primary">
					Adopter Information
				</p>
				<hr />
				<div className="flex flex-col py-2">
					<h1 className="font-medium">Name</h1>
					<p className="pl-4">{application.adopterId?.name}</p>
				</div>
				<div className="flex flex-col py-2">
					<h1 className="font-medium">Address</h1>
					<p className="pl-4">{application.adopterId?.address}</p>
				</div>
				<div className="flex flex-col py-2">
					<h1 className="font-medium">Phone</h1>
					<p className="pl-4">+63 {application.adopterId?.phone}</p>
				</div>

				<div className="flex justify-center gap-x-2">
					<button
						onClick={toggleModal}
						disabled={!application.petId?.availableForAdoption}
						className={`border w-full rounded-md my-5 py-1 bg-green-600 hover:bg-green-500 text-white`}
					>
						Approve
					</button>
					<button
						onClick={() => disApproveApplication()}
						disabled={application.status === 0}
						className={`border w-full rounded-md my-5 py-1 bg-yellow-600 hover:bg-yellow-500 text-white`}
					>
						Disapprove
					</button>
					<button
						onClick={toggleRejectModal}
						disabled={application.status === 2}
						className="border w-full rounded-md my-5 py-1 bg-red-600 hover:bg-red-500 text-white"
					>
						Reject
					</button>
				</div>
			</div>
		</div>
	);
};
