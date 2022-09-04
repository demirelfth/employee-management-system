import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { Employee } from '../employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];

  constructor(private employeesService:EmployeeService,
              private router:Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeesService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  employeeDetails(id:number){
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id:number){
    this.router.navigate(['update-employee', id]);
  }
  
  deleteEmployee(id:number){
    this.employeesService.deleteEmployee(id).subscribe(data => {
      this.getEmployees();
    })
  }
}
