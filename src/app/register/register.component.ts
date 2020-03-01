import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms'
import { RegisterService } from '../services/register/register.service';
import { Register } from '../models/Register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  register = new Register();

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      givenName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      userName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  registerUser() {
    alert('register clicked');
    console.log(this.register);
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }else{
      this.registerService.registerUser(this.register).subscribe(
        data => {
          console.log(data);
          this.register = data;
          console.log(this.register);
        },
        error => console.log('Could not create todo.')
      );

    }
  }

  get registerFormControls() {
    return this.registerForm.controls;
  }

}
