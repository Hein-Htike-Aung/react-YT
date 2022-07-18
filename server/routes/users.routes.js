import express from 'express';
import {
	deleteUser,
	disLikeVideo,
	getUser,
	getUsers,
	likeVideo,
	subscribeUser,
	unSubscribeUser,
	updateUser,
} from '../controllers/users.controllers.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = express.Router();

router.patch('/:id', verifyToken, updateUser);
router.delete('/:id', verifyToken, deleteUser);
router.get('/:id', getUser);
router.get('/:id', getUsers);
router.patch('/subscribe/:targetUserId', verifyToken, subscribeUser);
router.patch('/unsubscribe/:targetUserId', verifyToken, unSubscribeUser);
router.patch('/like/:videoId', verifyToken, likeVideo);
router.patch('/dislike/:id', verifyToken, disLikeVideo);

export default router;
