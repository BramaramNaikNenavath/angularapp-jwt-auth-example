import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee/employee.service';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    console.log('loadEmployees')
    this.employees = this.employeeService.getEmployeesList();
    console.log(this.employees)
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.loadEmployees();
        },
        error => {
          if(error){
            alert('unauthorized user - only admin can delete employee details')
          }
          });
  }

  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['update', id]);
  }

}
