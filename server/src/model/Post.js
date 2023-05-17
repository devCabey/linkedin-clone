import { Schema, SchemaTypes, model } from 'mongoose';

export const CommentSchema = new Schema({
	description: {
		type: SchemaTypes.String,
	},
	user: {
		type: SchemaTypes.ObjectId,
		ref: 'User',
	},
});

export const PostSchema = new Schema(
	{
		owner: {
			type: SchemaTypes.ObjectId,
			ref: 'User',
			required: true,
		},
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
	},
	{
		timestamps: true,
	}
);

export const PostModel = model('Post', PostSchema);
