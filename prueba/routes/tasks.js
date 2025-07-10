const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const { generarResumen, sugerirPrioridad, autocompletarDescripcion } = require('../services/openAI');

//Crear tarea
router.post('/', async (req, res) => {
  try {
    let {title, description, status = 'pendiente'} = req.body;
 
    if (!title) {
        return res.status(400).json({error : 'El titulo es obligatorio'});
    }

    //Autocompletar descripcion si no se proporciona
    if (!description) {
        try {
            description = await autocompletarDescripcion(title);
        } catch (error) {
            console.error('Error al autocompletar descripcion: ', error);
            description = 'Descripcion pendiente';
        }
    }

    const task = await Task.create({ title, description, status });
    res.status(201).json(task);
  } catch (error) {
    console.error('Error al crear tarea: ', error);
    res.status(500).json({ error: 'Error al crear la tarea' });
  }
});

//Listar tareas con filtros
router.get('/', async (req, res) => {
  try {
    const { status } = req.query;
    const where = status ? { status } : {};
    const tasks = await Task.findAll({ 
        where,
        order: [['createdAt' , 'DESC']] 
    });
    res.json(tasks);
  } catch (error) {
    console.error('Error al listar tarea: ', error);
    res.status(500).json({ error: 'Error al listar tareas' });
  }
});

//Resumen de tareas pendientes con IA
router.get('/resumen', async (req, res) => {
  try {
    console.log('Solicitud de resumen recibida');
    
    const pendingTasks = await Task.findAll({ where: { status: 'pendiente' } });
    console.log('Tareas pendientes encontradas:', pendingTasks.length);
    
    if (pendingTasks.length === 0) {
      console.log('No hay tareas pendientes');
      return res.json({ resumen: 'No hay tareas pendientes para resumir' });
    }
    
    console.log('Tareas a resumir:', pendingTasks.map(t => ({ title: t.title, description: t.description })));
    
    const summary = await generarResumen(pendingTasks);
    console.log('Resumen generado:', summary);
    
    res.json({ resumen: summary });
  } catch (error) {
    console.error('Error al generar resumen:', error);
    res.status(500).json({ 
      error: 'Error al generar resumen',
      details: error.message 
    });
  }
});

//Sugerir prioridad
router.post('/prioridad', async (req, res) => {
  const { description } = req.body;
  try {
    const suggestion = await sugerirPrioridad(description);
    res.json({ sugerencia: suggestion });
  } catch (error) {
    console.error('Error al sugerir prioridad:', error);
    res.status(500).json({ error: 'Error al sugerir prioridad' });
  }
});

//Obtener tarea por ID
router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    
    res.json(task);
  } catch (error) {
    console.error('Error al obtener tarea: ', error);
    res.status(500).json({ error: 'Error al obtener tarea' });
  }
});

//Actualizar tarea completa
router.put('/:id', async (req, res) => {
  try {
    const {title, description, status} = req.body;
    const task = await Task.findByPk(req.params.id);

    if (!task) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    
    if (title) task.title = title;
    if (description) task.description = description;
    if (status) {
        const validStatuses = ['pendiente', 'en progreso', 'completada'];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ 
                error: 'Estado inválido. Debe ser: pendiente, en progreso o completada' 
            });
        }
        task.status = status;
    }

    await task.save();
    res.json(task);
  } catch (error) {
    console.error('Error al actualizar tarea: ', error);
    res.status(500).json({ error: 'Error al actualizar tarea' });
  }
});

//Eliminar tarea
router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });
    await task.destroy();
    res.json({ message: 'Tarea eliminada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar tarea' });
  }
});

module.exports = router;
