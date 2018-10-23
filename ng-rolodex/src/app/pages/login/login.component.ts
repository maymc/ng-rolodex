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

  constructor() {

  }

  submit() {
    console.log(this.formData);
  }
}

