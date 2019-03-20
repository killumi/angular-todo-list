import { Component, OnInit, Output} from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.sass']
})
export class TodoFormComponent implements OnInit {
  @Output() onSearch = new EventEmitter();
  search: string = '';
  title: string = '';

  constructor(private TodoService: TodoService) { }

  ngOnInit() {}

  onSubmit() {
    console.log(this.title);
    this.TodoService.createTodo(this.title).subscribe(
      data => console.log('data:', data),
      error => console.log('Error', error),
    )
  }

  searchTodo() {
    this.onSearch.emit(this.search);
  }

}
