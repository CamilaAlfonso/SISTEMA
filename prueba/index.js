const express = require('express');
const cors = require('cors');
const app = express();
const sequelize = require('./database/db');
const Task = require('./models/Task');

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/tasks', require('./routes/tasks'));

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'API de Gestión de Tareas funcionando correctamente' });
});

// Sincronizar base de datos y iniciar servidor
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
    console.log('Base de datos sincronizada');
  });
}).catch(error => {
  console.error('Error al sincronizar la base de datos:', error);
}); 