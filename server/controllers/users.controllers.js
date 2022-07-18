import { createError } from '../utils/createError.js';
import User from '../models/User.model.js';
import _ from 'lodash';

export const updateUser = async (req, res, next) => {
	try {
		const reqUserId = _.get(req.params, 'id');

		if (reqUserId !== req.user.id)
			return next(createError(403, 'You can update only your account'));

		const updatedUser = await User.findByIdAndUpdate(
			reqUserId,
			{
				$set: req.body,
			},
			{ new: true },
		);

		res.status(200).json(updatedUser);
	} catch (error) {
		next(error);
	}
};

export const deleteUser = async (req, res, next) => {
	try {
		const reqUserId = _.get(req.params, 'id');

		if (reqUserId !== req.user.id)
			return next(createError(403, 'You can delete only your account'));

		await User.findByIdAndDelete(reqUserId);

		res.status(200).json({ message: 'User has been deleted' });
	} catch (error) {
		next(error);
	}
};

export const getUser = async (req, res, next) => {
	const reqUserId = _.get(req.params, 'id');

	const user = await User.findById(reqUserId);

	res.status(200).json(user);
};

export const getUsers = async (req, res, next) => {
	const users = await User.find();

	res.status(200).json(users);
};

export const subscribeUser = async (req, res, next) => {
	try {
		const currentUserId = req.user._id;
		const targetUserId = _.get(req.params, 'targetUserId');

		await User.findByIdAndUpdate(currentUserId, {
			$push: { subscribedUsers: targetUserId },
		});

		await User.findByIdAndUpdate(targetUserId, {
			$inc: { subscribers: 1 },
		});

		res.status(200).json({ message: 'Subscription successfull' });
	} catch (error) {
		next(error);
	}
};

export const unSubscribeUser = async (req, res, next) => {
	try {
		const currentUserId = req.user._id;
		const targetUserId = _.get(req.params, 'targetUserId');

		await User.findByIdAndUpdate(currentUserId, {
			$pull: { subscribedUsers: targetUserId },
		});

		await User.findByIdAndUpdate(targetUserId, {
			$inc: { subscribers: -1 },
		});

		res.status(200).json({ message: 'Unsubscription successfull' });
	} catch (error) {
		next(error);
	}
};

export const likeVideo = async (req, res, next) => {
	try {
	} catch (error) {
		next(error);
	}
};

export const disLikeVideo = async (req, res, next) => {
	try {
	} catch (error) {
		next(error);
	}
};
