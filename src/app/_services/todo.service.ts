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

  addTodo( todos: Todo[], todoTitle: string ) {
    todos.unshift({
      userId: 201,
      id: 201,
      title: todoTitle,
      completed: false
    })
  }

  deleteTodo( todos: Todo[], todo: Todo ) {
    todos.splice(todos.indexOf(todo), 1);
  }

  toggleTodo( todo: Todo ) {
    todo.completed = !todo.completed;
  }
}
