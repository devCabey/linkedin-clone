import { verifyUser } from '../helper/index.js';
import { PostModel, UserModel } from '../model/index.js';

/**
 * POST: http://localhost:8080/api/post
 * @param {
 * description: string || null,
 * picture:string || null,
 * video:string || null ,
 * } req.body
 * @param {
 * post:Object || null
 * message:string
 * } res
 */

export const createPost = async (req, res) => {
	try {
		/**Get Authorization header */
		const _token = req.headers.authorization;
		if (!_token) throw new Error('Token not provided');
		const token = _token.split(' ')[1];

		const payload = await verifyUser(token);
		if (!payload) throw new Error('Invalid token');
		/** verify that user exist in the database */
		const _user = await UserModel.findById(payload.id);
		if (!_user) throw new Error('User not found');
		/** Create post */
		const post = new PostModel({ ...req.body, owner: _user });
		await post.save();
		return res.status(201).send({
			post,
			message: 'Post created successfully',
		});
	} catch (err) {
		res.status(401).send({
			post: {},
			message: err.message,
		});
	}
};
