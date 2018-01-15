import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {ProductsListComponent} from './products/products-list/products-list.component';
import {ProductsModule} from './products/products.module';
import {ProductsService} from './products/products.service';
import {HttpClientModule} from '@angular/common/http';
import {CoreModule} from './core-module/core-module';
import {SharedModule} from './shared-module/shared-module';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {ProductRoutingModule} from './products/ProductsRoutingModule';
import {OrderModule} from './order/order.module';
import {LoggingModule} from './logging/logging.module';
import {OnlyLoggedInUsersGuard} from './logging/OnlyLoggedInUsersGuard';
import {StoreModule} from './store/store.module';
import {ManagerModule} from './manager/manager.module';
import {LoggingService} from './logging/logging.service';
import {StoreService} from './store/store.service';
import {OrderService} from './order/order.service';



@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    ProductRoutingModule,
    OrderModule,
    LoggingModule,
    StoreModule,
    ManagerModule
  ],
  providers: [ProductsService, LoggingService, StoreService, OrderService, OnlyLoggedInUsersGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
