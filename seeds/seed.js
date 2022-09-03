const sequelize = require('../config/connection');
const { User, Topic, Comments } = require('../models');

const userData = require('./userData.json');
const topicData = require('./topicData.json');
const commentsData = require('./commentsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

 const topic = await Topic.bulkCreate(topicData, {
  individualHooks: true,
  returning: true,
    });

const comments = await Comments.bulkCreate(commentsData, {
  individualHooks: true,
  returning: true,
    });


  process.exit(0);
}


seedDatabase();
