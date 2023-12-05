import React from 'react';
import { useParams } from 'react-router-dom';

const ConfirmAdoption = () => {
	const { id } = useParams();

	return <div>ConfirmAdoption {id}</div>;
};

export default ConfirmAdoption;
