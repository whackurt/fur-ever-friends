import React, { useEffect, useState } from 'react';
import { MdOpenInNew, MdDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import {
	DeleteApplicationById,
	GetApplications,
} from '../../services/Applications/applications.services';

const Dashboard = () => {
	const [applications, setApplications] = useState([]);

	const getApplications = async () => {
		const res = await GetApplications();

		if (res.status === 200) {
			setApplications(res.data.data.applications);
		}
	};

	useEffect(() => {
		getApplications();
	}, []);

	return (
		<div className="relative overflow-x-auto">
			<div className="">
				<h1 className="font-bold text-2xl text-slate-600">
					Applications for Adoption
				</h1>
			</div>
			<table className="w-full my-4 text-sm border  rounded-md text-left rtl:text-right text-gray-600">
				<thead className="text-xs text-white uppercase bg-secondary">
					<tr>
						<th scope="col" className="px-6 py-3">
							Application ID
						</th>
						<th scope="col" className="px-6 py-3">
							Adopter Name
						</th>
						<th scope="col" className="px-6 py-3">
							Pet Name
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
					{applications.map((app) => (
						<tr key={app._id} className="bg-white border-b">
							<th
								scope="row"
								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
							>
								{app._id}
							</th>
							<td className="px-6 py-4">{app.adopterId?.name}</td>
							<td className="px-6 py-4">{app.petId?.name}</td>
							<td className="px-6 py-4">
								<div
									className={`${
										app.status === 0
											? 'bg-yellow-600 '
											: app.status === 1
											? 'bg-green-600 '
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
								<div className="flex items-center gap-x-1">
									<Link to={`/admin/applications/${app._id}`}>
										<MdOpenInNew size={20} />
									</Link>
									<button
										onClick={async () => {
											await DeleteApplicationById(app._id);
											getApplications();
										}}
									>
										<MdDeleteOutline size={20} />
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

export default Dashboard;
