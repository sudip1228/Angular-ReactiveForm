import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee=[];
  errormsg;

  constructor(private _employeeService:EmployeeService) { }//injecting dependency of service in constructor

  ngOnInit() {//called automatically

    this._employeeService.getemployee().subscribe(anything=> this.employee=anything); /*error=> this.errormsg=error );//subscribing to observable*/
  }

}
