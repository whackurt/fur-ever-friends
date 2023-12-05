import { api } from '../API/axios';

export const LoginAdmin = async (creds) => {
	try {
		const res = await api.post('/auth/admin/login', creds);
		return res;
	} catch (error) {
		return { error: error.message };
	}
};

export const LoginAdopter = async (creds) => {
	try {
		const res = await api.post('/auth/login', creds);
		return res;
	} catch (error) {
		return { error: error.message };
	}
};
export const SignupAdopter = async (creds) => {
	try {
		const res = await api.post('/auth/signup', creds);
		return res;
	} catch (error) {
		return { error: error.message };
	}
};
