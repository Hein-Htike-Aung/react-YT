import mongoose from 'mongoose';

const VideoSchema = new mongoose.Schema(
	{
		userId: {
			// current user id
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		desc: {
			type: String,
			required: true,
		},
		imgUrl: {
			type: String,
			required: true,
		},
		videoUrl: {
			type: String,
			required: true,
		},
		views: {
			// view count
			type: Number,
			default: 0,
		},
		tags: {
			// js,py,c,java
			type: [String],
			default: [],
		},
		likes: {
			// userId
			type: [String],
			default: [],
		},
		dislikes: {
			// userId
			type: [String],
			default: [],
		},
	},
	{ timestamps: true },
);

export default mongoose.model('Video', VideoSchema);
