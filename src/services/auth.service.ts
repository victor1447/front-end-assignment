import axios from 'axios';
import { Auth } from '../@types/auth';

const API_URL = 'https://tripx-test-functions.azurewebsites.net/api/login';

const authLogin = async ({ username, password }: Auth) => {
	try {
		const response = await axios.post(API_URL, {
			username,
			password,
		});

		return response;
	} catch (error) {
		throw error;
	}
};

export { authLogin };
