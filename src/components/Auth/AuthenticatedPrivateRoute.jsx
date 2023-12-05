import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const AuthenticatedPrivateRoute = ({ children }) => {
	// const navigate = useNavigate()
	if (localStorage.getItem('adminToken')) {
		return <Navigate to={'/admin'} replace />;
	}

	if (localStorage.getItem('adopterToken')) {
		return <Navigate to={'/'} replace />;
	}

	return children;
};

export default AuthenticatedPrivateRoute;
