import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Store} from './models/Store';

@Injectable()
export class StoreService {

  private urlStoreRange = 'http://localhost:8080/store/editRange';
  private urlStore = 'http://localhost:8080/store/yourStore';

  constructor(private httpClient: HttpClient) {
  }


  public getStore(idStore: number): Observable<Store> {

    return this.httpClient.get<Store>(this.urlStore + `/${idStore}`);
  }

  public updateStoreRange(rangeEdited: string[], idStore: number): Observable<string[]> {

    return this.httpClient.post<string[]>(this.urlStoreRange + `/${idStore}`, rangeEdited);
  }



}
