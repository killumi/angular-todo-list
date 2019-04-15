import { Component, OnInit, Input } from '@angular/core';
import { Todo, Todos } from 'src/app/_models/todo';
import { AppState } from 'src/app/redux/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];

  public todoState: Observable<Todos>

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.todoState = this.store.select('todoPage');
  }
}
