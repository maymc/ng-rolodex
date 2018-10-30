import { Injectable } from '@angular/core';
import { BackendService } from './backend.services';
import { SessionService } from './session.services';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(
    private backend: BackendService,
    private session: SessionService
  ) { }

  register(data) {
    return this.backend.register(data);
  }

  login(data) {
    return this.backend.login(data)
      .then(response => {
        return this.session.setSession(data.username);
      })
  }

  logout() {
    return this.backend.logout()
      .then(response => {
        return this.session.clearSession();
      })
  }
}