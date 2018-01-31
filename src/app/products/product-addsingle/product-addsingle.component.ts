import {Component, OnInit} from '@angular/core';
import {Product} from '../models/Product';
import {ProductsService} from '../products.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import {ProductInStore} from '../models/ProductInStore';
import {ValidateOrder} from '../order.validator';
import {OrderService} from '../../order/order.service';

@Component({
  selector: 'app-product-addsingle',
  templateUrl: './product-addsingle.component.html',
  styleUrls: ['./product-addsingle.component.less']
})
export class ProductAddsingleComponent implements OnInit {

  product: Product;
  orderForm: FormGroup;
  productInStoreForm: FormGroup;


  ean = +this.route.snapshot.params['ean'];

  constructor(private productService: ProductsService, private orderService: OrderService, private route: ActivatedRoute, private router: Router,
              private formBuilder: FormBuilder) {


  }


  buildOrderForm() {

    return this.formBuilder.group(
      {
        id: '',

        id_store: 1,

        id_item: this.product.ean,

        quanity: [this.product.inBox, [Validators.required, Validators.min(1)]],

        date: '',

        delivered: false,

      }
    );

  }


  buildProductInStoreForm() {

    return this.formBuilder.group({


      id_store: 1,
      id_item: this.product.ean,
      quanity: 0,
      minSupply: '0',
      inOrders: 0,
      price: this.product.purchasePrice * 1.2,
      block: true,

      productDetail: this.product


    });
  }

  addOrder() {


    this.orderService.addOrder(this.orderForm.value).subscribe((resp1) => {

      this.productService.addProductInStore(this.productInStoreForm.value).subscribe((resp2) => {

      });


    });
    console.log('and here');

  }


  ngOnInit() {
    this.loadProduct();


    // this.productInStoreForm = this.buildProductInStoreForm();
    this.orderForm = this.buildOrderForm();
    this.productInStoreForm = this.buildProductInStoreForm();
  }

  loadProduct() {

    /* const ean = +this.route.snapshot.params['ean'];


     this.productService.getProduct(ean).subscribe((product) => {
       this.product = product;
     });*/

    this.product = this.route.snapshot.data['product'];


  }


}
