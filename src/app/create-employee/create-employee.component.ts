import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee = new Employee();
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => {
        if(data["emailId"]){
          this.gotoList();
        }
      }, error => {
        if (error) {
          alert('unauthorized user - only admin can add employee details')
        }
      });
    this.employee = new Employee();
  }

  gotoList() {
    this.router.navigate(['/employeelist']);
  }

}
