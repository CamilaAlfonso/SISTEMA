import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-summary',
  templateUrl: './task-summary.component.html',
  styleUrls: ['./task-summary.component.scss']
})
export class TaskSummaryComponent {
  resumen: string = '';
  loading = false;

  constructor(private taskService: TaskService) {}

  generarResumen(): void {
    this.loading = true;
    this.taskService.getSummary().subscribe({
      next: res => {
        this.resumen = res.resumen;
        this.loading = false;
      },
      error: () => {
        this.resumen = 'Error al obtener el resumen';
        this.loading = false;
      }
    });
  }
}
