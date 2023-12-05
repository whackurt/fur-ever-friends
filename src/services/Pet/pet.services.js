import { api } from '../API/axios';

export const CreatePet = async (petData) => {
	try {
		const res = await api.post('/pet', petData);
		return res;
	} catch (error) {
		return { error: error.message };
	}
};

export const GetPets = async () => {
	try {
		const res = await api.get('/pet');
		return res;
	} catch (error) {
		return { error: error.message };
	}
};

export const GetPetById = async (id) => {
	try {
		const res = await api.get(`/pet/${id}`);
		return res;
	} catch (error) {
		return { error: error.message };
	}
};

export const UpdatePetById = async (id, updates) => {
	try {
		const res = await api.put(`/pet/${id}`, updates);
		return res;
	} catch (error) {
		return { error: error.message };
	}
};

export const DeletePetById = async (id) => {
	try {
		const res = await api.delete(`/pet/${id}`);
		return res;
	} catch (error) {
		return { error: error.message };
	}
};
