

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LayoutHome } from './home/layout.component';

const ROUTES : Routes = [
	{
		path: '',
		redirectTo: 'home', 
		pathMatch: 'full'
	},
	{
		path: 'login',
		component : LoginComponent
	},
	{
		path : 'register',
		component : RegisterComponent
	},
	{
		path : 'home',
		component : LayoutHome,
		children :
		[
			{
				path : '',
				loadChildren : './home/home.module#HomeModule'
			},
		]
	},
	{
		path : '**',//si no concuerda con ninguna ruta entonces entra aqui
		component : LayoutHome
	}
];

@NgModule({
	imports : [ RouterModule.forRoot(ROUTES) ],
	exports : [ RouterModule ]
})

export class AppRoutingModule {}
export const routingComponents  = [LoginComponent,RegisterComponent];