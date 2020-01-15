import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup, FormArray } from '@angular/forms';
import {forbiddenNameValidator} from './shared/user-name.validator';
import { PasswordValidator } from './shared/password.validator';
import { RegistrationService } from './registration.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  registrationForm:FormGroup;
  
 /* registrationForm=new FormGroup({

    userName:new FormControl(''),
    password:new FormControl(''),
    confirmPassword:new FormControl(''),
    address: new FormGroup({
        city: new FormControl(''),
        state: new FormControl(''),
        postalCode: new FormControl('')
    })
  });*/

  constructor(private fb:FormBuilder, private _registrationService: RegistrationService){}//using formbuilder to reduce code

  
    //})
 // },{validator: PasswordValidator});


  ngOnInit() {
   this.registrationForm= this.fb.group({
      userName:['',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/password/)]],  //validators for reactive form.here username cannot have name called'password'
      password:[''],
      confirmPassword:[''],
      email: [''],
      subscribe: [false],
      address:this.fb.group({
        city:[''],
        state:[''],
        postalCode:[''],
  }),
  alternateEmails:this.fb.array([])//using dynamic form controls
},{validator: PasswordValidator});//cross-validation
//conditional validation
this.registrationForm.get('subscribe').valueChanges.subscribe(checkedValue =>{
  const email=this.registrationForm.get('email');
  if(checkedValue){
    email.setValidators(Validators.required);
  }else{
    email.clearValidators();
  }
  email.updateValueAndValidity();
});
  }


  loadApiData()
  {/*
     this.registrationForm.setValue({
     userName: 'Bruce',
     password: 'test',
     confirmPassword: 'test',
    address: {
         city: 'City',
         state: 'State',
         postalCode: '123456'
    }
     });for setValue method you have to set all the form controls*/ 
     this.registrationForm.patchValue({//patch value method is useful when you dont need to set all the form-controls.use setvalue method if you want to set value for all.
       userName:'sudip',
       password: 'test',
       confirmPassword:'test'
     });
 
}
get email() {
  return this.registrationForm.get('email');
}

get alternateEmails() {
  return this.registrationForm.get('alternateEmails') as FormArray;
}

addAlternateEmail() {//using dynamic form controls
  this.alternateEmails.push(this.fb.control(''));
}
get userName(){//use this on view to reduce code.
  return this.registrationForm.get('userName');
 }

 onSubmit() {
  //console.log(this.registrationForm.value);
  this._registrationService.register(this.registrationForm.value)
    .subscribe(
      response => console.log('Success!', response),
      error => console.error('Error!', error)
    );
}
}
