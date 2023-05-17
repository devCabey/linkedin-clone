import { authorize } from '../helper/index.js';
import { UserModel } from '../model/index.js';

export const updateUser = async (req, res) => {
	const { lastName, firstName, about, profile } = req.body;
	try {
		const updater = {};
		if (firstName) updater.firstName = firstName;
		if (lastName) updater.lastName = lastName;
		if (about) updater.about = about;
		if (profile) updater.profile = profile;
		authorize(req)
			.then(async (payload) => {
				const _user = await UserModel.findById(payload?.id);
				if (!_user) throw new Error('User is not authorized');
				await _user.updateOne({
					$set: { ...updater },
				});
				return res.status(200).send({
					user: _user,
					message: 'User updated successfully',
				});
			})
			.catch((e) => {
				return res.status(400).send({
					user: null,
					message: e,
				});
			});
	} catch (err) {
		return res.status(400).send({
			user: null,
			message: err.message,
		});
	}
};
