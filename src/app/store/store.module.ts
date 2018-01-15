import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {YourstoreComponent} from './yourstore/yourstore.component';
import {SharedModule} from '../shared-module/shared-module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SelectModule} from 'angular2-select';

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

  declarations: [YourstoreComponent]
})
export class StoreModule {
}
