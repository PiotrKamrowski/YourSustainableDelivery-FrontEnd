import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../products.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductInStore} from '../models/ProductInStore';
import {SmallU} from '../../logging/models/SmallU';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OrderService} from '../../order/order.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-productsinstore-detail',
  templateUrl: './productsinstore-detail.component.html',
  styleUrls: ['./productsinstore-detail.component.less']
})
export class ProductsinstoreDetailComponent implements OnInit {

  private user: SmallU;
  private productInStore: ProductInStore;
  orderForm: FormGroup;
  private permission: boolean;


  ean = +this.route.snapshot.params['ean'];

  constructor(private productService: ProductsService, private orderService: OrderService, private route: ActivatedRoute, private router: Router,
              private formBuilder: FormBuilder, private location: Location) {
  }

  ngOnInit() {

    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.LoadProductInStore();
    this.orderForm = this.buildOrderForm();

  }

  buildOrderForm() {

    return this.formBuilder.group(
      {
        id: '',

        id_store: 1,

        id_item: this.ean,

        quanity: [1, [Validators.required, Validators.min(1)]],

        date: '',

        delivered: false,

        created: this.user.login

      }
    );

  }


  addOrder() {

    console.log('dziala');

    this.orderService.addOrder(this.orderForm.value).subscribe(() => {

      this.location.back();
    });
  }

  LoadProductInStore() {

    const ean = this.route.snapshot.params['ean'];

    console.log(ean);

    const idStore = this.route.snapshot.params['storeId'];

    this.productService.getProductInStore(idStore, ean).subscribe((productInStore) => {

      this.productInStore = productInStore;
    });

  }


  userPermission(): boolean {

    return this.user.permission === 'USER';


  }

}
