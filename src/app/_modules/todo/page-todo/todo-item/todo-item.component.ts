import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/_models/todo';
import { AppState } from 'src/app/redux/app.state';
import { Store } from '@ngrx/store';
import { DeleteTodo, UpdateTodo } from 'src/app/redux/todo.action';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
 
  constructor(private store: Store<AppState>) { }

  ngOnInit() {}

  toggleTodo() {
    this.todo.completed = !this.todo.completed;
    this.store.dispatch(new UpdateTodo(this.todo));
  }

  deleteTodo() {
    this.store.dispatch(new DeleteTodo(this.todo));
  }
}
