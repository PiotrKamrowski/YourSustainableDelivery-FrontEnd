import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../products/products.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SmallU} from '../models/SmallU';
import {Session} from 'selenium-webdriver';
import {Router} from '@angular/router';
import {Md5} from 'ts-md5/dist/md5';
import {LoggingService} from '../logging.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {


  smallUser: FormGroup;
  validateError: string;


  constructor(private loggingService: LoggingService, private formBuilder: FormBuilder, private router: Router) {
  }


  smallUserForm() {

    return this.formBuilder.group(
      {
        login: ['', Validators.required],
        password: ['', Validators.required],
        storeId: '',
        correctlogin: '',
      }
    )


      ;
  }


  ngOnInit() {

    this.smallUser = this.smallUserForm();


  }


  send() {

    this.loggingService.checkUser(this.smallUser.value).subscribe((response) => {


      console.log('111111111');
      console.log(response);

      if (response.correctlogin === true) {

        console.log('isok');


        sessionStorage.setItem('user', JSON.stringify(response));

        console.log(sessionStorage.getItem('user'));
        console.log(Md5.hashStr(response.password));

        this.router.navigate(['productsList']);

      } else {

        this.validateError = 'złe hasło lub login';

      }

    });


  }

}
