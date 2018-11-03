import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.services';

@Component({
  selector: 'contacts-page',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent implements OnInit {
  title: string = "Contacts";

  // characters: any[];
  allContacts: any;

  constructor(private backend: BackendService) {

  }

  ngOnInit() {
    this.allContacts = this.backend.allContacts;
    console.log("FRONT - this.allContacts:", this.allContacts);
    console.log("FRONT - this.backend.contacts:", this.backend.allContacts);

    // this.backend.addPeople({ name: 'may' });
    // this.characters.push({ name: 'bob' });

    // for (let i = 0; i <= 10; i++) {
    //   this.backend.getPeople(i)
    //     .then(data => {
    //       console.log("getPeople - data:", data);
    //       this.characters.push(data);
    //     })
    // }

    this.backend.getAllContacts(1)
      .then(results => {
        console.log("results:", results);
        this.allContacts = results;
      })
      .catch(err => {
        console.log("GET - allContacts - error:", err);
      })

    // this.contacts.forEach(element => {
    //   console.log("Contact:", element);
    // })
  }
}