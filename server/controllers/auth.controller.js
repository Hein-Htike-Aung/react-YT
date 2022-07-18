import mongoose from 'mongoose';
import User from '../models/User.model.js';
import bcrypt from 'bcryptjs';
import _ from 'lodash';
import { createError } from '../utils/createError.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
	try {
		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(req.body.password, salt);
		const user = new User({ ...req.body, password: hash });

		const newUser = await user.save();

		res.status(200).send(_.omit(newUser.toJSON(), 'password'));
	} catch (error) {
		next(error);
	}
};

export const signin = async (req, res, next) => {
	try {
		const user = await User.findOne({ email: req.body.email });

		if (!user) return next(createError(404, 'Invalid Credentials'));

		const isPasswordValid = await bcrypt.compare(
			req.body.password,
			user.password,
		);

		if (!isPasswordValid) return next(createError(404, 'Invalid Credentials'));

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);

		res
			.cookie('access_token', token, {
				httpOnly: true,
			})
			.status(200)
			.json(_.omit(user.toJSON(), 'password'));
	} catch (error) {
		next(error);
	}
};
