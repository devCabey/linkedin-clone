import axios from 'axios';

export const getPosts = async () => {
	try {
		const response = await axios.get(`api/posts`);
		return response.data;
	} catch (e) {
		throw new Error(e);
	}
};

export const getPost = async (id) => {
	try {
		const response = await axios.get(`api/posts/${id}`);
		return response.data;
	} catch (e) {
		throw new Error(e);
	}
};

export const likePost = async (id) => {
	try {
		const response = await axios.get(
			`${process.env.SERVER_URL}/posts/${id}/like`
		);
		return response.data;
	} catch (e) {
		throw new Error(e);
	}
};

export const unlikePost = async (id) => {
	try {
		const response = await axios.get(
			`${process.env.SERVER_URL}/posts/${id}/dislike`
		);
		return response.data;
	} catch (e) {
		throw new Error(e);
	}
};

export const getUser = async (id) => {
	try {
		const response = await axios.get(`${process.env.SERVER_URL}/users/${id}`);
		return response.data;
	} catch (e) {
		throw new Error(e);
	}
};

export const getUsers = async (username) => {
	try {
		const response = await axios.get(
			`${process.env.SERVER_URL}/users/${username}`
		);
		return response.data;
	} catch (e) {
		throw new Error(e);
	}
};

export const followUser = async (id) => {
	try {
		const response = await axios.get(
			`${process.env.SERVER_URL}/users/${id}/follow`
		);
		return response.data;
	} catch (e) {
		throw new Error(e);
	}
};

export const unfollowUser = async (id) => {
	try {
		const response = await axios.get(
			`${process.env.SERVER_URL}/users/${id}/unfollow`
		);
		return response.data;
	} catch (e) {
		throw new Error(e);
	}
};
