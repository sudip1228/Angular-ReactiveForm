import { ValidatorFn, AbstractControl } from '@angular/forms';
//custom made validator with factory function
export function forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = forbiddenName.test(control.value);
    
    return forbidden ? { 'forbiddenName': { value: control.value } } : null;
  };
}