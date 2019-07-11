const { Router } = require('express');
const MessagesController = require('../controllers/comments.controller');
const router = new Router();

router.route('/').get(MessagesController.getComments);
router.route('/').post(MessagesController.postComment);

module.exports = router;
