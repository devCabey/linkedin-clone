import axios from 'axios';

export const deletePost = async (id) => {
	try {
		const response = await axios.get(`${process.env.SERVER_URL}/posts/${id}`);
		return response;
	} catch (e) {
		throw new Error(e);
	}
};

export const deletePostComment = async (id, commentId) => {
	try {
		const response = await axios.get(
			`${process.env.SERVER_URL}/posts/${id}/comment/${commentId}`
		);
		return response;
	} catch (e) {
		throw new Error(e);
	}
};
