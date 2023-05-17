import { UserModel } from '../model/index.js';

/** POST: http://localhost:8080/api/register
 * @param {
 * email:string!,
 * password:string!
 * } body
 */
export const registerUser = async (req, res) => {
	const { email, password } = req.body;
	try {
		const _user = await UserModel.findOne({ email });
		if (_user) throw new Error('User already exist');
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
		if (!email) throw new Error('Provide the email of user');
		const _user = await UserModel.findOne({ email });
		if (!_user) throw new Error("User doesn't exist");
		const validPassword = await _user.comparePasswords(password);
		if (!validPassword) throw new Error('Password does not match');
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
