// task.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://127.0.0.1:8000/api/tasks/';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  
  editTask(taskId: number, taskData: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}${taskId}/`, taskData);
  }
  deleteTask(taskId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${taskId}/`);
  }
  getTaskById(id: number): Observable<any> {
    const url = `${this.apiUrl}${id}/`;
    return this.http.get<any>(url);
  }
}
