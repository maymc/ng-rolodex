import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Allows angular to work with forms
import { FormsModule } from '@angular/forms';

//Brings http system into client
import { HttpClientModule } from '@angular/common/http';

//Routing Page Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PageHeaderComponent } from './shared/pageHeader/pageHeader.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { CreateContactComponent } from './pages/createContact/createContact.component';
import { ProfileComponent } from './pages/profile/profile.component';

//Setup for BackendService, SessionService, AuthService
import { BackendService } from './services/backend.services';
import { SessionService } from './services/session.services';
import { AuthService } from './services/auth.services';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PageHeaderComponent,
    ContactsComponent,
    CreateContactComponent,
    ProfileComponent,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    BackendService,
    SessionService,
    AuthService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
