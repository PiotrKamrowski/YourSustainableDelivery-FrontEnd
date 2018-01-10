import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Product} from './models/Product';
import {HttpClient} from '@angular/common/http';
import {ProductInStore} from './models/ProductInStore';
import {Order} from './models/Order';
import {SmallU} from './models/SmallU';


@Injectable()
export class ProductsService {

  private urlUsercheck = 'http://localhost:8080/users/check';
  private urlOrder = 'http://localhost:8080/orders/ordersList';
  private urlProducts = 'http://localhost:8080/products/productsList';
  private urlInStore = 'http://localhost:8080/productsInStores/productInStore';
  private urlISInStore = 'http://localhost:8080/productsInStores/isInStore';
  private urlAddProductInStore = 'http://localhost:8080/products/addProductInStore';
  private urlAddOrder = 'http://localhost:8080/orders/addOrder';

  constructor(private httpClient: HttpClient) {
  }

  public getProductsList(): Observable<Product[]> {


    return this.httpClient.get<Product[]>(this.urlProducts);
  }


  public checkUser(data): Observable<SmallU> {

    return this.httpClient.post<SmallU>(this.urlUsercheck, data);
  }


  public getProductsInStore(id: number): Observable<ProductInStore[]> {

    return this.httpClient.get<ProductInStore[]>(this.urlInStore + `/${id}`);
  }

  public getProduct(id: number): Observable<Product> {

    return this.httpClient.get<Product>(this.urlProducts + `/${id}`);

  }


  public addOrder(data): Observable<Order> {

    return this.httpClient.post<Order>(this.urlAddOrder, data);
  }


  public addProductInStore(data): Observable<ProductInStore> {

    return this.httpClient.post<ProductInStore>(this.urlAddProductInStore, data);
  }


  /*
      public getProductInStore(id: number): Observable<ProductInStore> {

        return this.httpClient.get<ProductInStore>()


      }*/


  public isInStore(storeId: number, productId: number): Observable<boolean> {

    return this.httpClient.get<boolean>(this.urlISInStore + `/${storeId}/${productId}`);
  }


  public getListOrders(idStore: number): Observable<Order[]> {

    return this.httpClient.get<Order[]>(this.urlOrder + `/${idStore}`);
  }


  isLoggedIn(): boolean {

    if (sessionStorage.getItem('user') != null) {

      return true;
    }

    return false;
  }

}

