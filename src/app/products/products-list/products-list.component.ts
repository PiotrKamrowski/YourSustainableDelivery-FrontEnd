import {Component, OnInit} from '@angular/core';
import {Product} from '../models/Product';
import {ProductsService} from '../products.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.less']
})
export class ProductsListComponent implements OnInit {


  constructor(private productService: ProductsService, private router: Router) {
  }

  products: Product[];
  productsByCategory: Product[];
  productsAll: Product[];
  passwordHashed: string;
  kod: string;

  ngOnInit() {
    this.loadProductsList();

    console.log(sessionStorage.getItem('user'));

  }


  goToProductDetails(product: Product) {


    this.router.navigate(['/product', product.ean]);
  }


  loadProductsList(): void {
    this.productService.getProductsList().subscribe((products) => {
      this.products = products;
      this.productsAll = products;
    });
  }

  backAll() {

    this.products = this.productsAll;
  }

  loadProductByCategory(category: string) {



    this.productsByCategory = [];

    for (let i = 0; i < this.productsAll.length; i++) {

      if (this.productsAll[i].category === category) {


        this.productsByCategory.push(this.productsAll[i]);
      }
    }

    this.products = this.productsByCategory;

  }






}
