import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Task } from './classes/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private URL = 'http://localhost:8080/task';

  constructor(private http: HttpClient) { }

  updateTask(task: Task) {
    const URL = this.URL + '/updateTask';
    return this.http.put(URL, task);
  }

  createTask(task: Task) {
    const URL = this.URL + '/createTask';
    return this.http.post(URL, task);
  }

  deleteTask(task: Task) {
    const URL = this.URL + '/deleteTask?id=' + task.id;
    return this.http.delete(URL);
  }
}
