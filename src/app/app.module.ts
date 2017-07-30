import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';
import { InsertdataComponent } from './insertdata/insertdata.component';


// Firebase config
export const firebaseConfig = {
  apiKey: "AIzaSyDpR0BvJ3bkIKZw2N-N1odAl-jogBNPIjs",
  authDomain: "dashboard-f8208.firebaseapp.com",
  databaseURL: "https://dashboard-f8208.firebaseio.com",
  projectId: "dashboard-f8208",
  storageBucket: "dashboard-f8208.appspot.com",
  messagingSenderId: "766440125372"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    InsertdataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
