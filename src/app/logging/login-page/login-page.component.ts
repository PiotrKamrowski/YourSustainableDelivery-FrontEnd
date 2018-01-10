import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../products/products.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SmallU} from '../../products/models/SmallU';
import {Session} from 'selenium-webdriver';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {


  smallUser: FormGroup;
  validateError: string;


  constructor(private productsService: ProductsService, private formBuilder: FormBuilder, private router: Router) {
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

    this.productsService.checkUser(this.smallUser.value).subscribe((response) => {


      console.log('111111111');
      console.log(response);

      if (response.correctlogin === true) {

        console.log('isok');


        sessionStorage.setItem('user', JSON.stringify(response));

        console.log(sessionStorage.getItem('user'));

        this.router.navigate(['productsList']);

      } else {

        this.validateError = 'złe hasło lub login';

      }

    });


  }

}
