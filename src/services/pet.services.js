import axios from 'axios';
import { api } from './axios';

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

export const UploadPetImage = async (imgFile) => {
	try {
		const data = new FormData();

		data.append('file', imgFile);
		data.append('upload_preset', 'gobt82b5');

		try {
			let cloudName = 'dyi2sla5u';
			let resourceType = 'image';
			let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

			const res = await axios.post(api, data);
			const { secure_url } = res.data;

			return secure_url;
		} catch (error) {
			console.error(error);
		}
	} catch (error) {
		console.error(error);
	}
};
