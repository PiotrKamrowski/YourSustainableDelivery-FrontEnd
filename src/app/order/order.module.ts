import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderListComponent} from './order-list/order-list.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared-module/shared-module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],

  exports: [OrderListComponent],


  declarations: [OrderListComponent]
})
export class OrderModule {
}
