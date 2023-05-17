/** ALL GET REQUEST */
import { authorize } from '../helper/index.js';
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
		/** work on backend pagination */
		return res.status(200).send({
			users: _users,
			message: 'Users fetched successfully',
		});
	} catch (err) {
		return res.status(400).send({
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

		const { password, ...rest } = Object.assign({}, _user.toJSON());
		res.status(200).send({
			user: rest,
			message: 'User fetched sucessfully',
		});
	} catch (err) {
		res.status(400).send({
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

/**
 * GET:http://localhost:8080/api/users/:id/follow
 * @param {
 * 	id:ObjectId
 * } req.params
 * @param {
 * user: Object,
 * message: string
 * } res
 */
export const followUser = async (req, res) => {
	const { id } = req.params;

	authorize(req)
		.then(async (payload) => {
			/** checking whether id is your own id */
			if (payload.id.equals(id)) throw new Error('Cant follow self');

			const follower = await UserModel.findById(payload?.id);
			if (!follower) throw new Error('User not found');
			const following = await UserModel.findById(id);
			if (!following) throw new Error("User doesn't exist");

			/** checking if user follows user or not */
			const exist = await follower.following.includes(id);
			if (exist) throw new Error('Following user already');

			/** updating user following data */
			const followerFollows = [...follower.following, id];
			await follower.updateOne({ $set: { following: followerFollows } });

			/** updating other user follower data */
			const followingFollower = [...following.followers, follower._id];
			await following.updateOne({ $set: { followers: followingFollower } });

			/** removing password from data being sent as response */
			const { password, ...rest } = Object.assign({}, follower.toJSON());
			return res.status(200).send({
				user: rest,
				message: 'Following successful',
			});
		})
		.catch((e) => {
			return res.status(400).send({
				user: null,
				message: e?.message || e,
			});
		});
};

/**
 * GET:http://localhost:8080/api/users/:id/unfollow
 * @param {
 * 	id:ObjectId
 * } req.params
 * @param {
 * user: Object,
 * message: string
 * } res
 */
export const unfollowUser = async (req, res) => {
	const { id } = req.params;

	authorize(req)
		.then(async (payload) => {
			/** checking whether id is your own id */
			if (payload.id.equals(id)) throw new Error('Cant unfollow self');

			const follower = await UserModel.findById(payload?.id);
			if (!follower) throw new Error('User not found');
			const following = await UserModel.findById(id);
			if (!following) throw new Error("User doesn't exist");

			/** checking if user follows user or not */
			const exist = await follower.following.includes(id);
			if (!exist) throw new Error('Not following user');

			/** removing from user following */
			const followerFollows = follower.following.filter((_id) => {
				return !_id.equals(id);
			});
			await follower.updateOne({ $set: { following: followerFollows } });

			/** removing from other user followers */
			const followingFollower = following.followers.filter((_id) => {
				return !_id.equals(follower._id);
			});
			await following.updateOne({ $set: { followers: followingFollower } });

			/** removing password from data being sent as response */
			const { password, ...rest } = Object.assign({}, follower.toJSON());
			return res.status(200).send({
				user: rest,
				message: 'Unfollowing successful',
			});
		})
		.catch((e) => {
			return res.status(400).send({
				user: null,
				message: e?.message || e,
			});
		});
};
