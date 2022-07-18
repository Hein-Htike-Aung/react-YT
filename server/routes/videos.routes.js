import express from 'express';
import {
	addView,
	createVideo,
	deleteVideo,
	getByTag,
	getRandomVideos,
	getTrendVideos,
	getVideo,
	search,
	subscribedUsersVideos,
	updateVideo,
} from '../controllers/videos.controller.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = express.Router();

router.post('/', verifyToken, createVideo);
router.patch('/:id', verifyToken, updateVideo);
router.delete('/:id', verifyToken, deleteVideo);
router.get('/:id', getVideo);
router.patch('/view/:id', addView);
// Get most tranding videos by view counts
router.get('/trends', getTrendVideos);
router.get('/randoms', getRandomVideos);
// Get subscribed users' videos
router.patch('/subscribe', verifyToken, subscribedUsersVideos);
// ?tags=js,py,c
router.patch('/tags', getByTag);
// search video with title keyword
router.patch('/search', search);

export default router;
