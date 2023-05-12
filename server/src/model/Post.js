import { Schema, SchemaTypes, model } from 'mongoose';

export const CommentSchema = new Schema({
	text: {
		type: SchemaTypes.String,
	},
	user: {
		type: SchemaTypes.ObjectId,
		ref: 'User',
	},
});

export const PostSchema = new Schema({
	description: {
		type: SchemaTypes.String,
	},
	picture: [
		{
			type: SchemaTypes.String,
		},
	],
	video: [
		{
			type: SchemaTypes.String,
		},
	],
	likes: [
		{
			type: SchemaTypes.ObjectId,
			ref: 'User',
		},
	],
	comments: [
		{
			type: CommentSchema,
		},
	],
	reposts: [
		{
			type: SchemaTypes.ObjectId,
			ref: 'User',
		},
	],
});

export const PostModel = model('Post', PostSchema);
