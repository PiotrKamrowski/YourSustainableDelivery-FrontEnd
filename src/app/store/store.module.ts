import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {YourstoreComponent} from './yourstore/yourstore.component';
import {SharedModule} from '../shared-module/shared-module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SelectModule} from 'angular2-select';
import {StoreResolve} from './store-resolve.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    SelectModule
  ],
  exports: [YourstoreComponent],

  providers: [StoreResolve],

  declarations: [YourstoreComponent]
})
export class StoreModule {
}
