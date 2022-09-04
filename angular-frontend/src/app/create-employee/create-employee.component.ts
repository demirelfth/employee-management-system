import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router'
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  constructor(private employeesService:EmployeeService,
              private router:Router) { }

  ngOnInit(): void {

  }

  saveEmployee(){
    this.employeesService.createEmployee(this.employee).subscribe(data=>{
      this.goToEmployeeList();
    })
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onSubmit() {
    this.saveEmployee();
  }

}
