import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireAuthModule } from "@angular/fire/auth";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {environment} from '../environments/environment';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { RegisterViewComponent } from './register-view/register-view.component';
import { ForgotPasswordViewComponent } from './forgot-password-view/forgot-password-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideMenuViewComponent } from './side-menu-view/side-menu-view.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { MyPlaceViewComponent } from './my-place-view/my-place-view.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { AuthService } from './shared/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    RegisterViewComponent,
    ForgotPasswordViewComponent,
    DashboardComponent,
    SideMenuViewComponent,
    ProfileViewComponent,
    MyPlaceViewComponent,
    HomeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
