import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor{
    token = 'Bearer ' + localStorage.getItem("token");
    constructor() {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(this.token != null){
            this.token = `Bearer ` + localStorage.getItem("token");
        }else{
            this.token = '';
        }
        request = request.clone({
            setHeaders: {
                'content-type': 'application/json',
                Authorization: this.token
            }
        });
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>')
        //request = request.clone({headers: request.headers.set('Authorization', 'Bearer '+this.employeeService.token)});
        console.log(request.headers);
        return next.handle(request);
    }
}