import { Schema, SchemaTypes, model } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { token } from 'morgan';

export const UserSchema = new Schema({
	lastName: {
		type: SchemaTypes.String,
	},
	firstName: {
		type: SchemaTypes.String,
	},
	bio: {
		type: SchemaTypes.String,
	},
	profile: {
		type: SchemaTypes.String,
	},
	email: {
		type: SchemaTypes.String,
	},
	phone: {
		type: SchemaTypes.String,
	},
	password: {
		type: SchemaTypes.String,
	},
	following: [
		{
			type: SchemaTypes.ObjectId,
			ref: 'User',
		},
	],
	followers: [
		{
			type: SchemaTypes.ObjectId,
			ref: 'User',
		},
	],
});

UserSchema.pre('save', async function (next) {
	if (!this.isModified('password')) return next();
	try {
		let salt = await bcrypt.genSalt(10);
		let hash = await bcrypt.hash(this.password, salt);
		this.password = hash;
		next();
	} catch (err) {
		next(err);
	}
});

UserSchema.methods.comparePassword = async function (password) {
	return await bcrypt.compare(password, this.password);
};

UserSchema.methods.generateToken = async function () {
	token = jwt.sign(
		{
			id: this._id,
		},
		process.env.JWT_SECRET,
		{ expiresIn: '1h' }
	);
};

export const UserModel = model('User', UserSchema);
