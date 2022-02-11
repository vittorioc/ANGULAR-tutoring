import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    userName: ['', Validators.required],
    userPassword: ['', Validators.required],
  });

  constructor(private logger: NGXLogger, private fb: FormBuilder) {
    this.logger.trace('LoginComponent');
  }

  ngOnInit(): void {}

  onSubmit() {
    this.logger.warn(this.loginForm.value);
  }
}

