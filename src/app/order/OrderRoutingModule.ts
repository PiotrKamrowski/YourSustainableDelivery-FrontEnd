import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {OrderProductComponent} from './order-product/order-product.component';


const ORDER_ROUTES: Route[] = [
  {path: 'order/:storeId/:ean',
  component: <any> OrderProductComponent}
];


@NgModule({

imports: [RouterModule.forChild(ORDER_ROUTES)],
  exports: [RouterModule]

})















export class OrderRoutingModule{}
