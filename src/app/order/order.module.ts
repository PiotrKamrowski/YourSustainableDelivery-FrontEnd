import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderListComponent} from './order-list/order-list.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared-module/shared-module';
import { OrderProductComponent } from './order-product/order-product.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],

  exports: [OrderListComponent, OrderProductComponent],


  declarations: [OrderListComponent, OrderProductComponent, OrderDetailComponent]
})
export class OrderModule {
}
