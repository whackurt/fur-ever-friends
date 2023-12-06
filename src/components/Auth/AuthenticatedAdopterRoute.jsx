import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthenticatedPrivateRoute = ({ children }) => {
	if (localStorage.getItem('adopterToken')) {
		return <Navigate to={'/'} replace />;
	}

	return children;
};

export default AuthenticatedPrivateRoute;
