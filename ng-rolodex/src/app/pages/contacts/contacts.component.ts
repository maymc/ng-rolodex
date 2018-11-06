import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.services';

@Component({
  selector: 'contacts-page',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent implements OnInit {
  title: string = "Contacts";

  allContacts: any;
  isSelectedContact: boolean = false;

  constructor(private backend: BackendService) { }

  ngOnInit() {
    this.allContacts = this.backend.allContacts;
    console.log("FRONT - this.allContacts:", this.allContacts);
    console.log("FRONT - this.backend.contacts:", this.backend.allContacts);

    this.backend.getAllContacts(1)
      .then(results => {
        console.log("results:", results);
        this.allContacts = results;
      })
      .catch(err => {
        console.log("GET - allContacts - error:", err);
      })
  }

  getContactDetails() {
    console.log("testingggg");
    this.backend.getContactDetails(1)
      .then(results => {
        console.log("results:", results);
      })
      .catch(err => {
        console.log("GET - contactDetails - error:", err);
      })
  }
}