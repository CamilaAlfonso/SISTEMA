const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: DataTypes.TEXT,
  status: {
    type: DataTypes.ENUM('pendiente', 'en progreso', 'completada'),
    defaultValue: 'pendiente'
  }
});

module.exports = Task;
