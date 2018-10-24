//Service File

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Creates backend service
@Injectable({
  providedIn: 'root'
})

export class BackendService {
  baseUrl: string = 'https://swapi.co/api/';

  //array of anything
  characters: any[] = [];

  constructor(private http: HttpClient) {

  }

  getPeople(id: number) {
    const url = this.baseUrl + 'people/' + id + '/';
    return this.http.get(url).toPromise();
  }

  //Allows us take in something and push it into characters
  addCharacter(character) {
    this.characters.push(character);
  }

}