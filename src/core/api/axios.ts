import axios from 'axios';
import Cookies from 'js-cookie';

// Constants
import { CONFIG } from 'constants/config';
import { StorageKeys } from 'constants/storageKeys';

// Actions
import { logout } from 'redux/user-service/reducer';

const axiosConfig = {
	baseURL: CONFIG.BASE_URL,
};

const instance = axios.create(axiosConfig);

export const initInterceptor = (store: any) => {
	// Interceptors
	instance.interceptors.request.use(
		async req => {
			const token: string = Cookies.get(StorageKeys.AUTH_TOKEN) || '';

			if (token && req.url) {
				Object.assign(req.headers, { Authorization: `Bearer ${token}` });
			}
			return req;
		},
		error => {
			return Promise.reject(error.response);
		}
	);

	instance.interceptors.response.use(
		response => response,
		async error => {
			const { dispatch } = store;
			if (error?.response?.status === 401) {
				await dispatch(logout());
			} else {
				throw error.response;
			}
		}
	);
};

export default instance;
