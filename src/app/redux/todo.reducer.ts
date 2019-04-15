import { Action } from '@ngrx/store';
import { TODO_ACTION, AddTodo, TodoActions } from './todo.action';

const initialState = {
	todos: [
		{
			"userId": 1,
			"id": 1,
			"title": "delectus aut autem",
			"completed": true
		},
		{
			"userId": 1,
			"id": 2,
			"title": "quis ut nam facilis et officia qui",
			"completed": false
		},
		{
			"userId": 1,
			"id": 3,
			"title": "fugiat veniam minus",
			"completed": false
		},
	]
}

export function todoReducer(state = initialState, action: TodoActions) {
	switch(action.type) {
		case TODO_ACTION.ADD_TODO:
			return {
				...state,
				todos: [...state.todos, action.payload]
			}

		case TODO_ACTION.DELETE_TODO: 
			return {
				...state,
				todos: [...state.todos.filter( todo => todo.id != action.payload.id)]
			}

		case TODO_ACTION.UPDATE_TODO:
			return {
				...state,
				todos: [...state.todos]
			}
		default:
			return state
	}
}