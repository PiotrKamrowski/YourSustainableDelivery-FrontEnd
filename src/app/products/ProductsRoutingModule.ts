import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductAddsingleComponent} from './product-addsingle/product-addsingle.component';
import {ProductResolve} from './product-resolve.service';
import {ProductsinstoreDetailComponent} from './productsinstore-detail/productsinstore-detail.component';
import {ProductInStoreResolve} from './ProductInStore-resolve.service';


const PRODUCT_ROUTES: Route[] = [
  {
    path: 'product/:ean',
    component: <any> ProductDetailComponent,
  },
  {
    path: 'addSigle/:id',
    component: <any> ProductAddsingleComponent,
    resolve: {product: ProductResolve}
  },
  {
    path: 'productsInStore/:storeId/:id',
    component: <any> ProductsinstoreDetailComponent,
    resolve: {productInStore: ProductInStoreResolve}
  }


  ];




@NgModule({

  imports: [RouterModule.forChild(PRODUCT_ROUTES)],
  exports: [RouterModule]
})

export class ProductRoutingModule {
}
