import { TODO_ACTION, TodoActions } from './todo.action';

const initialState = {
	todos: []
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
				todos: [...state.todos.filter(todo => todo.id != action.payload.id)]
			}

		case TODO_ACTION.UPDATE_TODO:
			return {
				...state,
				todos: [...state.todos]
			}
		case TODO_ACTION.LOAD_TODOS:
			return {
				...state,
				todos: [...action.payload]
			}
		default:
			return state
	}
}