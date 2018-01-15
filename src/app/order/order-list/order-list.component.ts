import {Component, OnInit} from '@angular/core';
import {Order} from '../../products/models/Order';
import {OrderService} from '../order.service';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.less']
})
export class OrderListComponent implements OnInit {


  orders: Order[];


  constructor(private orderService: OrderService) {
  }

  ngOnInit() {

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

    this.orderService.getListOrders(1).subscribe((orders) => {

      this.orders = orders;


    });


  }


}
