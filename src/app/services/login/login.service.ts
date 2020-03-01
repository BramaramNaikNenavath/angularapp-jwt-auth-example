import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from 'src/app/models/Login';
import { TokenInterceptor } from 'src/app/auth/tokeninterceptor';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  loginAuthentication(login: Login) {
    console.log('from login service')
    return this.http.post<Login>(`${this.URL}` + 'userauthenticate', login);
  }

  logout() {
    console.log("logout from service");
    return this.http.get(`${this.URL}` + 'logout/?user_status=invalid', {responseType: 'text'});
  }
}
