import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../products/products.service';
import {Store} from '../../products/models/Store';
import {SmallU} from '../../products/models/SmallU';
import {User} from '../../products/models/User';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LoggingService} from '../../logging/logging.service';
import {StoreService} from '../store.service';

@Component({
  selector: 'app-yourstore',
  templateUrl: './yourstore.component.html',
  styleUrls: ['./yourstore.component.less']
})
export class YourstoreComponent implements OnInit {

  user: SmallU;
  store: Store;
  userList: User[];
  userToEdit: User;
  options: Array<any>;
  mySelectValue: string;

  constructor(private storeService: StoreService, private loggingService: LoggingService, private formBuilder: FormBuilder) {
  }


  loadStore() {


    this.storeService.getStore(this.user.storeId).subscribe((store) => {

      this.store = store;
    });

  }


  editUser(i: number) {


    this.userToEdit = this.userList[i];


  }

  loadUsers() {

    this.loggingService.getListUsers(this.user.storeId).subscribe((users) => {

      this.userList = users;
    });
  }

  ngOnInit() {

    this.user = JSON.parse(sessionStorage.getItem('user'));

    this.loadStore();
    this.loadUsers();


    this.options = [
      {value: 'FULL', label: 'PEŁNE'},
      {value: 'USER', label: 'ZWYKŁE'}];


  }


  sendEditedUser(login: string) {

    this.loggingService.editUserPermission(this.mySelectValue.concat(';').concat(login)).subscribe(() => {


    });


    this.loggingService.getListUsers(this.user.storeId).subscribe((users) => {

      this.userList = users;

    });

  }
}
