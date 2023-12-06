import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://pet-adoption-system-backend-production.up.railway.app/api',
	// baseURL: 'http://127.0.0.1:3000/api',
});
