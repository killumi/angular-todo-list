import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from 'src/app/_models/todo';

@Pipe({
  name: 'search'
})
export class FilterTodoPipe implements PipeTransform {

  transform(todos: Todo[], searchStr: string) {
    if(!todos) return [];
    if(!searchStr) return todos;

    return todos.filter(todo => { 
     return todo.title.toLocaleLowerCase().includes(searchStr);
    });
  }

}
