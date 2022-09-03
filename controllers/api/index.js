const router = require('express').Router();
const userRoutes = require('./userRoutes');
const TopicRoutes = require('./topicRoutes');
const CommentsRoutes = require('./commentsRoutes');

router.use('/users', userRoutes);
router.use('/topic', TopicRoutes);
router.use('/comments', CommentsRoutes);

module.exports = router;
