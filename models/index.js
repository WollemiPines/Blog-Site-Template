const User = require('./User');
const Topic = require('./Topic');
const Comments = require('./Comments');

User.hasMany(Topic, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Topic.belongsTo(User, {
  foreignKey: 'user_id'
});

Topic.hasMany(Comments,{
  foreignKey: 'topic_id'
});

Comments.belongsTo(Topic, {
  foreignKey: 'topic_id',
  onDelete: 'CASCADE'
});

User.hasMany(Comments,{
  foreignKey: 'topic_id'
});

Comments.belongsTo(User, {
  foreignKey: 'topic_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Topic, Comments};
