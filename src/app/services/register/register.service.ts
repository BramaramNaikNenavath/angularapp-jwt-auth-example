import { Injectable } from '@angular/core';
import { Register } from 'src/app/models/Register';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private URL = 'http://localhost:8080/api/';
  

  constructor(private http: HttpClient) { }

  registerUser(register: Register) {
    console.log('registerUser() invoked for > ' + register.email);
    return this.http.post<Register>(`${this.URL}` + 'userregister', register);
  }
}
