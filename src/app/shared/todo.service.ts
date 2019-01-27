import { todosData } from './data';
import { Todo } from './todo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
	todos: any;

	constructor( private _http: HttpClient) { }

	getTodos() {
		return this.todos = this._http.get('https://jsonplaceholder.typicode.com/todos');
		// return this.todos;
	}

	createTodo( title: string ) {
		let todo = new Todo(title);
		// this.todos.push(todo);
	}

	deleteTodo(todo) {
		// let tastIndex = this.todos.indexOf(todo);	

		console.log(todo);
		let taskIndex = todo.id;
		console.log(taskIndex);

    if( taskIndex > -1){
			console.log(this.todos);
      // this.todos.splice(taskIndex, 1)/
    }
	}

	toggleTodo( todo: Todo ) {
		todo.completed = !todo.completed;
	}
}