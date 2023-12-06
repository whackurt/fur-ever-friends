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
import AuthenticatedPrivateRoute from './components/Auth/AuthenticatedPrivateRoute';
import PrivateRoute from './components/Auth/PrivateRoute';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					{/* Authentication Routes */}
					<Route
						path="/admin/login"
						element={
							<AuthenticatedPrivateRoute>
								<AdminLogin />
							</AuthenticatedPrivateRoute>
						}
					/>
					<Route
						path="/signup"
						element={
							<AuthenticatedPrivateRoute>
								<AdopterSignup />
							</AuthenticatedPrivateRoute>
						}
					/>
					<Route
						path="/login"
						element={
							<AuthenticatedPrivateRoute>
								<AdopterLogin />
							</AuthenticatedPrivateRoute>
						}
					/>

					{/* Admin Routes */}
					<Route
						path="/admin"
						element={
							<PrivateRoute user={'admin'} redirect={'/admin/login'}>
								<AdminLayout location={'Dashboard'} children={<Dashboard />} />
							</PrivateRoute>
						}
					/>
					<Route
						path="/admin/applications/:id"
						element={
							<PrivateRoute user={'admin'} redirect={'/admin/login'}>
								<AdminLayout
									location={'View Application'}
									children={<ViewApplication />}
								/>
							</PrivateRoute>
						}
					/>
					<Route
						path="/admin/manage-pets"
						element={
							<PrivateRoute user={'admin'} redirect={'/admin/login'}>
								<AdminLayout
									location={'Manage Pets'}
									children={<ManagePets />}
								/>
							</PrivateRoute>
						}
					/>
					<Route
						path="/admin/manage-pets/add"
						element={
							<PrivateRoute user={'admin'} redirect={'/admin/login'}>
								<AdminLayout
									location={'Manage Pets'}
									children={<AddNewPet />}
								/>
							</PrivateRoute>
						}
					/>

					{/* Adopter Routes */}
					<Route
						path="/"
						element={
							<PrivateRoute user={'adopter'} redirect={'/login'}>
								<AdopterLayout location={'Home'} children={<Home />} />
							</PrivateRoute>
						}
					/>
					<Route
						path="/pet"
						element={
							<PrivateRoute user={'adopter'} redirect={'/login'}>
								<AdopterLayout location={'Home'} children={<Home />} />
							</PrivateRoute>
						}
					/>
					<Route
						exact
						path="/pet/:id"
						element={
							<PrivateRoute user={'adopter'} redirect={'/login'}>
								<AdopterLayout location={'Home'} children={<ViewPet />} />
							</PrivateRoute>
						}
					/>
					<Route
						path="/pet/adopt/confirm/:id"
						element={
							<PrivateRoute user={'adopter'} redirect={'/login'}>
								<AdopterLayout
									location={'Home'}
									children={<ConfirmAdoption />}
								/>
							</PrivateRoute>
						}
					/>
					<Route
						path="/applications"
						element={
							<PrivateRoute user={'adopter'} redirect={'/login'}>
								<AdopterLayout
									location={'Applications'}
									children={<Applications />}
								/>
							</PrivateRoute>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
