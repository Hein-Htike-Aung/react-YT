import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { errorHandler } from './middlewares/errorHandler.js';
import cors from 'cors';
import UserRoute from './routes/users.routes.js';
import AuthRoute from './routes/auth.routes.js';
import VideoRoute from './routes/videos.routes.js';
import CommentsRoute from './routes/comments.routes.js';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();

/* MongoDB Connection */
const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URL);
		console.log('CONNECTED TO DB');
	} catch (error) {
		throw error;
	}
};

mongoose.connection.on('disconnected', () => {
	console.log('mongoDB disconnected!');
});

/* Middlewares */
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/users', UserRoute);
app.use('/api/auth', AuthRoute);
app.use('/api/videos', VideoRoute);
app.use('/api/comments', CommentsRoute);

app.use(errorHandler);

app.listen(8800, () => {
	connect();
	console.log('CONNECTED TO BACKEND SERVER');
});
