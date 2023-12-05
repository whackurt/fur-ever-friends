import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MdDeleteOutline } from 'react-icons/md';
import {
	DeleteApplicationById,
	GetApplicationByAdopterId,
} from '../../services/Applications/applications.services';
import moment from 'moment/moment';

const Applications = () => {
	let { id } = useParams();
	const [showModal, setShowModal] = useState(false);
	const [applications, setApplications] = useState([]);
	const [idToDelete, setIdToDelete] = useState(null);
	const [revokeSuccess, setRevokeSuccess] = useState(false);

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	const revoke = async () => {
		const res = await DeleteApplicationById(idToDelete);
		console.log(res);
		if (res.status === 200) {
			setRevokeSuccess(true);
		}
	};

	const okay = () => {
		getApplications();
		setShowModal(!showModal);
		setRevokeSuccess(false);
		setIdToDelete(null);
	};

	const getApplications = async () => {
		const res = await GetApplicationByAdopterId(
			localStorage.getItem('adopterId')
		);
		setApplications(res.data.data.applications);
	};

	useEffect(() => {
		getApplications();
	}, []);

	useEffect(() => {
		console.log(idToDelete);
	}, [idToDelete]);

	return (
		<div className="overflow-x-auto w-full">
			{showModal && (
				<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
					<div className="absolute bg-white w-2/3 md:w-1/2 lg:w-1/3 p-6 rounded shadow-lg">
						<span
							onClick={toggleModal}
							className="cursor-pointer text-2xl absolute top-0 right-0 p-4"
						>
							&times;
						</span>
						<h2 className="font-bold">Revoke Application</h2>
						<div>
							<div className="flex py-4">
								<p className="">
									{revokeSuccess
										? 'Application revoked successfully.'
										: 'Are you sure you want to revoke this application?'}
								</p>
							</div>
							<div className="flex justify-end">
								{revokeSuccess ? (
									<button
										onClick={() => okay()}
										type="submit"
										className="mt-4 bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
									>
										Okay
									</button>
								) : (
									<button
										onClick={() => revoke()}
										type="submit"
										className="mt-4 bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
									>
										Revoke
									</button>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
			<div className="mt-6">
				<h1 className="font-bold text-2xl text-slate-600">
					My Applications for Adoption
				</h1>
			</div>
			<table className="w-full my-4 text-sm border  rounded-md text-left rtl:text-right text-gray-600 shadow-md">
				<thead className="text-xs text-white uppercase bg-secondary border-b border-gray-600">
					<tr>
						<th scope="col" className="px-6 py-3">
							Application ID
						</th>
						<th scope="col" className="px-6 py-3">
							Application Date
						</th>
						<th scope="col" className="px-6 py-3">
							Pet Name
						</th>
						<th scope="col" className="px-6 py-3">
							Type
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
							Revoke
						</th>
					</tr>
				</thead>
				{applications.length === 0 ? (
					<div className="flex justify-center py-4">
						No Application Data Available
					</div>
				) : null}

				<tbody>
					{applications.map((app) => (
						<tr className="bg-white border-b ">
							<th
								scope="row"
								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
							>
								{app._id}
							</th>
							<td className="px-6 py-4">
								{moment(app.applicationDate).format('MMM D, YYYY')}
							</td>
							<td className="px-6 py-4">{app.petId?.name}</td>
							<td className="px-6 py-4">{app.petId?.animalType}</td>
							<td className="px-6 py-4">{app.petId?.breed}</td>
							<td className="px-6 py-4">{app.petId?.age}</td>
							<td className="px-6 py-4">{app.petId?.adoptionFee}</td>
							<td className="px-6 py-4">
								<div
									className={`${
										app.status === 0
											? 'bg-yellow-600 '
											: app.status === 1
											? 'bg-green-600'
											: 'bg-red-600'
									} px-2 py-1 rounded-md text- text-center text-white`}
								>
									{app.status === 0
										? 'Pending'
										: app.status === 1
										? 'Approved'
										: 'Rejected'}
								</div>
							</td>
							<td className="px-6 py-4">
								<button
									onClick={() => {
										setIdToDelete(app._id);
										toggleModal();
									}}
								>
									<MdDeleteOutline color="#b50e1a" size={20} />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Applications;
