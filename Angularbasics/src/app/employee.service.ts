import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employeeInterface';
import { Observable } from 'rxjs';
/*//imports used for exception handling
import {} 'rxjs/add/operator/catch'; 
import 'rxjs/add/observable/throw';
*/

@Injectable({//@Injectable decorator is required when your service is dependent to other service..similar to @component in springboot
  providedIn: 'root'
})
export class EmployeeService {

  private url="/assets/data/employees.json";
  constructor(private http:HttpClient) { 
    
  }

getemployee():Observable<IEmployee[]>
{//here return type is observable which is a object and iemployee[] is used similarly as generics in java.
  
    return this.http.get<IEmployee[]>(this.url) /*. catch(this.errorHandler); //using get method of http to get response from database.It takes url as a parameter.
//here IEmployee is an employee interface which we created for casting purpose.
  */
}
  errorHandler(error: HttpErrorResponse) {
    //return Observable.throw(error.message||"server error");//"||" means or,either error.message is thrown or "server error" is thrown.'server error' is thrown when the exeption is empty.
  }


}
