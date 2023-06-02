import { UserModel } from '../model/index.js';

/** POST: http://localhost:8080/api/register
 * @param {
 * email:string!
 * password:string!
 * } body
 */
export const registerUser = async (req, res) => {
	const { email, password } = req.body;
	try {
		/** checking whether user already exist */
		const _user = await UserModel.findOne({ email });
		if (_user) throw new Error('User already exist');
		/** creating a new user */
		const newUser = new UserModel({
			email,
			password,
		});
		await newUser.save();

		return res
			.status(200)
			.send({ message: 'User Created Successfully', user: null });
	} catch (err) {
		return res.status(401).send({
			message: err.message,
			user: {},
		});
	}
};

/** POST: http://localhost:8080/api/login
 * @param {
 * email:string!,
 * password:string!
 * } body
 */

export const loginUser = async (req, res) => {
	const { email, password } = req.body;
	try {
		/** checking whether user provided email before proceeding */
		if (!email) throw new Error('Provide the email of user');
		/** getting user info */
		const _user = await UserModel.findOne({ email });
		if (!_user) throw new Error("User doesn't exist");
		const validPassword = await _user.comparePasswords(password);
		if (!validPassword) throw new Error('Password does not match');
		/** generating token */
		const token = await _user.generateToken();
		if (!token) throw new Error('Unable to generate token');
		return res.status(201).send({
			message: 'Login successful',
			user: {
				token,
			},
		});
	} catch (err) {
		return res.status(401).send({
			message: err.message,
			user: {},
		});
	}
};
