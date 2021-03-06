const express = require('express');
const {
  createPost,
  getPostByAuthId,
  deletePost,
  // dislikePost,
  // likePost,
  // dislikePost,
} = require('../controller/postController');

const router = express.Router();

const { isAuthenticUser } = require('../middleware/auth');
//post Route
router.route('/postCreate').post(isAuthenticUser, createPost);
router.route('/authPost').get(isAuthenticUser, getPostByAuthId);
router.route('/deletePost/:postId').delete(isAuthenticUser, deletePost);
// router.route('/likePost/:postId').put(isAuthenticUser, likePost);
// router.route('/deletelike/:postId').put(isAuthenticUser, dislikePost);

module.exports = router;
