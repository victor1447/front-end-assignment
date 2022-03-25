import axios from 'axios';

const API_URL = 'https://book.tripx.se/wp-json/tripx/v1/destinations';

const getBooks = async () => {
	try {
		const response = await axios.get(API_URL);

		return response;
	} catch (error) {
		throw error;
	}
};


export { getBooks };