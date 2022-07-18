import _ from 'lodash';
import Comment from '../models/Comment.model.js';
import Video from '../models/Video.model.js';
import { createError } from '../utils/createError.js';

export const createComment = async (req, res, next) => {
	try {
		const currentUserId = req.user.id;

		const comment = new Comment({ ...req.body, userId: currentUserId });

		const newComment = await comment.save();

		res.status(200).json(newComment);
	} catch (error) {
		next(error);
	}
};

export const deleteComment = async (req, res, next) => {
	try {
		const currentUserId = req.user.id;
		const reqCommentId = _.get(req.params, 'id');
		const videoId = _.get(req.params, 'id');

		const comment = await Comment.findById(reqCommentId);
		const video = await Video.findById(videoId);

		// comment owner and video owner can delete
		if (comment.userId === currentUserId || currentUserId === video.userId) {
			// req.params.id could be videoId or commentId
			await Comment.findByIdAndDelete(req.params.id);

			res.status(200).json('Comment has been deleted');
		} else
			return next(createError(403, 'You can only delete your own comment'));
	} catch (error) {
		next(error);
	}
};

export const getComments = async (req, res, next) => {
	const videoId = _.get(req.params, 'videoId');

	const comments = await Comment.find({ videoId });

	res.status(200).json(comments);
};
