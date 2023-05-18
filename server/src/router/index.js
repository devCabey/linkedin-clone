import { Router } from 'express';
import {
	commentPost,
	createPost,
	deleteComment,
	deletePost,
	dislikePost,
	followUser,
	getPost,
	getPosts,
	getUser,
	getUsers,
	likePost,
	loginUser,
	registerUser,
	unfollowUser,
	updatePost,
	updateUser,
} from '../controller/index.js';

const router = Router();

/** ALL ON AUTH */

/** route for registering user */
router.route('/register').post(registerUser);

/** route for logging in user */
router.route('/login').post(loginUser);

/** ALL GET REQUEST */

/** route for getting user based of id */
router.route('/users/:id').get(getUser);
/** route for getting all users base on username or nothing */
router.route('/users').get(getUsers);
/**route for following a user */
router.route('/users/:id/follow').get(followUser);
/**route for unfollowing a user */
router.route('/users/:id/unfollow').get(unfollowUser);
/** route for getting all posts */
router.route('/posts').get(getPosts);
/** route for getting a post based on id*/
router.route('/posts/:id').get(getPost);
/** route for liking post*/
router.route('/posts/:id/like').get(likePost);
/** route for disliking post*/
router.route('/posts/:id/dislike').get(dislikePost);

/** ALL POST REQUEST */
/**route for creating a new post */
router.route('/post').post(createPost);

/** ALL PATCH REQUEST */
router.route('/user').patch(updateUser);
router.route('/posts/:id/comment').patch(commentPost);
router.route('/posts/:id').patch(updatePost);

/** ALL PUT REQUEST */

/** ALL DELETE REQUEST */
router.route('/posts/:id').delete(deletePost);
router.route('/posts/:id/comment/:commentId').delete(deleteComment);
export default router;
