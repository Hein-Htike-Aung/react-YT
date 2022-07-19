import express from 'express';
import {
	addView,
	createVideo,
	deleteVideo,
	disLikeVideo,
	getByTag,
	getRandomVideos,
	getTrendVideos,
	getVideo,
	likeVideo,
	search,
	subscribedUsersVideos,
	updateVideo
} from '../controllers/videos.controller.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = express.Router();

router.post('/', verifyToken, createVideo);
router.patch('/:id', verifyToken, updateVideo);
router.delete('/:id', verifyToken, deleteVideo);
router.get('/:id', getVideo);
router.patch('/view/:id', addView);
// Get most tranding videos by view counts
router.get('/find/trends', getTrendVideos);
router.get('/find/randoms', getRandomVideos);
// Get subscribed users' videos
router.get('/find/subscriptions', verifyToken, subscribedUsersVideos);
// ?tags=js,py,c
router.get('/recommendation/tags', getByTag);
// search video with title keyword
router.get('/search/by-keyword', search);
router.patch('/like/:videoId', verifyToken, likeVideo);
router.patch('/dislike/:videoId', verifyToken, disLikeVideo);

export default router;
