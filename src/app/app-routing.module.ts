import {Route, RouterModule} from '@angular/router';
import {ProductsListComponent} from './products/products-list/products-list.component';
import {NgModule} from '@angular/core';
import {ProductsinstoreComponent} from './products/productsinstoreList/productsinstore.component';
import {OrderListComponent} from './order/order-list/order-list.component';
import {RegisterUsersComponent} from './logging/register-users/register-users.component';
import {LoginPageComponent} from './logging/login-page/login-page.component';
import {OnlyLoggedInUsersGuard} from './logging/OnlyLoggedInUsersGuard';
import {YourstoreComponent} from './store/yourstore/yourstore.component';
import {EditUsersComponent} from './manager/edit-users/edit-users.component';
import {StoreResolve} from './store/store-resolve.service';


const APP_ROUTES: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: 'login-page' },
  {path: 'productsList', component: <any>ProductsListComponent,
  canActivate: [OnlyLoggedInUsersGuard]} ,
  {path: 'productsInStore', component: <any>ProductsinstoreComponent,
    canActivate: [OnlyLoggedInUsersGuard]},
  {path: 'orders', component: <any>OrderListComponent,
    canActivate: [OnlyLoggedInUsersGuard]},
  {path: 'register', component: <any>RegisterUsersComponent,
    canActivate: [OnlyLoggedInUsersGuard]},
  {path: 'login-page', component: <any>LoginPageComponent},
  {path: 'yourstore', component: <any>YourstoreComponent,
    resolve: {store: StoreResolve },
    canActivate: [OnlyLoggedInUsersGuard]},
  {path: 'editusersStore', component: <any>EditUsersComponent,
    canActivate: [OnlyLoggedInUsersGuard]},
  ];



@NgModule({

  imports: [    RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
