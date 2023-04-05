import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor() { }

  formulario = new FormGroup({
    userName : new FormControl('', [Validators.required, Validators.minLength(4)]),
    userLastName : new FormControl('', [Validators.required, Validators.minLength(4)]),
    country : new FormControl('', [Validators.required, Validators.minLength(2)]),
    province : new FormControl('', [Validators.required, Validators.minLength(3)]),
    city : new FormControl('', [Validators.required, Validators.minLength(4)]),
    email : new FormControl('', [Validators.required, Validators.email, Validators.minLength(4)])
  });
  
  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.formulario.get("email")?.errors)
  }

}
