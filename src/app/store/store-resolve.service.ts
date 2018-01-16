import {Product} from '../products/models/Product';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';

import {Injectable} from '@angular/core';
import {StoreService} from './store.service';
import {Store} from './models/Store';
import {SmallU} from '../logging/models/SmallU';

@Injectable()
export class StoreResolve implements Resolve<Store> {

  private user: SmallU = JSON.parse(sessionStorage.getItem('user'));

  constructor(private storeService: StoreService) {
  }


  resolve(route: ActivatedRouteSnapshot) {
    return this.storeService.getStore(this.user.storeId);
  }


}
