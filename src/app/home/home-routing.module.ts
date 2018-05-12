import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';

const routes : Routes = [
	{
		path: 'admin',
		component : AdminComponent
	},
	{
		path : 'about',
		component : AboutComponent
	},
	{
		path : '**',//sino concuerda con ninguna ruta entonces entra aqui
		component : AdminComponent
	}
];

@NgModule({
	imports : [ RouterModule.forChild(routes) ],
	exports : [ RouterModule ]
})

export class HomeRoutingModule {}
export const routingComponents  = [AdminComponent,AboutComponent];