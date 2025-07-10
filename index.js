const express = require('express');
const app = express();
const sequelize = require('./database/db');
const Task = require('./models/Task');

app.use(express.json());

app.use('/tasks', require('./routes/createTask'));
app.use('/tasks', require('./routes/listTasks'));
app.use('/tasks', require('./routes/updateTask'));
app.use('/tasks', require('./routes/deleteTask'));
app.use('/ia', require('./routes/summarizeTasks'));
app.use('/ia', require('./routes/suggestPriority'));

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
  });
});
