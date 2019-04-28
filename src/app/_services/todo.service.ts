import { Injectable } from '@angular/core';
import { Todo } from '../_models/todo';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/app.state';
import { LoadTodos, AddTodo, DeleteTodo, UpdateTodo } from '../redux/todo.action';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  static BASE_URL: string = "http://localhost:3000/";

  constructor (
    private _http: HttpClient,
    private store: Store<AppState>
  ) { }

  preloadTodo() {
    return this._http.get(TodoService.BASE_URL + 'todos').pipe(map(item => item))
  }

  loadTodo(): void {
    this.preloadTodo()
      .subscribe(
        (todos: Todo[]) => this.store.dispatch(new LoadTodos(todos))
      )
  }

  addTodo(todo: Todo) {
    this._http.post(TodoService.BASE_URL + 'todos', todo)
      .subscribe(
        (todo: Todo) => this.store.dispatch(new AddTodo(todo))
      )
  }

  deleteTodo(todo: Todo) {
    this._http.delete(TodoService.BASE_URL + 'todos/' + todo.id)
      .subscribe(
        (todo: Todo) => this.store.dispatch(new DeleteTodo(todo))
      )
  }

  updateTodo(todo: Todo) {
    this._http.put(TodoService.BASE_URL + 'todos/' + todo.id, todo)
      .subscribe(
        (todo: Todo) => this.store.dispatch(new UpdateTodo(todo))
      )
  }
}
