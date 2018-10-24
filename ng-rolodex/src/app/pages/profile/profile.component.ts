import { Component } from '@angular/core';

@Component({
  selector: 'profile-page',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent {
  title: string = 'Welcome to your profile!';
  username: string = 'maymc';
  name: string = 'May';
  email: string = 'maychen@hawaii.edu';
  address: string = '1234 SomeAddress St.';

  constructor() {

  }

  editProfile() {
    console.log(this.username);
    console.log(this.name);
    console.log(this.email);
    console.log(this.address);


  }
}