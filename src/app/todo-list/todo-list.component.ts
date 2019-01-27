import { Component, OnInit, } from '@angular/core';

import { Todo } from '../shared/todo';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {
  public todos: any;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe( todos => this.todos = todos);
  }

  delete(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }

  toggle(todo: Todo) {
    this.todoService.toggleTodo(todo);
  }

}
