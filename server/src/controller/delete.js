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
				/** getting user using payload info from token */
				const _user = await UserModel.findById(payload?.id);
				if (!_user) throw new Error('User not found');
				/** getting post info from post id passed through req.params */
				const _post = await PostModel.findById(id);
				if (!_post) throw new Error('Post not found');
				/** checking if current user is the same as owner of post */
				const auth = _post.owner.equals(_user._id);
				if (!auth) throw new Error('User is unauthorized to delete post');
				/** deleting post */
				await _post.deleteOne();
				return res.status(200).send({
					post: _post,
					message: 'Post deleted successfully',
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
			post: null,
			message: err.message,
		});
	}
};

/**
 * DELETE: http://localhost:8080/api/posts/:id/comment/:commentId
 * @param {
 * id: ObjectId
 * commentId: ObjectId
 * } req.params
 * @param {*} res
 */
export const deleteComment = async (req, res) => {
	const { id, commentId } = req.params;
	authorize(req)
		.then(async (payload) => {
			/** getting post from post id from req.params */
			const _post = await PostModel.findById(id);
			if (!_post) throw new Error('Post not found');
			/** checking whether current user exist */
			const _user = await UserModel.findById(payload.id);
			if (!_user) throw new Error('User not found');
			/** getting all comments */
			const comments = [..._post.comments];
			if (!comments.length) throw new Error('Comment is empty');
			let data_id;
			/** getting index of comment to delete */
			const commentIndex = comments.findIndex((data) => {
				data_id = data._id.toString();
				return data_id == commentId;
			});
			/** checking whether comment exist */
			if (commentIndex === -1) throw new Error('Comment not found');
			/** removing comment and deleting */
			comments.splice(commentIndex, 1);
			await _post.updateOne({ $set: { comments } });
			return res.status(200).send({
				post: _post,
				message: 'Comment deleted successfully',
			});
		})
		.catch((e) => {
			return res.status(400).send({
				user: null,
				message: e?.message || e,
			});
		});
};
