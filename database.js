const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'tasks.sqlite'
});

module.exports = sequelize;
