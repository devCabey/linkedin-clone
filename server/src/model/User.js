import { Schema, SchemaTypes, model } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const UserSchema = new Schema({
	lastName: {
		type: SchemaTypes.String,
	},
	firstName: {
		type: SchemaTypes.String,
	},
	about: {
		type: SchemaTypes.String,
	},
	profile: {
		type: SchemaTypes.String,
	},
	email: {
		type: SchemaTypes.String,
		required: true,
		unique: true,
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
	followerNum: {
		type: SchemaTypes.Number,
	},
	followers: [
		{
			type: SchemaTypes.ObjectId,
			ref: 'User',
		},
	],
	followingNum: {
		type: SchemaTypes.Number,
	},
});

UserSchema.pre('save', async function (next) {
	if (!this.isModified('password')) return next();
	try {
		let salt = await bcrypt.genSalt(10);
		let hash = await bcrypt.hash(this.password, salt);
		this.password = hash;
		this.followerNum = this.followers.length;
		this.followingNum = this.following.length;
		next();
	} catch (err) {
		next(err);
	}
});

UserSchema.methods.comparePasswords = async function (password) {
	const valid = await bcrypt.compare(password, this.password);
	return valid;
};

UserSchema.methods.generateToken = async function () {
	const token = jwt.sign(
		{
			id: this._id,
		},
		process.env.JWT_SECRET,
		{ expiresIn: '1h' }
	);
	return token;
};

export const UserModel = model('User', UserSchema);
