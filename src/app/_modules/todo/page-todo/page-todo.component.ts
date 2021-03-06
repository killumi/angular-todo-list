import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-todo',
  templateUrl: './page-todo.component.html',
  styleUrls: ['./page-todo.component.sass']
})
export class PageTodoComponent implements OnInit {
  todoTitle: string;
  searchTodoValue: string;

  constructor() { }

  ngOnInit() {}

  setSearchTodoValue(value) {
    this.searchTodoValue = value;
  }
}
