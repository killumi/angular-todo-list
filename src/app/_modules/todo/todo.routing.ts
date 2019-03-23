import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageTodoComponent } from './page-todo/page-todo.component';

const routes: Routes = [
	{ path: '', component: PageTodoComponent }
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class TodoRouting {}