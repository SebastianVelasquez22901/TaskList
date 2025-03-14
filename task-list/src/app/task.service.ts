import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Task {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:8080/api'; // Asegúrate de incluir 'http://'

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/tasks`);
  }

  addTask(name: string): Observable<Task> {
    const taskPayload = { name }; // Ajusta la estructura del objeto según sea necesario
    return this.http.post<Task>(`${this.apiUrl}/task`, taskPayload);
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/task/${id}`);
  }
}
