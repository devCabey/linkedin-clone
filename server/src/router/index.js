import { Router } from 'express';
import { loginUser, registerUser } from '../controller/index.js';

const router = Router();

/** ALL ON AUTH */

/** route for registering user */
router.route('/register').post(registerUser);

/** route for logging in user */
router.route('/login').post(loginUser);

/** ALL GET REQUEST */

/** ALL POST REQUEST */

/** ALL PATCH REQUEST */

/** ALL PUT REQUEST */

/** ALL DELETE REQUEST */

export default router;
