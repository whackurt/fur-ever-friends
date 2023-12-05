import React from 'react';
import { MdOpenInNew } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Dashboard = () => {
	return (
		<div class="relative overflow-x-auto">
			<div className="">
				<h1 className="font-bold text-2xl text-slate-600">
					Applications for Adoption
				</h1>
			</div>
			<table class="w-full my-4 text-sm border  rounded-md text-left rtl:text-right text-gray-600">
				<thead class="text-xs text-white uppercase bg-secondary">
					<tr>
						<th scope="col" class="px-6 py-3">
							Application ID
						</th>
						<th scope="col" class="px-6 py-3">
							Adopter Name
						</th>
						<th scope="col" class="px-6 py-3">
							Pet Name
						</th>
						<th scope="col" class="px-6 py-3">
							Status
						</th>
						<th scope="col" class="px-6 py-3">
							Actions
						</th>
					</tr>
				</thead>
				<tbody>
					<tr class="bg-white border-b">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
						>
							9182787837487
						</th>
						<td class="px-6 py-4">Kurt Timajo</td>
						<td class="px-6 py-4">Coffee</td>
						<td class="px-6 py-4">Pending</td>
						<td class="px-6 py-4">
							<Link to={'/admin/applications/1827837917297'}>
								<MdOpenInNew size={15} />
							</Link>
						</td>
					</tr>
					<tr class="bg-white border-b ">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
						>
							9182787837487
						</th>
						<td class="px-6 py-4">Silver</td>
						<td class="px-6 py-4">Laptop</td>
						<td class="px-6 py-4">$2999</td>
						<td class="px-6 py-4">
							<Link to={'/admin/applications/656d89ac8ea5ce5cfd2dfd4e'}>
								<MdOpenInNew size={15} />
							</Link>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Dashboard;
