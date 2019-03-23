import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/_models/todo';
import { TodoService } from 'src/app/_services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this._todoService.getTodos().subscribe( todos => this.todos = todos);
  }

}
