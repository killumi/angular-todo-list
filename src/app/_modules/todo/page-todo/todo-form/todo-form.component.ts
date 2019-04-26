import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoService } from 'src/app/_services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.sass']
})
export class TodoFormComponent {
  todoForm = this._fb.group({
    search: [''],
    todoTitle: ['', Validators.required]
  });
  
  constructor(
    private _fb: FormBuilder,
    private _todoService: TodoService,
    ) { }

  addTodo() {
    if(!this.todoForm.value.todoTitle) {
      console.error('Paste todo title');
      return;
    }

    const todo = {
      "title": this.todoForm.value.todoTitle,
      "completed": false
    }

    this._todoService.addTodo(todo);
  }

  loadTodos() {
    this._todoService.loadTodo();
  }
  
}
