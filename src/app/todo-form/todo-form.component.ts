import { Component, OnInit} from '@angular/core';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.sass']
})
export class TodoFormComponent implements OnInit {

  title: string = '';

  constructor(private TodoService: TodoService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.title);
    this.TodoService.createTodo(this.title).subscribe(
      data => console.log('data:', data),
      error => console.log('Error', error),
    )
  }

}
