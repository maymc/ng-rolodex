import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.services';

@Component({
  selector: 'contacts-page',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent implements OnInit {
  title: string = "Contacts";

  characters: any[];

  constructor(private backend: BackendService) {

  }

  ngOnInit() {
    this.characters = this.backend.characters;

    // this.backend.addPeople({ name: 'may' });
    // this.characters.push({ name: 'bob' });

    for (let i = 0; i <= 10; i++) {
      this.backend.getPeople(i)
        .then(data => {
          console.log("getPeople - data:", data);
          this.characters.push(data);
        })
    }
  }
}