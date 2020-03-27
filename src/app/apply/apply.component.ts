import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../form.service';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { EmailValidatorDirective } from '../email-validator.directive';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  constructor(private router:Router,private fb:FormBuilder,private form: FormService ) { }
  regForm = this.fb.group({
    name: [''],
    dob: [''],
    qualification: [''],
    email: ['',[Validators.required,EmailValidatorDirective(/[a-z0-9._%+-]+@['gmail']+\.['com']{3,3}/i)]],
    phone: [''],
    gender:['']
  });

  ngOnInit(): void { }
  onSubmit(){
    // console.warn(this.regForm.value);
    this.form.setValue(this.regForm);

    this.router.navigateByUrl('/response');
  }

}
