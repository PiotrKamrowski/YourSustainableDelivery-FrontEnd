import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Store} from '../products/models/Store';

@Injectable()
export class StoreService {

  private urlStore = 'http://localhost:8080/store/yourStore';
  constructor(private httpClient: HttpClient) {
  }



  public getStore(idStore: number): Observable<Store> {

    return this.httpClient.get<Store>(this.urlStore + `/${idStore}`);
  }




}
