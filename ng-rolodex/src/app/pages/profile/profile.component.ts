import { Component } from '@angular/core';

@Component({
  selector: 'profile-page',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent {
  title: string = "Profile page";

  constructor() {

  }
}