import express from 'express';

import {
	getPosts,
	createPost,
	updatePost,
	deletePost,
	likePost,
	getPost,
	createComment,
	getPostsBySearch,
} from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router();

//localhost:5000/posts
//get all post route
router.get('/', getPosts);

router.get('/search', getPostsBySearch);

//specific post route
router.get('/:id', getPost);
// create post
router.post('/', auth, createPost);
// update post
router.patch('/:id', auth, updatePost);
// delete post
router.delete('/:id', auth, deletePost);
// like post
router.patch('/:id/likePost', auth, likePost);

// comment post
router.post('/:id', auth, createComment);

export default router;
