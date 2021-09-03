import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  myForm: FormGroup
  constructor(
    private fb: FormBuilder) {
    this.myForm = this.fb.group({
      correo: ["", [Validators.required]],
      clave: ["", [Validators.required, Validators.minLength(6)]],
    })
  }
  login() {
    console.log(this.myForm.value)
  }

  ngOnInit(): void {
  }
}

