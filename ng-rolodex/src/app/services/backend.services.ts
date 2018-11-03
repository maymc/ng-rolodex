//Service File

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Creates backend service
@Injectable({
  providedIn: 'root'
})

export class BackendService {
  // baseUrl: string = 'https://swapi.co/api/';
  baseUrl: string = 'http://localhost:7000';

  //array of anything
  // characters: any[] = [];
  allContacts: any[] = [];

  constructor(private http: HttpClient) {

  }

  getPeople(id: number) {
    const url = this.baseUrl + 'people/' + id + '/';
    return this.http.get(url).toPromise();
  }

  getAllContacts(id: number) {
    console.log("\nbackend - getAllContacts");
    console.log("id:", id);
    const url = this.baseUrl + '/api/contacts/user/' + id;
    return this.http.get(url).toPromise();
  }

  //Allows us take in something and push it into characters
  // addPeople(character) {
  //   this.characters.push(character);
  // }

  // addPeople(contacts) {
  //   this.allContacts.push(allContacts);
  // }

  register(data) {
    return Promise.resolve({});
  }

  login(data) {
    return Promise.resolve({ username: data.username });
  }

  logout() {
    return Promise.resolve({});
  }

}