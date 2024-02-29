import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskCreateService {
  private apiUrl = 'http://127.0.0.1:8000/api/tasks/';

  constructor(private http: HttpClient) { }

  addTask(taskData: any): Observable<any> {
    return this.http.post(this.apiUrl, taskData);
  }
}
