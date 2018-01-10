import {Component, OnInit} from '@angular/core';
import {Product} from '../models/Product';
import {ProductsService} from '../products.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.less']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  inStore: boolean;


  constructor(private productsService: ProductsService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

    this.loadProduct();
    this.loadIsInStore();

  }


  loadProduct() {

    const ean = +this.route.snapshot.params['ean'];


    this.productsService.getProduct(ean).subscribe((product) => {
      this.product = product;
    });
  }


  do() {

this.router.navigate(['addSigle/' + this.product.ean]);

  }

  backToList() {

    this.router.navigate(['productsList']);
  }

  loadIsInStore() {

    const ean = +this.route.snapshot.params['ean'];

    this.productsService.isInStore(1, ean).subscribe((instore) => {

      this.inStore = instore;
    });
  }

}
