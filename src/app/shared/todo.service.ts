import { todosData } from './data';
import { Todo } from './todo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TodoService {
	private baseUrl: string = 'https://jsonplaceholder.typicode.com/todos';
	constructor( private _http: HttpClient) { }

	getTodos(): Observable<Todo[]> {
		return this._http.get<Todo[]>(this.baseUrl);
	}

	createTodo(title: string) { 
		return this._http.post<any>(this.baseUrl + '/post/' + title, title);
	}

	deleteTodo(id: number) {	
		return  this._http.delete(this.baseUrl + '/posts/' + id);
	}

	toggleTodo(todo: Todo) {
		todo.completed = !todo.completed;
	}
}