const router = require('express').Router();
const { Topic } = require('../../models');
const withAuth = require('../../utils/auth');

// Create new topic
router.post('/', withAuth, async (req, res) => {
  try {
    const newTopic = await Topic.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newTopic);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update Topic by id
router.put('/:id', withAuth, async (req, res) => {
  try {
    const topicData = await Topic.update({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(topicData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete topic by id
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const topicData = await Topic.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!topicData) {
      res.status(404).json({ message: 'No Topic found with this id!' });
      return;
    }

    res.status(200).json(topicData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
