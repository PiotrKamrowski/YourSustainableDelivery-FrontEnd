import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../products/models/User';
import {SmallU} from '../products/models/SmallU';

@Injectable()
export class LoggingService {

  private urlUsercheck = 'http://localhost:8080/users/check';
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

  public checkUser(data): Observable<SmallU> {

    return this.httpClient.post<SmallU>(this.urlUsercheck, data);
  }

}
