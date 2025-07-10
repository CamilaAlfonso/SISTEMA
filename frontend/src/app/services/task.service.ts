import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(status?: string): Observable<Task[]> {
    let url = this.apiUrl;
    if (status) url += `?status=${status}`;
    return this.http.get<Task[]>(url);
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}/${id}`);
  }

  createTask(task: Partial<Task>): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  updateTask(id: number, task: Partial<Task>): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${id}`, task);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getSummary(): Observable<{ resumen: string }> {
    return this.http.get<{ resumen: string }>(`${this.apiUrl}/resumen`);
  }

  suggestPriority(description: string): Observable<{ sugerencia: string }> {
    return this.http.post<{ sugerencia: string }>(`${this.apiUrl}/prioridad`, { description });
  }
} 