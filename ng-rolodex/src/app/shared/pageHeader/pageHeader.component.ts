import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.services';
import { SessionService } from '../../services/session.services';


@Component({
  selector: 'page-header',
  templateUrl: './pageHeader.component.html',
  styleUrls: ['./pageHeader.component.scss']
})

export class PageHeaderComponent {
  user: object;

  title: string = 'ROLODEX';

  constructor(
    private router: Router,
    private auth: AuthService,
    private session: SessionService
  ) {
    this.user = this.session.getSession();
  }

  isLoggedIn() {
    return this.session.isLoggedIn();
  }

  login() {
    return this.router.navigate(['/login']);
  }

  logout() {
    return this.auth.logout();
  }
}