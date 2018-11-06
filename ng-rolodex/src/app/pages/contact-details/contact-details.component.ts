import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.services';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  title: string = 'Contact Details';
  name: string;
  address: string;
  mobile: string;
  work: string;
  home: string;
  email: string;
  twitter: string;
  instagram: string;
  github: string;

  isEditingContact: boolean = false;

  constructor(private backend: BackendService) { }

  ngOnInit() {
    // showContactDetails() {
    //   console.log("testingggg");
    //   this.isEditingContact = true;
    this.backend.getContactDetails(1)
      .then(results => {
        console.log("results:", results);
        this.name = results["name"];
        this.address = results["address"];
        this.mobile = results["mobile"];
        this.work = results["work"];
        this.home = results["home"];
        this.email = results["email"];
        this.twitter = results["twitter"];
        this.instagram = results["instagram"];
        this.github = results["github"];
      })
      .catch(err => {
        console.log("GET - contactDetails - error:", err);
      })
  }


}
