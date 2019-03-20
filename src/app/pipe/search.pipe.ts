import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'search',
})

export class SearchPipe implements PipeTransform {
	transform(todos, value) {
		return todos.filter( todo => todo.title.includes(value));
	}
}