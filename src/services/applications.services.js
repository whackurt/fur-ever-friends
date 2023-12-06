import { api } from './axios';

export const CreateApplication = async (applicationData) => {
	try {
		const res = await api.post('/application', applicationData);
		return res;
	} catch (error) {
		return { error: error.message };
	}
};

export const GetApplications = async () => {
	try {
		const res = await api.get('/application');
		return res;
	} catch (error) {
		return { error: error.message };
	}
};

export const GetApplicationById = async (id) => {
	try {
		const res = await api.get(`/application/${id}`);
		return res;
	} catch (error) {
		return { error: error.message };
	}
};

export const GetApplicationByAdopterId = async (id) => {
	try {
		const res = await api.get(`/application/adopter/${id}`);
		return res;
	} catch (error) {
		return { error: error.message };
	}
};

export const UpdateApplicationById = async (id, updates) => {
	try {
		const res = await api.put(`/application/${id}`, updates);
		return res;
	} catch (error) {
		return { error: error.message };
	}
};

export const DeleteApplicationById = async (id) => {
	try {
		const res = await api.delete(`/application/${id}`);
		return res;
	} catch (error) {
		return { error: error.message };
	}
};
