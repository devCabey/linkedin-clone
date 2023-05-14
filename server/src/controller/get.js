/** ALL GET REQUEST */

import { UserModel } from '../model/index.js';

/** GET: http://localhost:8080/api/users/username
 * @param {
 * username:string
 * } req.params
 */

export const getUserByUsername = async (req, res) => {
	const { username } = req.params;
	try {
		if (!username) throw new Error('Username not provided');
		const _users = await UserModel.find({
			$or: [
				{ firstName: { $regex: username, $options: 'i' } },
				{ lastName: { $regex: username, $options: 'i' } },
			],
		});
		if (!_users) throw new Error('User not found');
		return res.status(201).send({
			user: _users,
			message: 'Users fetched successfully',
		});
	} catch (err) {
		return res.status(401).send({
			user: {},
			message: err.message,
		});
	}
};

/** GET: http://localhost:8080/api/users/:id
 * @param {
 * username:string
 * } req.params
 */
export const getUserById = async (req, res) => {
	const { id } = req.params;
	try {
		if (!id) throw new Error('User ID not provided');
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
