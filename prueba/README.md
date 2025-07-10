# Sistema de Gestión de Tareas Colaborativo (Backend)

Este proyecto es el backend de un sistema de gestión de tareas colaborativo, desarrollado con Node.js, Express y SQLite. Incluye integración con la API de OpenAI para funciones inteligentes.

## Características
- Crear tareas con título, descripción y estado (pendiente, en progreso, completada)
- Listar todas las tareas con filtros por estado
- Actualizar el estado o información de una tarea
- Eliminar tareas
- Integración con IA (OpenAI):
  - Generar un resumen inteligente de todas las tareas pendientes
  - Sugerir prioridades basadas en las descripciones
  - Autocompletar descripciones cuando el usuario solo escriba un título

## Requisitos
- Node.js >= 18 (recomendado)
- npm

## Instalación
1. Clona el repositorio o descarga el código.
2. Abre una terminal y navega a la carpeta `prueba`:
   ```bash
   cd prueba
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Configuración
1. Crea un archivo `.env` en la carpeta `prueba` con el siguiente contenido:
   ```env
   OPENAI_API_KEY=tu_api_key_aqui
   PORT=3000
   ```
   Reemplaza `tu_api_key_aqui` por tu clave de OpenAI. Si no tienes clave, las funciones de IA no estarán disponibles.

## Ejecución
Desde la carpeta `prueba`, ejecuta:
```bash
npm start
```
El servidor estará disponible en [http://localhost:3000](http://localhost:3000)

## Endpoints principales

### Crear tarea
```http
POST /tasks
Content-Type: application/json
{
  "title": "Título de la tarea",
  "description": "Descripción opcional",
  "status": "pendiente" // Opcional
}
```

### Listar tareas
```http
GET /tasks
GET /tasks?status=pendiente
```

### Actualizar tarea
```http
PUT /tasks/:id
Content-Type: application/json
{
  "title": "Nuevo título",
  "description": "Nueva descripción",
  "status": "en progreso"
}
```

### Eliminar tarea
```http
DELETE /tasks/:id
```

### Resumen de tareas pendientes (IA)
```http
GET /tasks/resumen
```

### Sugerir prioridad (IA)
```http
POST /tasks/prioridad
Content-Type: application/json
{
  "description": "Descripción de la tarea"
}
```

## Notas
- Si tienes problemas con la versión de Node.js, actualízala a la versión 18 o superior.
- Puedes probar la API con Postman, Insomnia o `curl`.

---

¿Dudas o sugerencias? ¡Contáctame! 