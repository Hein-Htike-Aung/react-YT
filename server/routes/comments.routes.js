import express from 'express';
import {
	createComment,
	deleteComment,
	getComments,
} from '../controllers/comments.controller.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = express.Router();

router.post('/', verifyToken, createComment);
// Comment owner and video owner can delete the comment
router.delete('/', verifyToken, deleteComment);
// Get all relevent Video's comments
router.get('/:videoId', getComments);

export default router;
