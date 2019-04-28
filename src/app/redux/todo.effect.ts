import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TODO_ACTION, AddTodo } from './todo.action';
import { switchMap, mergeMap } from 'rxjs/operators';
import { TodoService } from '../_services/todo.service';
import { Todo } from '../_models/todo';

@Injectable()

export class TodoEffect {
	constructor(
		private actions$: Actions,
		private _todoService: TodoService,
		)	{}

	@Effect()
	loadTodos = this.actions$.pipe(
		ofType(TODO_ACTION.ADD_TODO),
		switchMap((action: AddTodo) => {
			return this._todoService.preloadTodo();
		}),
		mergeMap(
			(todos: Todo[]) => {
				return [
					{
						type: TODO_ACTION.LOAD_TODOS,
						payload: todos
					}
				]
			}
		)
	)
}