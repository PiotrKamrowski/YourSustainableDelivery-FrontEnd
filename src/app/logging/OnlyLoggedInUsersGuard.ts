import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {ProductsService} from '../products/products.service';

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {
  constructor(private productsService: ProductsService, private router: Router) {
  }

  canActivate() {
    console.log('OnlyLoggedInUsers');
    if (this.productsService.isLoggedIn()) {
      return true;
    } else {
      window.alert('You dont have permission to view this page');

      this.router.navigate(['']);

      return false;
    }
  }
}
