/** ALL GET REQUEST */

import { PostModel, UserModel } from '../model/index.js';

/** GET: http://localhost:8080/api/users
 * @param {
 * username:string
 * } req.query
 */

export const getUsers = async (req, res) => {
	/** Getting username from request query if provided */
	const { username } = req.query;
	try {
		/** Fetching user based of query parameter or fetching all users */
		const _users = username
			? await UserModel.find({
					$or: [
						{ firstName: { $regex: username, $options: 'i' } },
						{ lastName: { $regex: username, $options: 'i' } },
						{ email: { $regex: username, $options: 'i' } },
					],
			  })
			: await UserModel.find();
		// work on backend pagination
		return res.status(201).send({
			users: _users,
			message: 'Users fetched successfully',
		});
	} catch (err) {
		return res.status(401).send({
			users: [],
			message: 'Unable to fetch users',
		});
	}
};

/** GET: http://localhost:8080/api/users/:id
 * @param {
 * username:string
 * } req.params
 */
export const getUser = async (req, res) => {
	/** Getting user id from the request */
	const { id } = req.params;
	try {
		/** Making sure user id is provided */
		if (!id) throw new Error('User details not provided');
		/** Fetching user */
		const _user = await UserModel.findById(id);
		if (!_user) throw new Error('User not found');
		res.status(201).send({
			user: _user,
			message: 'User fetched sucessfully',
		});
	} catch (err) {
		res.status(401).send({
			user: {},
			message: err.message,
		});
	}
};

/**
 * GET:http://localhost:8080/api/posts
 * @param {} req
 * @param {
 * posts: Array,
 * message: string
 * } res
 */

export const getPosts = async (req, res) => {
	try {
		/**fetching posts */
		const _posts = await PostModel.find();
		res.status(201).send({
			posts: _posts,
			message: 'Post fetched successfully',
		});
	} catch (err) {
		return res.status(401).send({
			posts: [],
			message: 'Unable to fetch posts',
		});
	}
};

/**
 * GET:http://localhost:8080/api/posts/:id
 * @param {
 * id:ObjectId
 * } req.params
 * @param {
 * posts: Object,
 * message: string
 * } res
 */
export const getPost = async (req, res) => {
	// getting product id from params
	const { id } = req.params;
	try {
		/** verifying whether the post id was provided  */
		if (!id) throw new Error('Product ID not provided');
		/**Fetching post based on the id */
		const _post = await PostModel.findById(id);
		if (!_post) throw new Error('Post not found');
		return res.status(201).send({
			post: _post,
			message: 'Post fetched succesfully',
		});
	} catch (err) {
		return res.status(201).send({
			post: {},
			message: err.message,
		});
	}
};
