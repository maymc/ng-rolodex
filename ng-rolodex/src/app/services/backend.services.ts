//Service File

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//Creates backend service
@Injectable({
  providedIn: 'root'
})

export class BackendService {
  // baseUrl: string = 'http://localhost:7000';
  baseUrl: string = 'http://34.218.241.69:7000';

  //array of anything
  allContacts: any[] = [];


  constructor(private http: HttpClient) { }

  register(data) {
    return Promise.resolve({});
  }

  login(data) {
    return Promise.resolve({ username: data.username });
  }

  logout() {
    console.log("\nbackend - logout");
    const url = this.baseUrl + '/api/logout';
    // return this.http.post(url).toPromise();
    return Promise.resolve({});
  }

  getUserProfile(id: number) {
    console.log("\nbackend - getUserProfile");
    console.log("id:", id);
    const url = this.baseUrl + '/api/profile/user/' + id;
    return this.http.get(url).toPromise();
  }

  getAllContacts(id: number) {
    console.log("\nbackend - getAllContacts");
    console.log("id:", id);
    const url = this.baseUrl + '/api/contacts/user/' + id;
    return this.http.get(url).toPromise();
  }

  getContactDetails(id: number) {
    console.log("\nbackend - getContactDetails");
    console.log("id:", id);
    const url = this.baseUrl + '/api/contacts/' + id;
    return this.http.get(url).toPromise();
  }

  updateUserProfile(id: number) {
    console.log("\nbackend-editUserProfile");
    const url = this.baseUrl + '/api/users/user/' + id;
    // return this.http.put(url).toPromise();
  }

}