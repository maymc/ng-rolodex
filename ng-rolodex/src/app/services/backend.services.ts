//Service File

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Creates backend service
@Injectable({
  providedIn: 'root'
})

export class BackendService {
  // baseUrl: string = 'https://swapi.co/api/';

  //array of anything
  // characters: any[] = [];
  contacts: any[] = [
    {
      id: 1,
      name: 'May',
      address: '1234 Disney St.',
      mobile: '808-341-4831',
      work: '808-123-4567',
      home: '808-123-4567',
      email: 'maymc@gmail.com',
      twitter: '@maymc',
      instagram: '@maymc',
      github: '@maymc',
    },
    {
      id: 2,
      name: 'Sally',
      address: '6552 Disney St.',
      mobile: '808-341-4832',
      work: '808-324-2343',
      home: '808-344-2342',
      email: 'sally@gmail.com',
      twitter: '@sally',
      instagram: '@sally',
      github: '@sally',
    },
    {
      id: 3,
      name: 'Bob',
      address: '3463 Disney Sea.',
      mobile: '808-341-4833',
      work: '808-355-8643',
      home: '808-638-4839',
      email: 'bob@gmail.com',
      twitter: '@bob',
      instagram: '@bob',
      github: '@bob',
    }
  ];

  constructor(private http: HttpClient) {

  }

  // getPeople(id: number) {
  //   const url = this.baseUrl + 'people/' + id + '/';
  //   return this.http.get(url).toPromise();
  // }

  getAllContacts() {
    console.log("backend - getAllContacts:", this.contacts);
    return this.contacts;
  }

  //Allows us take in something and push it into characters
  // addPeople(character) {
  //   this.characters.push(character);
  // }

  addPeople(contacts) {
    this.contacts.push(contacts);
  }

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