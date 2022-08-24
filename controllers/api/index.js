const router = require('express').Router();
const userRoutes = require('./userRoutes');
const TopicRoutes = require('./topicRoutes');

router.use('/users', userRoutes);
router.use('/topic', TopicRoutes);

module.exports = router;
