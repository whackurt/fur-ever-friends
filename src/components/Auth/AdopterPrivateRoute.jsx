import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ redirect, children, user }) => {
	if (!localStorage.getItem('adopterToken') && user === 'adopter') {
		return <Navigate to={redirect} replace />;
	}
	return children;
};

export default PrivateRoute;
