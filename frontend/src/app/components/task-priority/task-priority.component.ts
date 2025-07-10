import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-priority',
  templateUrl: './task-priority.component.html',
  styleUrls: ['./task-priority.component.scss']
})
export class TaskPriorityComponent {
  description: string = '';
  sugerencia: string = '';
  loading = false;

  constructor(private taskService: TaskService) {}

  sugerirPrioridad(): void {
    if (!this.description) return;
    this.loading = true;
    this.taskService.suggestPriority(this.description).subscribe({
      next: res => {
        this.sugerencia = res.sugerencia;
        this.loading = false;
      },
      error: () => {
        this.sugerencia = 'Error al sugerir prioridad';
        this.loading = false;
      }
    });
  }
}
