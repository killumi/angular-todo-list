import { Component, OnInit } from '@angular/core';
import { Todo, Todos } from 'src/app/_models/todo';
import { AppState } from 'src/app/redux/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoService } from 'src/app/_services/todo.service';
import { UpdateTodo } from 'src/app/redux/todo.action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {
  public todoState: Observable<Todos>

  constructor(
    private store: Store<AppState>,
    private _todoServive: TodoService,
    ) { }

  ngOnInit() {
    this.todoState = this.store.select('todoPage');
  }

  onDelete(todo: Todo) {
    this._todoServive.deleteTodo(todo);
    this._todoServive.loadTodo();
  }

  onToggle(todo: Todo) {
    todo.completed = !todo.completed;
    this._todoServive.updateTodo(todo);
  }

  trackByFn(index, item) {
    return item.id;
  }
  
}
