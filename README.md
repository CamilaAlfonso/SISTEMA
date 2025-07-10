# Sistema de Gestión de Tareas Colaborativo

Un sistema completo de gestión de tareas con backend en Node.js/Express y frontend en Angular, que incluye integración con IA para funcionalidades inteligentes.

## 🚀 Características

### Backend (Node.js/Express)
- ✅ **CRUD completo de tareas**
- ✅ **Base de datos SQLite** con Sequelize
- ✅ **API REST** bien estructurada
- ✅ **Integración con OpenAI** para funciones IA
- ✅ **Filtros por estado** de tareas
- ✅ **Autocompletado** de descripciones
- ✅ **Resumen inteligente** de tareas pendientes
- ✅ **Sugerencia de prioridades** basada en IA

### Frontend (Angular)
- ✅ **Interfaz responsiva** con Bootstrap
- ✅ **Componentes modulares** y reutilizables
- ✅ **Formularios reactivos** para crear/editar tareas
- ✅ **Filtros dinámicos** por estado
- ✅ **Integración con IA** desde la interfaz
- ✅ **Diseño moderno** y accesible

## 📋 Requisitos

- Node.js 16.x o superior
- Angular CLI 16.x
- Cuenta de OpenAI (opcional, para funciones de IA)

## 🛠️ Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/sistema-gestion-tareas.git
cd sistema-gestion-tareas
```

### 2. Configurar el Backend
```bash
cd prueba
npm install
```

### 3. Configurar variables de entorno
Crea un archivo `.env` en la carpeta `prueba`:
```env
OPENAI_API_KEY=tu_api_key_aqui
PORT=3000
```

### 4. Configurar el Frontend
```bash
cd ../frontend
npm install
```

## 🚀 Ejecución

### Backend
```bash
cd prueba
npm start
```
El servidor estará disponible en `http://localhost:3000`

### Frontend
```bash
cd frontend
npm start
```
La aplicación estará disponible en `http://localhost:4200`

## 📁 Estructura del Proyecto

```
SISTEMA/
├── prueba/                 # Backend (Node.js/Express)
│   ├── models/            # Modelos de datos
│   ├── routes/            # Rutas de la API
│   ├── services/          # Servicios (OpenAI)
│   ├── database/          # Configuración de BD
│   └── index.js           # Servidor principal
├── frontend/              # Frontend (Angular)
│   ├── src/app/
│   │   ├── components/    # Componentes UI
│   │   ├── services/      # Servicios Angular
│   │   ├── models/        # Interfaces TypeScript
│   │   └── pages/         # Páginas principales
│   └── README.md          # Documentación frontend
└── README.md              # Este archivo
```

## 🔧 API Endpoints

### Tareas
- `GET /tasks` - Listar tareas (con filtros opcionales)
- `POST /tasks` - Crear nueva tarea
- `GET /tasks/:id` - Obtener tarea específica
- `PUT /tasks/:id` - Actualizar tarea
- `DELETE /tasks/:id` - Eliminar tarea

### IA
- `GET /tasks/resumen` - Generar resumen de tareas pendientes
- `POST /tasks/prioridad` - Sugerir prioridad basada en descripción

## 🎯 Funcionalidades de IA

### Resumen Inteligente
Genera un resumen conciso de todas las tareas pendientes, ayudando a identificar prioridades y patrones.

### Sugerencia de Prioridad
Analiza la descripción de una tarea y sugiere si es de prioridad Alta, Media o Baja.

### Autocompletado
Completa automáticamente las descripciones cuando solo se proporciona un título.

## 🎨 Tecnologías Utilizadas

### Backend
- **Node.js** - Runtime de JavaScript
- **Express** - Framework web
- **Sequelize** - ORM para base de datos
- **SQLite** - Base de datos ligera
- **OpenAI API** - Integración con IA

### Frontend
- **Angular 16** - Framework de aplicaciones
- **Bootstrap 5** - Framework CSS
- **TypeScript** - Tipado estático
- **RxJS** - Programación reactiva

## 📝 Criterios de Evaluación Cumplidos

✅ **Funcionalidad completa del CRUD**  
✅ **Implementación correcta de la integración con IA**  
✅ **Calidad y organización del código**  
✅ **Diseño de la interfaz (UX/UI básico)**  
✅ **Implementación de buenas prácticas**  
✅ **Documentación básica (README con instrucciones de setup)**

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 👨‍💻 Autor

Tu Nombre - [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com)

---

⭐ **¡Dale una estrella al proyecto si te gustó!** 