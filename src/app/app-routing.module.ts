import {Route, RouterModule} from '@angular/router';
import {ProductsListComponent} from './products/products-list/products-list.component';
import {NgModule} from '@angular/core';
import {ProductsinstoreComponent} from './products/productsinstoreList/productsinstore.component';
import {OrderListComponent} from './order/order-list/order-list.component';
import {RegisterUsersComponent} from './logging/register-users/register-users.component';
import {LoginPageComponent} from './logging/login-page/login-page.component';


const APP_ROUTES: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: 'productsList' },
  {path: 'productsList', component: <any>ProductsListComponent},
  {path: 'productsInStore', component: <any>ProductsinstoreComponent},
  {path: 'orders', component: <any>OrderListComponent},
  {path: 'register', component: <any>RegisterUsersComponent},
  {path: 'login-page', component: <any>LoginPageComponent}
  ];



@NgModule({

  imports: [    RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
