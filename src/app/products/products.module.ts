import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsListComponent} from './products-list/products-list.component';
import {SharedModule} from '../shared-module/shared-module';
import {ProductsinstoreComponent} from './productsinstoreList/productsinstore.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {RouterModule} from '@angular/router';
import {ProductAddsingleComponent} from './product-addsingle/product-addsingle.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProductResolve} from './product-resolve.service';
import {ProductsinstoreDetailComponent} from './productsinstore-detail/productsinstore-detail.component';
import {ProductInStoreResolve} from './ProductInStore-resolve.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [ProductsListComponent, ProductsinstoreComponent, ProductAddsingleComponent, ProductsinstoreDetailComponent],
  providers: [
    ProductResolve, ProductInStoreResolve
  ],

  declarations: [ProductsListComponent, ProductsinstoreComponent, ProductDetailComponent, ProductAddsingleComponent, ProductsinstoreDetailComponent]
})
export class ProductsModule {
}
