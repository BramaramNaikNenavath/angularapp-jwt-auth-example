import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getEmployeesList(): Observable<any>  {
    console.log('getting all employees');
    console.log(localStorage.getItem("token"))
    //const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.token });
    return this.http.get(`${this.baseUrl}` + 'employees');
  }

  createEmployee(employee: Employee) {
    console.log('Creating new employee');
    return this.http.post(`${this.baseUrl}` + 'saveemployee', employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    console.log("update employee service for id > "+id );
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.name + ':' + this.password) });
    return this.http.put(`${this.baseUrl}` + 'update/' + `${id}`, value);
  }

  getEmployee(id: number): Observable<any> {
    console.log('getting employee with id > '+id);
    return this.http.get(`${this.baseUrl}` + 'employees/' + `${id}`);
  }

  deleteEmployee(id: number): Observable<any> {
    console.log("delete employee > "+id);
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.name + ':' + this.password) });
    return this.http.delete(`${this.baseUrl}` + 'delete/' + `${id}`);
  }
}
