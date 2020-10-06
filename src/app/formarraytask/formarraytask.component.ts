import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup,FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'app-formarraytask',
  templateUrl: './formarraytask.component.html',
  styleUrls: ['./formarraytask.component.css']
})
export class FormarraytaskComponent implements OnInit {

  options: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required, Validators.pattern("^[A-z]*$")]);
 

  constructor(fb: FormBuilder){
    this.options = fb.group({
        name:this.name,
        email:this.email,
     
    })
   
  }

  nameErrorMessage()
  {
    if (this.name.hasError('required')) {
      return 'You must enter your name';
    }

    return this.name.hasError('pattern') ? 'please enter only characters' : '';
  }


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter your email Id';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}