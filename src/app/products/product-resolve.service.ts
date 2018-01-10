import {ProductsService} from './products.service';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Injectable} from '@angular/core';
import {Product} from './models/Product';


@Injectable()
export class ProductResolve implements Resolve<Product> {


  constructor (private productsservice: ProductsService) {}



  resolve(route: ActivatedRouteSnapshot) {
    return this.productsservice.getProduct(route.params['id']);
  }



}
