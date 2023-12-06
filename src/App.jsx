import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLogin from './pages/Auth/AdminLogin';
import AdopterSignup from './pages/Auth/AdopterSignup';
import AdopterLogin from './pages/Auth/AdopterLogin';
import Dashboard from './pages/Admin/Dashboard';
import ManagePets from './pages/Admin/ManagePets';
import Home from './pages/Adopter/Home';
import ViewPet from './pages/Adopter/ViewPet';
import ConfirmAdoption from './pages/Adopter/ConfirmAdoption';
import Applications from './pages/Adopter/Applications';
import AdminLayout from './components/Layouts/AdminLayout';
import AdopterLayout from './components/Layouts/AdopterLayout';
import { ViewApplication } from './pages/Admin/ViewApplication';
import AddNewPet from './pages/Admin/AddNewPet';
import AuthenticatedAdminRoute from './components/Auth/AuthenticatedAdminRoute';
import AuthenticatedAdopterRoute from './components/Auth/AuthenticatedAdopterRoute';
import AdminPrivateRoute from './components/Auth/AdminPrivateRoute';
import AdopterPrivateRoute from './components/Auth/AdopterPrivateRoute';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					{/* Authentication Routes */}
					<Route
						path="/admin/login"
						element={
							<AuthenticatedAdminRoute>
								<AdminLogin />
							</AuthenticatedAdminRoute>
						}
					/>
					<Route
						path="/signup"
						element={
							<AuthenticatedAdopterRoute>
								<AdopterSignup />
							</AuthenticatedAdopterRoute>
						}
					/>
					<Route
						path="/login"
						element={
							<AuthenticatedAdopterRoute>
								<AdopterLogin />
							</AuthenticatedAdopterRoute>
						}
					/>

					{/* Admin Routes */}
					<Route
						path="/admin"
						element={
							<AdminPrivateRoute user={'admin'} redirect={'/admin/login'}>
								<AdminLayout location={'Dashboard'} children={<Dashboard />} />
							</AdminPrivateRoute>
						}
					/>
					<Route
						path="/admin/applications/:id"
						element={
							<AdminPrivateRoute user={'admin'} redirect={'/admin/login'}>
								<AdminLayout
									location={'View Application'}
									children={<ViewApplication />}
								/>
							</AdminPrivateRoute>
						}
					/>
					<Route
						path="/admin/manage-pets"
						element={
							<AdminPrivateRoute user={'admin'} redirect={'/admin/login'}>
								<AdminLayout
									location={'Manage Pets'}
									children={<ManagePets />}
								/>
							</AdminPrivateRoute>
						}
					/>
					<Route
						path="/admin/manage-pets/add"
						element={
							<AdminPrivateRoute user={'admin'} redirect={'/admin/login'}>
								<AdminLayout
									location={'Manage Pets'}
									children={<AddNewPet />}
								/>
							</AdminPrivateRoute>
						}
					/>

					{/* Adopter Routes */}
					<Route
						path="/"
						element={
							<AdopterPrivateRoute user={'adopter'} redirect={'/login'}>
								<AdopterLayout location={'Home'} children={<Home />} />
							</AdopterPrivateRoute>
						}
					/>
					<Route
						path="/pet"
						element={
							<AdopterPrivateRoute user={'adopter'} redirect={'/login'}>
								<AdopterLayout location={'Home'} children={<Home />} />
							</AdopterPrivateRoute>
						}
					/>
					<Route
						exact
						path="/pet/:id"
						element={
							<AdopterPrivateRoute user={'adopter'} redirect={'/login'}>
								<AdopterLayout location={'Home'} children={<ViewPet />} />
							</AdopterPrivateRoute>
						}
					/>
					<Route
						path="/pet/adopt/confirm/:id"
						element={
							<AdopterPrivateRoute user={'adopter'} redirect={'/login'}>
								<AdopterLayout
									location={'Home'}
									children={<ConfirmAdoption />}
								/>
							</AdopterPrivateRoute>
						}
					/>
					<Route
						path="/applications"
						element={
							<AdopterPrivateRoute user={'adopter'} redirect={'/login'}>
								<AdopterLayout
									location={'Applications'}
									children={<Applications />}
								/>
							</AdopterPrivateRoute>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
