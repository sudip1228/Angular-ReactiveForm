import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
color='red';  
name='SudipIsGreat';
message='';
//here person is object
person={

"fname":"john"  ,
"lname":"doe"
}
date= new Date();

  log(value){
console.log(value);
  }
sudip=(a,b)=> a+b;



}


