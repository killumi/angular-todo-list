import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoService } from 'src/app/_services/todo.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/app.state';
import { AddTodo } from 'src/app/redux/todo.action';

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
    private store: Store<AppState>
    ) { }

  addTodo() {
    const todo = {
      "userId": 1,
      "id": 19,
      "title": this.todoForm.value.todoTitle,
      "completed": false
    }

    this.store.dispatch(new AddTodo(todo));
  }
  
}
