import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/_models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() toggle = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() update = new EventEmitter();
  edit = false;

  constructor() { }

  ngOnInit() {}

  toggleTodo() {
    this.toggle.emit(this.todo);
  }

  deleteTodo() {
    this.delete.emit(this.todo);
  }

  updateTodo(title:string) {
    this.edit = !this.edit;
    
    if(title != this.todo.title) {
      this.todo.title = title;
      this.update.emit(this.todo);
    }
  }
}
