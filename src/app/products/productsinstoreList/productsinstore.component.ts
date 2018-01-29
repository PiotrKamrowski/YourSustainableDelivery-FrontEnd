import {Component, OnInit} from '@angular/core';
import {ProductInStore} from '../models/ProductInStore';
import {ProductsService} from '../products.service';
import {SmallU} from '../../logging/models/SmallU';

@Component({
  selector: 'app-productsinstore',
  templateUrl: './productsinstore.component.html',
  styleUrls: ['./productsinstore.component.less']
})
export class ProductsinstoreComponent implements OnInit {

  productsinStore: ProductInStore[];
  productsinStoreAll: ProductInStore[];
  productsinStoreByCategory: ProductInStore[];
  user: SmallU;

  constructor(private productservice: ProductsService) {
  }

  ngOnInit() {

    this.loadProducts();

    this.user = this.user = JSON.parse(sessionStorage.getItem('user'));

    console.log(this.user.storeId);
  }


  backAll() {

    this.productsinStore = this.productsinStoreAll;
  }


  loadProducts(): void {

    this.productservice.getProductsInStore(1).subscribe((products) => {
      this.productsinStore = products;
      this.productsinStoreAll = this.productsinStore;

    });
  }

  loadProductsinStoreByCategory(category: string) {

    this.productsinStoreByCategory = [];

    for (let i = 0; i < this.productsinStoreAll.length; i++) {

      if (this.productsinStoreAll[i].productDetail.category === category) {


        this.productsinStoreByCategory.push(this.productsinStoreAll[i]);
      }
    }

    this.productsinStore = this.productsinStoreByCategory;

  }


}
