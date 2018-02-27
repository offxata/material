import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
// service
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;
  passwordCharactersCount = 0;
  maxDate;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.createSignupForm();
  }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 20);
  }


  createSignupForm() {
    this.signupForm = this.fb.group({
      email: [null, [Validators.required, Validators.email] ],
      password: [null, [Validators.required, Validators.minLength(6)] ],
      birthday: [null, Validators.required ],
      agree: [false, Validators.required ]
    });
  }

  onFormSubmit() {
    this.authService.registerUser({
      email: this.signupForm.value.email,
      password: this.signupForm.value.password
    });
  }

  test(e) {
    console.log(e);
  }

}
