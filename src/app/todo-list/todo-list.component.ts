import { Component, OnInit, Input, } from '@angular/core';

import { Todo } from '../shared/todo';
import { TodoService } from '../shared/todo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {
  @Input() searchTodoValue = '';
  
  public page: number = 1;
  public todos = [];

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this._todoService.getTodos()
      .subscribe(data => this.todos = data);
  }


  delete(todo: Todo) {
    this._todoService.deleteTodo(todo.id);

    let taskIndex = this.todos.indexOf(todo);
    if( taskIndex > -1 ){
      this.todos.splice(taskIndex, 1);
    }

  }

  toggle(todo: Todo) {
    this._todoService.toggleTodo(todo);
  }

}
