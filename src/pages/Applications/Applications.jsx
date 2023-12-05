import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MdDeleteOutline } from 'react-icons/md';

const Applications = () => {
	let { id } = useParams();
	const [showModal, setShowModal] = useState(false);
	const toggleModal = () => {
		setShowModal(!showModal);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setShowModal(false);
	};

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
						<form onSubmit={handleSubmit}>
							<div className="flex py-4">
								<p className="">
									Are you sure you want to revoke this application?
								</p>
							</div>
							<div className="flex justify-end">
								<button
									type="submit"
									className="mt-4 bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
								>
									Revoke
								</button>
							</div>
						</form>
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
				<tbody>
					<tr className="bg-white border-b ">
						<th
							scope="row"
							className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
						>
							656d89ac8ea5ce5cfd2dfd4e
						</th>
						<td className="px-6 py-4">Dec 12, 2023</td>
						<td className="px-6 py-4">Ember</td>
						<td className="px-6 py-4">Dog</td>
						<td className="px-6 py-4">Jack Russell Terrier</td>
						<td className="px-6 py-4">1.5</td>
						<td className="px-6 py-4">6000</td>
						<td className="px-6 py-4">Pending</td>
						<td className="px-6 py-4">
							<button onClick={toggleModal}>
								<MdDeleteOutline color="#b50e1a" size={20} />
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Applications;
