import { Component, OnInit } from '@angular/core';

import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;

  myForm:FormGroup

  constructor(
    private fb:FormBuilder
  ) {
    this.myForm=this.fb.group({
      nombre:["",[Validators.required]],
      correo:["",[Validators.required]],
      clave:["",[Validators.required,Validators.minLength(6)]],
    })
  }
  registrarse(){
    console.log(this.myForm.value)
  }
  ngOnInit(): void {
  }
  reset(){
     this.myForm.setValue({nombre: '', correo: '', clave: ''}); }
}

