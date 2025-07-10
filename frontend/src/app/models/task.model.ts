export interface Task {
  id?: number;
  title: string;
  description: string;
  status: 'pendiente' | 'en progreso' | 'completada';
  createdAt?: string;
  updatedAt?: string;
} 