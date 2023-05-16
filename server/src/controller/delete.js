import { PostModel } from '../model/index.js';

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
		const _post = await PostModel.findById(id);
		if (!_post) throw new Error('Post not found');
		await _post.deleteOne();
		return res.status(200).send({
			post: _post,
			message: 'Post deleted successfully',
		});
	} catch (err) {
		return res.status(401).send({
			post: null,
			message: err.message,
		});
	}
};
