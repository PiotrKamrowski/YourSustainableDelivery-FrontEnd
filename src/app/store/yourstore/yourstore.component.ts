import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../products/products.service';
import {Store} from '../models/Store';
import {SmallU} from '../../logging/models/SmallU';
import {User} from '../../logging/models/User';
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
  optionsRange: Array<any>;
  mySelectValue: string;
  mySelectValueAccesories: string;
  mySelectValueDrinks: string;
  mySelectValueFoods: string;
  mySelectValueBHHG: string;
  mySelectValueRTV: string;
  mySelectValueSmallHG: string;
  mySelectValueSmallElectronics: string;
  mySelectValueComputers: string;
  rangeEdited: string[] = [];


  constructor(private storeService: StoreService, private loggingService: LoggingService, private formBuilder: FormBuilder) {
  }


  loadStore() {


    this.storeService.getStore(this.user.storeId).subscribe((store) => {

      this.store = store;

      this.mySelectValueAccesories = this.store.accesories.toString();
      this.mySelectValueDrinks = this.store.drinks.toString();
      this.mySelectValueFoods = this.store.foods.toString();
      this.mySelectValueBHHG = this.store.bigHouseHoldGoods.toString();
      this.mySelectValueSmallHG = this.store.smallHouseHoldGoods.toString();
      this.mySelectValueRTV = this.store.rtv.toString();
      this.mySelectValueSmallElectronics = this.store.smallElectronics.toString();
      this.mySelectValueComputers = this.store.computers.toString();


    });

  }


  editUser(i: number) {

    if (this.user.permission === 'ADMIN') {
      this.userToEdit = this.userList[i];
    }


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

    this.optionsRange = [
      {value: '0', label: 'block'},
      {value: '1', label: '1'},
      {value: '2', label: '2'},
      {value: '3', label: '3'}];

  }


  sendEditedRange() {


    this.rangeEdited.push(this.mySelectValueAccesories);
    this.rangeEdited.push(this.mySelectValueDrinks);
    this.rangeEdited.push(this.mySelectValueFoods);
    this.rangeEdited.push(this.mySelectValueBHHG);
    this.rangeEdited.push(this.mySelectValueRTV);
    this.rangeEdited.push(this.mySelectValueSmallHG);
    this.rangeEdited.push(this.mySelectValueSmallElectronics);
    this.rangeEdited.push(this.mySelectValueComputers);

    console.log(this.mySelectValueComputers);
    console.log(this.rangeEdited);


    this.storeService.updateStoreRange(this.rangeEdited, this.user.storeId).subscribe(() => {

      this.loadStore();

    });

    this.rangeEdited = [];
  }

  sendEditedUser(login: string) {

    this.loggingService.editUserPermission(this.mySelectValue.concat(';').concat(login)).subscribe(() => {


    });


    this.loggingService.getListUsers(this.user.storeId).subscribe((users) => {

      this.userList = users;

    });

  }
}
