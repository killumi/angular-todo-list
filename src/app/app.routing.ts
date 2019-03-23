import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageHomeComponent } from './static-pages/page-home/page-home.component';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{ path: '', component: PageHomeComponent },
			{ path: 'todo', loadChildren: './_modules/todo/todo.module#TodoModule' }
		]
	}
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})

export class AppRouting { };