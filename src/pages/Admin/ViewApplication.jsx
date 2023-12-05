import React from 'react';
import { useParams } from 'react-router-dom';

export const ViewApplication = () => {
	let { id } = useParams();

	return (
		<div className="flex flex-col items-center justify-center">
			<p className="text-2xl font-medium mb-3">Application for Adoption</p>
			<div className="w-2/5 shadow-md p-4 border rounded-md">
				<div className="flex flex-col py-2">
					<h1 className="font-bold text-primary">Application ID</h1>
					<p className="pl-4">{id}</p>
				</div>
				<p className="font-medium text-xl pt-4 text-primary">Pet Information</p>
				<hr />
				<div className="flex flex-col py-2">
					<h1 className="font-medium">Pet Name</h1>
					<p className="pl-4">Coffee</p>
				</div>
				<div className="flex flex-col py-2">
					<h1 className="font-medium">Type</h1>
					<p className="pl-4">Dog</p>
				</div>
				<div className="flex flex-col py-2">
					<h1 className="font-medium">Breed</h1>
					<p className="pl-4">Jack russell Terrier</p>
				</div>
				<div className="flex flex-col py-2">
					<h1 className="font-medium">Age</h1>
					<p className="pl-4">0.5</p>
				</div>
				<div className="flex flex-col py-2">
					<h1 className="font-medium">Adoption Fee</h1>
					<p className="pl-4">Php 6000</p>
				</div>
				<div className="flex flex-col py-2">
					<h1 className="font-medium">Status</h1>
					<p className="pl-4">Available for Adoption</p>
				</div>

				<p className="font-medium text-xl pt-4 text-primary">
					Adopter Information
				</p>
				<hr />
				<div className="flex flex-col py-2">
					<h1 className="font-medium">Name</h1>
					<p className="pl-4">Kurt Timajo</p>
				</div>
				<div className="flex flex-col py-2">
					<h1 className="font-medium">Address</h1>
					<p className="pl-4">Bulua, Cagayan de Oro</p>
				</div>
				<div className="flex flex-col py-2">
					<h1 className="font-medium">Phone</h1>
					<p className="pl-4">+63 0984389598</p>
				</div>

				<div className="flex justify-center gap-x-6">
					<button
						// onClick={}
						className="border w-full rounded-md my-5 py-2 bg-green-600 hover:bg-green-500 text-white"
					>
						Approve
					</button>
					<button
						// onClick={}
						className="border w-full rounded-md my-5 py-2 bg-primary hover:bg-secondary text-white"
					>
						Reject
					</button>
				</div>
			</div>
		</div>
	);
};
