import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../products/models/User';

@Injectable()
export class LoggingService {


  private urlEditUser = 'http://localhost:8080/users/editPermission';
  private urlStoreUsers = 'http://localhost:8080/users/getStoresUsers';

  constructor(private httpClient: HttpClient) {
  }


  public editUserPermission(data: string): Observable<string> {

    return this.httpClient.post<string>(this.urlEditUser, data);

  }

  public getListUsers(idStore: number): Observable<User[]> {

    return this.httpClient.get<User[]>(this.urlStoreUsers + `/${idStore}`);
  }


}
