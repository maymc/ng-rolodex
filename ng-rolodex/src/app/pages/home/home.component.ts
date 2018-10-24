import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.services';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  message: string = "Search for a contact...";

  formData: {
    searchInput: string,
  } = {
      searchInput: '',
    }

  characters: any[];

  //created a backend service and bringing it into this component to use
  constructor(private backend: BackendService) {

  }

  ngOnInit() {

    //when component first starts, asks if can get this array and puts it into my copy of empoty characters. The two empty arrays are the same thing. Component and service both see any changes
    this.characters = this.backend.characters;

    this.backend.addCharacter({ name: 'may' });
    this.characters.push({ name: 'bob' });

    this.backend.getPeople(3)
      .then(data => {
        console.log("getPeople - data:", data);
      })
  }

  submit() {
    console.log(this.formData);
  }

}
