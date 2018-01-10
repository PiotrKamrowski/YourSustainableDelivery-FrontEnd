import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SmallU} from '../../products/models/SmallU';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  user: SmallU;

  constructor(private router: Router) {
  }

  ngOnInit() {

    this.user = JSON.parse(sessionStorage.getItem('user'));

  }


  logout() {
    sessionStorage.clear();

    this.router.navigate(['']);

  }

}
