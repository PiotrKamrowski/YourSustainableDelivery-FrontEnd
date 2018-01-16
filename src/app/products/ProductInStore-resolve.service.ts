import {Product} from './models/Product';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {ProductsService} from './products.service';
import {Injectable} from '@angular/core';
import {ProductInStore} from './models/ProductInStore';
import {SmallU} from '../logging/models/SmallU';

@Injectable()
export class ProductInStoreResolve implements Resolve<ProductInStore> {

  private user: SmallU = JSON.parse(sessionStorage.getItem('user'));

  constructor (private productsservice: ProductsService) {}



  resolve(route: ActivatedRouteSnapshot) {
    return this.productsservice.getProductInStore(this.user.storeId, route.params['id']);
  }



}
