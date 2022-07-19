import axios from 'axios';

export const axiosInstance = axios.create({
	baseURL: 'http://localhost:8800/api',
});

export const axiosJWTInstance = (currentUser) => {
	return axios.create({
		baseURL: 'http://localhost:8800/api',
		headers: {
			authorization: 'Bearer ' + currentUser?.accessToken,
		},
	});
};
