import axios from 'axios';

export const registerUser = async (user) => {
	try {
		const response = await axios.post(`${process.env.SERVER_URL}/register`, {
			body: { ...user },
		});
		return response;
	} catch (e) {
		throw new Error(e);
	}
};

export const loginUser = async (user) => {
	try {
		const response = await axios.post(`${process.env.SERVER_URL}/login`, {
			body: { ...user },
		});
		return response;
	} catch (e) {
		throw new Error(e);
	}
};

export const createPost = async (post) => {
	try {
		const response = await axios.post(`${process.env.SERVER_URL}/post`, {
			body: { ...post },
		});
		return response;
	} catch (e) {
		throw new Error(e);
	}
};
