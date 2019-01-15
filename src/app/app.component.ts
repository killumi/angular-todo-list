import { Component } from '@angular/core';

const todosData = [
  {
    title: 'Изучить JS',
    completed: true,
  },
  {
    title: 'Изучить ES7',
    completed: false,
  },
  {
    title: 'Изучить Angular 7',
    completed: false,
  },
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  mainTitle = 'TODO List';
  todos = todosData;

  toggleCompletedTast( todo: any ) {
    todo.completed = !todo.completed;
  }
}
