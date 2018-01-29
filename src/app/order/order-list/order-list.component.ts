import {Component, OnInit} from '@angular/core';
import {Order} from '../models/Order';
import {OrderService} from '../order.service';
import {SmallU} from '../../logging/models/SmallU';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.less']
})
export class OrderListComponent implements OnInit {


  orders: Order[];
  user: SmallU;


  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.loadOrders();

  }

  sortByDate(operator: number) {


    if (operator = 1) {

      this.orders.sort(function (obj1, obj2) {
          return +obj2.date - +obj1.date;
        }
      );


    } else if (operator = 0) {

      this.orders.sort(function (obj1, obj2) {
          return +obj1.date - +obj2.date;
        }
      );


    }
  }


  sortByQuanity(operator: number) {


    if (operator = 1) {

      this.orders.sort(function (obj1, obj2) {
          return obj2.quanity - obj1.quanity;


        }
      );


    } else if (operator = 0) {

      this.orders.sort(function (obj1, obj2) {
          return obj1.quanity - obj2.quanity;
        }
      );


    }
  }

  loadOrders() {




    this.orderService.getListOrders(this.user.storeId).subscribe((orders) => {

      this.orders = orders;


    });


  }


}
