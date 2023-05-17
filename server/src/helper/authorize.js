import { verifyUser } from './index.js';

export const authorize = async (req) => {
	return new Promise(async (resolve, reject) => {
		try {
			/**Get Authorization header */
			const _token = req.headers.authorization;
			if (!_token) throw new Error('Authorization token not provided');
			const token = _token.split(' ')[1];

			const payload = await verifyUser(token);
			if (!payload) throw new Error('Invalid token');
			resolve(payload);
		} catch (err) {
			reject(err.message);
		}
	});
};
