import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.services';

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
  } = {
      username: '',
      password: '',
    };

  validUsername: boolean = false;
  validPassword: boolean = false;

  constructor(private auth: AuthService) { }
  login() {
    console.log("this.formData:", this.formData);
    this.auth.login(this.formData)
      .then((res) => {
        console.log('User logged in');
      })
      .catch(err => {
        console.log('error:', err);
      })
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
    else if (this.formData.password.length < 4) {
      this.validPassword = false;
    }
    else {
      this.validPassword = true;
    }
  }

  isDisabled() {
    return !this.validUsername || !this.validPassword;
  }
}
