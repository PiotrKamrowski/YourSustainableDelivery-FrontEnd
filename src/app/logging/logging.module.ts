import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegisterUsersComponent} from './register-users/register-users.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared-module/shared-module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule
  ],

  exports: [RegisterUsersComponent, LoginPageComponent],


  declarations: [RegisterUsersComponent, LoginPageComponent]
})
export class LoggingModule {
}

