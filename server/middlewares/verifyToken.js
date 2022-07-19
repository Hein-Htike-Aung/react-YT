import jwt from 'jsonwebtoken';
import { createError } from '../utils/createError.js';

export const verifyToken = (req, res, next) => {
	// const token = req.cookies.access_token;
	// if (!token) return next(createError(401, 'You are not authenticated'));

	const authHeader = req.headers.authorization;

	if (!authHeader) return next(createError(401, 'You are not authenticated'));

	const token = authHeader.split(' ')[1];

	jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
		if (err) return next(createError(401, 'Token is not valid'));

		req.user = user;

		next();
	});
};
