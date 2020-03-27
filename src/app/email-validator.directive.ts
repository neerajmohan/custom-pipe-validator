import { Directive } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

export function EmailValidatorDirective(nameRe: RegExp): ValidatorFn  {

  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? null : {'emailValidator': {value: control.value}} ;
  };

}
