import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthenticatedPrivateRoute = ({ children }) => {
	if (localStorage.getItem('adminToken')) {
		return <Navigate to={'/admin'} replace />;
	}

	return children;
};

export default AuthenticatedPrivateRoute;
