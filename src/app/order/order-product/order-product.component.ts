import {Component, OnInit} from '@angular/core';
import {Order} from '../models/Order';
import {OrderService} from '../order.service';
import {SmallU} from '../../logging/models/SmallU';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.less']
})
export class OrderProductComponent implements OnInit {


  orders: Order[];
  user: SmallU;

  constructor(private orderService: OrderService, private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.loadOrders();

  }


  loadOrders() {

    const ean = +this.route.snapshot.params['ean'];

    this.orderService.getListOrdersByItem(this.user.storeId, ean).subscribe((orders) => {

      this.orders = orders;
    });
  }


}
