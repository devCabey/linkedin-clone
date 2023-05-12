import { Schema, SchemaTypes, model } from 'mongoose';

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

export const UserModel = model('User', UserSchema);
