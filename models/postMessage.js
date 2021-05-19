import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema.Types;

const postSchema = mongoose.Schema({
	title: String,
	message: String,
	name: String,
	creator: String,
	tags: [String],
	selectedFile: String,
	likes: {
		type: [String],
		default: [],
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
	comments: [
		{
			text: String,
			postedBy: { type: ObjectId, ref: 'User' },
		},
	],
	postedBy: {
		type: ObjectId,
		ref: 'User',
	},
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
