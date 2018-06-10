import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductComponent } from './catalog/product/product.component';
import { PaymentComponent } from './shopping-cart/payment/payment.component';
import { SellerRegistrationComponent } from './seller-registration/seller-registration.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { CategoryRegistrationComponent } from './category-registration/category-registration.component';
import { PurchasesComponent } from './purchases/purchases.component';

const routes : Routes = [
	{
		path: 'admin',
		component : AdminComponent
	},
	{
		path: '',
		component : AboutComponent
	},
	{
		path: 'shopping-cart',
		component : ShoppingCartComponent
	},
	{
		path: 'payment',
		component : PaymentComponent
	},
	{
		path: 'product',
		component : ProductComponent
	},
	{
		path : 'catalog',
		component : CatalogComponent
	},
	{
		path : 'seller-registration',
		component : SellerRegistrationComponent
	},
	{
		path : 'cart',
		component : ShoppingCartComponent
	},
	{
		path : 'my-products',
		component : MyProductsComponent
	},
	{
		path : 'category-registration',
		component : CategoryRegistrationComponent
	},
	{
		path : 'purchases',
		component : PurchasesComponent
	},
	{
		path : '**',//sino concuerda con ninguna ruta entonces entra aqui
		component : AboutComponent
	}
];

@NgModule({
	imports : [ RouterModule.forChild(routes) ],
	exports : [ RouterModule ]
})

export class HomeRoutingModule {}
export const routingComponents  = [
		AdminComponent,AboutComponent, 
		CatalogComponent, 
		ShoppingCartComponent, 
		ProductComponent,
		PaymentComponent,
		SellerRegistrationComponent,
		MyProductsComponent
	];