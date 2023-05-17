import { authorize } from '../helper/index.js';
import { PostModel, UserModel } from '../model/index.js';

/**
 * DELETE: http://localhost:8080/api/posts/:id
 * @param {
 * id:ObjectId
 * } req.params
 * @param {*} res
 */
export const deletePost = async (req, res) => {
	const { id } = req.params;
	try {
		if (!id) throw new Error('Post ID not provided');
		authorize(req)
			.then(async (payload) => {
				const _user = await UserModel.findById(payload?.id);
				if (!_user) throw new Error('User not found');
				const _post = await PostModel.findById(id);
				if (!_post) throw new Error('Post not found');
				const auth = _post.owner.equals(_user._id);
				if (!auth) throw new Error('User is unauthorized to delete post');
				await _post.deleteOne();
				return res.status(200).send({
					post: _post,
					message: 'Post deleted successfully',
				});
			})
			.catch((e) => {
				return res.status(400).send({
					post: null,
					message: e,
				});
			});
	} catch (err) {
		return res.status(400).send({
			post: null,
			message: err.message,
		});
	}
};
