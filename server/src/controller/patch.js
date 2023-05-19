import { authorize } from '../helper/index.js';
import { PostModel, UserModel } from '../model/index.js';

/**
 * PATCH: http://localhost:8080/api/user
 * @param {
 * 	firstName: string || null,
 *		lastName: string || null,
 *		about: string || null,
 *	 	profile: string || null
 * } req.body
 * @param {*} res
 */
export const updateUser = async (req, res) => {
	try {
		const { lastName, firstName, about, profile } = req.body;
		const updater = {};
		if (firstName) updater.firstName = firstName;
		if (lastName) updater.lastName = lastName;
		if (about) updater.about = about;
		if (profile) updater.profile = profile;
		if (Object.keys(updater).length == 0)
			throw new Error("Can't update specified field");
		authorize(req)
			.then(async (payload) => {
				const _user = await UserModel.findById(payload?.id);
				if (!_user) throw new Error('User is not authorized');
				await _user.updateOne({
					$set: { ...updater },
				});
				return res.status(200).send({
					user: _user,
					message: 'User updated successfully',
				});
			})
			.catch((e) => {
				return res.status(400).send({
					user: null,
					message: e?.message || e,
				});
			});
	} catch (err) {
		return res.status(400).send({
			user: null,
			message: err?.message,
		});
	}
};

/**
 * PATCH: http://localhost:8080/api/post/:id
 * @param {
 * 		description: string || null,
 *		picture: [string] || null,
 *		video: [string] || null,
 * } req.params
 * @param {
 * 		id: ObjectId
 * } req.params
 */
export const updatePost = async (req, res) => {
	const { id } = req.params;
	authorize(req)
		.then(async (payload) => {
			const _post = await PostModel.findById(id);
			if (!_post) throw new Error('Post not found');
			const _user = await UserModel.findById(payload.id);
			if (!_user) throw new Error('User not found');
			if (!_user._id.equals(_post.owner))
				throw new Error('User is not authorized to update post');

			await _post.updateOne({ $set: { ...req.body } });
			return res.status(200).send({
				post: _post,
				message: 'Post updated successfully',
			});
		})
		.catch((e) => {
			return res.status(400).send({
				post: null,
				message: e?.message || e,
			});
		});
};
/**
 * PATCH: http://localhost:8080/api/post/:id
 * @param {
* 		description: string!
* } req.body
* @param {
* 		id: ObjectId
* } req.params
*/
export const commentPost = async (req, res) => {
	const { description } = req.body;
	const { id } = req.params;
	authorize(req)
		.then(async (payload) => {
			const _post = await PostModel.findById(id);
			if (!_post) throw new Error('Post not found');
			const _user = await UserModel.findById(payload.id);
			if (!_user) throw new Error('User not found');
			const comments = [
				..._post.comments,
				{
					description,
					user: payload.id,
				},
			];
			await _post.updateOne({ $set: { comments } });
			return res.status(200).send({
				post: _post,
				message: 'Comment saved successfully',
			});
		})
		.catch((e) => {
			return res.status(400).send({
				post: null,
				message: e?.message || e,
			});
		});
};
