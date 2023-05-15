import { Router } from 'express';
import {
	createPost,
	getUser,
	getUsers,
	loginUser,
	registerUser,
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
router.route('/users').get(getUsers);

/** ALL POST REQUEST */
router.route('/post').post(createPost);

/** ALL PATCH REQUEST */

/** ALL PUT REQUEST */

/** ALL DELETE REQUEST */

export default router;
