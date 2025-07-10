import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  task: Partial<Task> = { title: '', description: '', status: 'pendiente' };
  isEdit: boolean = false;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.taskService.getTask(+id).subscribe(task => this.task = task);
    }
  }

  saveTask(): void {
    if (this.isEdit && this.task.id) {
      this.taskService.updateTask(this.task.id, this.task).subscribe(() => this.router.navigate(['/']));
    } else {
      this.taskService.createTask(this.task).subscribe(() => this.router.navigate(['/']));
    }
  }
}
