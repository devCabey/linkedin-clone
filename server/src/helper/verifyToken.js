import jwt from 'jsonwebtoken';

export const verifyUser = async (token) => {
	try {
		const payload = await jwt.verify(token, process.env.JWT_SECRET);
		if (!payload) throw new Error('User authentication failed');
		return payload;
	} catch (err) {
		throw new Error('Unable to verify user');
	}
};
