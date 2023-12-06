import { api } from './axios';

export const GetAdopterById = async (id) => {
	try {
		const res = await api.get(`/adopter/${id}`);
		return res;
	} catch (error) {
		return { error: error.message };
	}
};
