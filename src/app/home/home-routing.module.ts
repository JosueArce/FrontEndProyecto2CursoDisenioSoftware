import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductComponent } from './catalog/product/product.component';



const routes : Routes = [
	{
		path: 'admin',
		component : AdminComponent
	},
	{
		path: '', redirectTo: 'about', pathMatch: 'full'
	},
	{
		path : 'about',
		component : AboutComponent
	},
	{
		path : 'catalog',
		component : CatalogComponent
	},
	{
		path : 'shopping-cart',
		component : ShoppingCartComponent
	},
	{
		path : 'product',
		component : ProductComponent
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
export const routingComponents  = [AdminComponent,AboutComponent,CatalogComponent,ShoppingCartComponent,ProductComponent];