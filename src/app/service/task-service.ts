import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Task} from '../model/task';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseURI: String = "http://localhost:8888/api/v1/";
  constructor(private http: HttpClient) { }

  getTasks(): any {
   
    console.log("Payload = " + this.http.get(this.baseURI + 'tasks',{ observe: 'response' })
    .subscribe(
     response => console.log(response.body)
   ));
    return this.http.get<Task[]>(this.baseURI + 'tasks').pipe(map(x=>x));
    
    
  }

  getAllParent(): any {
    return this.http.get(this.baseURI + 'parentTasks');
  }

  getTaskById(taskId): any {
    console.log("getTask By Id = " + this.http.get(this.baseURI + 'task'+ taskId,{ observe: 'response' })
    .subscribe(
     response => console.log(response.body)
   ));
        return this.http.get(this.baseURI + 'task'+'/' + taskId);
  }

  addTask(task): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
      })
    };
    console.log("Display Project ID:"+task.project.projectId);
    return this.http.post(this.baseURI + 'addTask', task, httpOptions);
  }

  addParentTask(task): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
      })
    };
    
    return this.http.post(this.baseURI + 'addParent', task, httpOptions);
  }

  endTask(taskId): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
      })
    };
    return this.http.put(this.baseURI + 'endTask/' + taskId, httpOptions);
  }

  updateTask(task:Task): any {
    console.log(" edit task service " +task.taskId);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
      })
    };
    return this.http.put(this.baseURI + 'task'+'/'+task.taskId ,task, httpOptions);
  }
}
