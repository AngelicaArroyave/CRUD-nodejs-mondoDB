import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from 'src/app/models/Task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private URL = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get<any>(`${this.URL}/tasks`)
  }

  getPrivateTasks() {
    return this.http.get<any>(`${this.URL}/private-tasks`)
  }

  savePrivateTasks(task: Task) {
    return this.http.post<any>(`${this.URL}/private-tasks/add`, task)
  }

  updatePrivateTasks(task: Task, idTask: any) {
    return this.http.put<any>(`${this.URL}/private-tasks/edit/${idTask}`, task)
  }

  deletePrivateTasks(idTask: any) {
    return this.http.delete<any>(`${this.URL}/private-tasks/delete/${idTask}`)
  }

  updatePropertyTasks(task: Task, idTask: any) {
    return this.http.put<any>(`${this.URL}/private-tasks/updateProperty/${idTask}`, task)
  }
}
