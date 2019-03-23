import { Injectable } from '@angular/core';
import { Todo } from '../_models/todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl = "https://jsonplaceholder.typicode.com/todos";
  
  constructor(private _http: HttpClient) { }

  getTodos():Observable<Todo[]> {
    return this._http.get<Todo[]>(this.baseUrl);
  }  

  addTodo( todo:Todo ) {}

  deleteTodo( todo: Todo ) {}

  toggleTodo( todo: Todo ) {
    todo.completed = !todo.completed;
  }
}
