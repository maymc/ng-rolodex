import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.services';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  message: string = "Search for a contact...";

  formData: { searchInput: string } = { searchInput: '' }

  allContacts: any;
  value: '';

  //created a backend service and bringing it into this component to use
  constructor(private backend: BackendService) {

  }

  ngOnInit() {

    //when component first starts, asks if can get this array and puts it into my copy of empoty characters. The two empty arrays are the same thing. Component and service both see any changes
    this.allContacts = this.backend.allContacts;

    this.backend.getAllContacts(1)
      .then(results => {
        console.log("results:", results);
        this.allContacts = results;
      })
      .catch(err => {
        console.log("GET - allContacts - error:", err);
      })
  }

  search() {
    console.log(this.formData);
  }

  onKey(event: KeyboardEvent) {
    this.value += (<HTMLInputElement>event.target).value + ' | ';
  }

}
