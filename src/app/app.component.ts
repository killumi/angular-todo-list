import { Component } from '@angular/core';
import { Todo } from './shared/todo'
import { todosData } from './shared/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  mainTitle = 'TODO List';
}
