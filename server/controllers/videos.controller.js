import Video from '../models/Video.model.js';
import User from '../models/User.model.js';
import _ from 'lodash';
import { createError } from '../utils/createError.js';

export const createVideo = async (req, res, next) => {
	try {
		const currentUserId = req.user.id;

		console.log(req.user);

		const video = new Video({ userId: currentUserId, ...req.body });

		const newVideo = await video.save();

		res.status(200).json(newVideo);
	} catch (error) {
		next(error);
	}
};

export const updateVideo = async (req, res, next) => {
	try {
		const currentUserId = req.user.id;
		const reqVideoId = _.get(req.params, 'id');

		const video = await Video.findById(reqVideoId);

		if (video.userId !== currentUserId)
			return next(createError(403, 'You can only update your video'));

		const updatedVideo = await Video.findByIdAndUpdate(
			reqVideoId,
			{ $set: req.body },
			{ new: true },
		);

		res.status(200).json(updatedVideo);
	} catch (error) {
		next(error);
	}
};

export const deleteVideo = async (req, res, next) => {
	try {
		const currentUserId = req.user.id;
		const reqVideoId = _.get(req.params, 'id');

		const video = await Video.findById(reqVideoId);

		if (video.userId !== currentUserId)
			return next(createError(403, 'You can only delete your video'));

		await Video.findByIdAndDelete(reqVideoId);

		res.status(200).json({ message: 'Successfully deleted Video' });
	} catch (error) {
		next(error);
	}
};

export const addView = async (req, res, next) => {
	try {
		const reqVideoId = _.get(req.params, 'id');

		await Video.findByIdAndUpdate(reqVideoId, {
			$inc: { views: 1 },
		});

		res.status(200).json({ message: 'The view has been incresed' });
	} catch (error) {
		next(error);
	}
};

export const getVideo = async (req, res, next) => {
	const reqVideoId = _.get(req.params, 'id');
	const video = await Video.findById(reqVideoId);

	res.status(200).json(video);
};

export const getRandomVideos = async (req, res, next) => {
	const videos = await Video.aggregate([
		{
			$sample: { size: 40 },
		},
	]);

	res.status(200).json(videos);
};

export const getTrendVideos = async (req, res, next) => {
	const videos = await Video.find().sort({ views: -1 });

	res.status(200).json(videos);
};

export const subscribedUsersVideos = async (req, res, next) => {
	const currentUserId = req.user.id;
	const currentUser = await User.findById(currentUserId);

	const currentUserSubscribedList = currentUser.subscribedUsers;

	const list = await Promise.all(
		currentUserSubscribedList.map((channelId) => {
			return Video.find({ userId: channelId });
		}),
	);

	// remove nested array
	res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
};

export const getByTag = async (req, res, next) => {
	const tags = req.query.tags.split(',');
	const videos = await Video.find({
		tags: {
			$in: tags,
		},
	}).limit(20);

	res.status(200).json(videos);
};

export const search = async (req, res, next) => {
	const query = req.query.keyword;

	const videos = await Video.find({
		title: { $regex: query, $options: 'i' },
	}).limit(40);

	res.status(200).json(videos);
};
