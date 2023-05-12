import jwt from 'jsonwebtoken';

export const verifyUser = async (token) => {
	try {
		await jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
			if (err) throw new Error('User authentication failed');
			return decode;
		});
	} catch (err) {
		throw new Error('Unable to verify user');
	}
};
