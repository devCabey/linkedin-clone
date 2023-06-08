import axios from 'axios';

export const updateSelf = async (user) => {
	try {
		const response = await axios.patch(`${process.env.SERVER_URL}/user`, {
			body: { ...user },
		});
		return response;
	} catch (e) {
		throw new Error(e);
	}
};

export const commentPost = async (id, comment) => {
	try {
		const response = await axios.patch(
			`${process.env.SERVER_URL}/posts/${id}/comment`,
			{
				body: { ...comment },
			}
		);
		return response;
	} catch (e) {
		throw new Error(e);
	}
};

export const updatePost = async (id, post) => {
	try {
		const response = await axios.patch(
			`${process.env.SERVER_URL}/posts/${id}`,
			{
				body: { ...post },
			}
		);
		return response;
	} catch (e) {
		throw new Error(e);
	}
};
