import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { PageTodoComponent } from './page-todo/page-todo.component';
import { TodoListComponent } from './page-todo/todo-list/todo-list.component';
import { TodoFormComponent } from './page-todo/todo-form/todo-form.component';
import { TodoItemComponent } from './page-todo/todo-item/todo-item.component';
import { TodoRouting } from './todo.routing';

@NgModule({
  declarations: [TodoListComponent, TodoFormComponent, TodoItemComponent, PageTodoComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    TodoRouting
  ],
  exports: [TodoFormComponent, TodoListComponent, TodoItemComponent, MatButtonModule]
})
export class TodoModule { }
