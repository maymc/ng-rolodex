import { Component } from '@angular/core';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  title: string = 'Please Login';

  formData: {
    username: string,
    password: string,
    // class: string,
  } = {
      username: '',
      password: '',
      // class: 'test',
    };

  validUsername: boolean = false;
  validPassword: boolean = false;

  constructor() {

  }

  login() {
    console.log(this.formData);
  }

  validateUsername() {
    console.log('\nValidating username...')
    if (!this.formData.username) {
      this.validUsername = false;
    }
    else if (this.formData.username.length < 3) {
      this.validUsername = false;
    }
    else {
      this.validUsername = true;
    }
  }

  validatePassword() {
    console.log('\nValidating password...')
    if (!this.formData.password) {
      this.validPassword = false;
    }
    else if (this.formData.password.length < 8) {
      this.validPassword = false;
    }
    else {
      this.validPassword = true;
    }
  }
}

