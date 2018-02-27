import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  passwordCharactersCount = 0;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.createLoginForm();
  }

  ngOnInit() {
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email] ],
      password: [null, [Validators.required] ]
    });
  }

  onFormSubmit() {
    this.authService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    });
  }

}
