const router = require('express').Router();
const { Topic, User, Comments } = require('../models');
const withAuth = require('../utils/auth');

// HOMEPAGE
router.get('/', async (req, res) => {
  try {
    // Get all Topics and JOIN with user data
    const topicData = await Topic.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const topics = topicData.map((topic) => topic.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      topics, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// TOPIC BY ID
router.get('/topic/:id', async (req, res) => {
  try {
    const topicData = await Topic.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const topic = topicData.get({ plain: true });

    res.render('topic', {
      ...topic,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// NEW TOPIC ROUTE
router.get('/newTopic', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Topic }],
    });

    const user = userData.get({ plain: true });

    res.render('newTopic', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// USER PROFILE
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Topic }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN ROUTE
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
