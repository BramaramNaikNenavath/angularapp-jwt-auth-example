import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from '../services/login/login.service';
import { Login } from '../models/Login';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  login = new Login();
  submitted = false;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  userLogin() {
    console.log("user login clicked");
    console.log(this.login);
    this.loginService.loginAuthentication(this.login).subscribe(
      data => {
        console.log(data);
        this.login = data;
        console.log(this.login);
        if (data["statusText"] == 'success') {
          console.log('success');
          console.log(data["token"]);
          this.submitted = true;
          localStorage.setItem("token", data["token"]);
          this.router.navigate(['/employeelist']);
        }
      },
      error => console.log('Could not create todo.')
    );
  }

  get loginFormControls() {
    return this.loginForm.controls;
  }

}
