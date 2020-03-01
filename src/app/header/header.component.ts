import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { Login } from '../models/Login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  doLogout() {
    console.log('logout')
    this.loginService.logout().subscribe(
      data => {
        console.log(data);
        if(data == 'invalid'){
            localStorage.setItem('token','');
        }
      }
    );
  }

}
