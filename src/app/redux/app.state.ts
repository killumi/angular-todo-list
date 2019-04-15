import { Todo } from '../_models/todo';

export interface AppState {
	todoPage: {
		todos: Todo[]
	}
}