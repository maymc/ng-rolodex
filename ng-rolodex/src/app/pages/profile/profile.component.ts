import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.services';

@Component({
  selector: 'profile-page',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  title: string = 'Welcome to your profile!';
  username: string;
  name: string;
  email: string;
  address: string;
  userData: any;

  isEditingProfile: boolean = false;

  constructor(private backend: BackendService) { }

  ngOnInit() {
    this.backend.getUserProfile(1)
      .then(results => {
        console.log("results:", results);
        this.username = results["username"];
        // console.log("check username:", this.username);
        this.name = results["name"];
        this.email = results["email"];
        this.address = results["address"];
      })
  }

  editProfile() {
    console.log(this.username);
    console.log(this.name);
    console.log(this.email);
    console.log(this.address);
    this.isEditingProfile = true;
  }

  saveProfile() {
    console.log("\nUpdating user profile...");
    // this.backend.updateUserProfile(1)
    //   .then(updatedUserData => {
    //     console.log("updatedUserData:", updatedUserData);
    //   })

  }
}