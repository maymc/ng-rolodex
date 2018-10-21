import { Component } from '@angular/core';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  title: string = 'Login Page';
  formData: {
    username: string,
  } = {
      username: '',
    };

  constructor() {

  }

  submit() {
    console.log(this.formData);
  }
}

