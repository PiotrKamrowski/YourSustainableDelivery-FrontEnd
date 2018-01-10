import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductAddsingleComponent} from './product-addsingle/product-addsingle.component';
import {ProductResolve} from './product-resolve.service';


const PRODUCT_ROUTES: Route[] = [
  {
    path: 'product/:ean',
    component: <any> ProductDetailComponent,
  },
  {
    path: 'addSigle/:id',
    component: <any> ProductAddsingleComponent,
    resolve: {product: ProductResolve}
  }


  ];




@NgModule({

  imports: [RouterModule.forChild(PRODUCT_ROUTES)],
  exports: [RouterModule]
})

export class ProductRoutingModule {
}
