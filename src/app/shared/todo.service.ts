import { todosData } from './data';
import { Todo } from './todo';

export class TodoService {
	todos: Todo[] = todosData;

	getTodos(): Todo[] {
		return this.todos;
	}

	createTodo(title: string) {
		let todo = new Todo(title);
		this.todos.push(todo);
	}

	deleteTodo( todo: Todo) {
		let tastIndex = this.todos.indexOf(todo);

    if( tastIndex > -1){
      this.todos.splice(tastIndex, 1)
    }
	}

	toggleTodo(todo: Todo) {
		todo.completed = !todo.completed;
	}
}