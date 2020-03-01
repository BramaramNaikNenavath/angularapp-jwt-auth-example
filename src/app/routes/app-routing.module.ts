import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'employeelist', component: EmployeeListComponent},
  { path: 'addemployee', component: CreateEmployeeComponent},
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
