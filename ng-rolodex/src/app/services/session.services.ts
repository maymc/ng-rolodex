import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SessionService {
  user = {
    loggedIn: false,
    username: '',
    password: ''
  }

  constructor() {

    //check if username is in localStorage
    let userString = window.localStorage.getItem('user');
    try {
      if (userString) {
        this.user = JSON.parse(userString);
      }
      else {
        console.log("User not found.");
      }
    }
    catch (err) {
      console.log('Unable to parse user.');
    }
  }

  //allows you to get current user
  //When you want to check if the user is currently loggedin or not, it can go into session and see if there is a user logged in
  getSession() {
    return this.user;
  }

  //allows you to set current user
  //used solely by auth service. Providing information to save to the browser so that any component after can use that data that was saved
  setSession(username) {
    //save to memory
    this.user.username = username;
    this.user.loggedIn = true;

    //save to localStorage
    let userString = JSON.stringify(this.user);
    window.localStorage.setItem('user', userString);
  }

  //user to log user out
  clearSession() {
    this.user.loggedIn = false;
    this.user.username = '';
    window.localStorage.removeItem("user");

  }

  //helped function that checks if someone is logged in
  isLoggedIn() {
    return this.user.loggedIn;
  }

};
