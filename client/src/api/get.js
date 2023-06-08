import axios from 'axios';

export const getPosts = async () => {
	try {
		const response = await axios.get(`${process.env.SERVER_URL}/posts`);
		return response;
	} catch (e) {
		throw new Error(e);
	}
};

export const getPost = async (id) => {
	try {
		const response = await axios.get(`${process.env.SERVER_URL}/posts/${id}`);
		return response;
	} catch (e) {
		throw new Error(e);
	}
};
