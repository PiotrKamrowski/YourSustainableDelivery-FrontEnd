import {SmallU} from '../products/models/SmallU';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../products/models/User';
import {Order} from '../products/models/Order';

@Injectable()
export class OrderService {

  private urlAddOrder = 'http://localhost:8080/orders/addOrder';
  private urlOrder = 'http://localhost:8080/orders/ordersList';

  constructor(private httpClient: HttpClient) {
  }

  public addOrder(data): Observable<Order> {

    return this.httpClient.post<Order>(this.urlAddOrder, data);
  }

  public getListOrders(idStore: number): Observable<Order[]> {

    return this.httpClient.get<Order[]>(this.urlOrder + `/${idStore}`);
  }


}
