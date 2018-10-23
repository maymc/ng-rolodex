import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

  submit() {
    console.log(this.formData);
  }

}
