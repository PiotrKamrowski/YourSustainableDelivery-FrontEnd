import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared-module/shared-module';
import {RouterModule} from '@angular/router';
import { EditStoreComponent } from './edit-store/edit-store.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { EditRangeComponent } from './edit-range/edit-range.component';
import {OrderListComponent} from '../order/order-list/order-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],

  exports: [EditRangeComponent, EditStoreComponent, EditUsersComponent],


  declarations: [EditStoreComponent, EditUsersComponent, EditRangeComponent]
})
export class ManagerModule { }
