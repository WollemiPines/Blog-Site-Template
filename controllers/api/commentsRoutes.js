const router = require('express').Router();
const { Topic, Comments, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  console.log("working in the routes for comments line 6");
    try {
      const newComments = await Comments.create({
        ...req.body,
        content: req.body.content,
        user_id: req.session.user_id,
        topic_id: topic.id,
      });
      console.log("here");
  
      res.status(200).json(newComments);
    } catch (err) {
      res.status(400).json(err);
    }
  });


  router.get('/', async (req, res) => {
    try {
      // Get all comments and JOIN with user data
      const commentsData = await Comments.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
          {
            model: Topic,
            attributes: ['name', 'user_id'],
          },
        ],
      });
  
      // Serialize data so the template can read it
      const comments = commentsData.map((comment) => comment.get({ plain: true }));
  
      // Pass serialized data and session flag into template

      // THIS PAGE DOES NOT EXIST
      res.render('comments', { 
        comments, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router