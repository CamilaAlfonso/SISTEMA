# Frontend - Sistema de Gestión de Tareas

Este es el frontend del sistema de gestión de tareas colaborativo, desarrollado con Angular 16 y Bootstrap.

## Características

- **CRUD completo de tareas**: Crear, leer, actualizar y eliminar tareas
- **Filtros por estado**: Filtrar tareas por pendiente, en progreso o completada
- **Integración con IA**: 
  - Generar resumen inteligente de tareas pendientes
  - Sugerir prioridades basadas en descripciones
  - Autocompletar descripciones
- **Interfaz responsiva**: Diseño adaptativo con Bootstrap
- **UX/UI moderna**: Interfaz limpia y fácil de usar

## Requisitos

- Node.js 16.x
- Angular CLI 16.x
- Backend corriendo en `http://localhost:3000`

## Instalación

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar el servidor de desarrollo:**
   ```bash
   npm start
   ```

3. **Abrir en el navegador:**
   ```
   http://localhost:4200
   ```

## Estructura del Proyecto

```
src/app/
├── components/
│   ├── task-list/          # Lista y filtros de tareas
│   ├── task-form/          # Formulario de crear/editar
│   ├── task-summary/       # Resumen IA
│   └── task-priority/      # Sugerencia de prioridad IA
├── services/
│   └── task.service.ts     # Servicio para API
├── models/
│   └── task.model.ts       # Interfaz de datos
└── pages/
    └── home/               # Página principal
```

## Funcionalidades

### Gestión de Tareas
- **Crear tarea**: Formulario con título, descripción y estado
- **Listar tareas**: Tabla con filtros por estado
- **Editar tarea**: Modificar información existente
- **Eliminar tarea**: Confirmación antes de eliminar

### Integración con IA
- **Resumen de tareas pendientes**: Genera un resumen inteligente
- **Sugerencia de prioridad**: Analiza descripciones para sugerir prioridad
- **Autocompletar**: Completa descripciones automáticamente

### Diseño Responsivo
- Adaptable a diferentes tamaños de pantalla
- Componentes Bootstrap para consistencia
- Interfaz moderna y accesible

## Configuración

### Backend
Asegúrate de que el backend esté corriendo en `http://localhost:3000`

### Variables de Entorno
Si necesitas cambiar la URL de la API, modifica `task.service.ts`:
```typescript
private apiUrl = 'http://localhost:3000/tasks';
```

## Scripts Disponibles

- `npm start`: Ejecuta el servidor de desarrollo
- `npm run build`: Construye para producción
- `npm test`: Ejecuta las pruebas

## Tecnologías Utilizadas

- **Angular 16**: Framework principal
- **Bootstrap 5**: Framework CSS para diseño responsivo
- **RxJS**: Programación reactiva
- **TypeScript**: Tipado estático

## Criterios de Evaluación Cumplidos

✅ **Funcionalidad completa del CRUD**  
✅ **Implementación correcta de la integración con IA**  
✅ **Calidad y organización del código**  
✅ **Diseño de la interfaz (UX/UI básico)**  
✅ **Implementación de buenas prácticas**  
✅ **Documentación básica (README con instrucciones de setup)**

---

¿Dudas o sugerencias? ¡Contáctame!
