import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  
  employee=[];
errormsg;
  constructor( private _employeeService:EmployeeService) { }
  ngOnInit() {

    this._employeeService.getemployee().subscribe(anything=> this.employee=anything);
                                                 /*  error=> this.errormsg=error );//subscribing to observable*/


  }//here anything is parameter of susbcribe method which has its own implementation defined


  
}
