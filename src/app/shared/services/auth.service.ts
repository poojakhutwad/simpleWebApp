import { Injectable, NgZone } from '@angular/core';
import { User } from "../services/user";
import { auth } from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument} from "@angular/fire/firestore";
import { Router } from "@angular/router";
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: Observable<firebase.User>;

  constructor(
    private afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.userData = afAuth.authState;
   }

   //login with email/password
   Login(email: string, password:string){
     return this.afAuth.auth.signInWithEmailAndPassword(email, password)
     .then((result)=>{
       window.alert("Login Successful...!!!");
       this.ngZone.run(()=>{
         this.router.navigate(['dashboard']);
       });
     }).catch((error)=>{
       window.alert(error.message)
     })
   }

   //register with email/password
   Register(email: string, password: string){
     this.afAuth.auth.createUserWithEmailAndPassword(email, password)
     .then((result)=>{
       //this.SetUserData(result.user);
       console.log('registerd successfully', result);
       window.alert("Registerd Successfully");
     }).catch((error)=>{
       window.alert(error.message)
     });
   }

   //Forgot password
   ForgotPassword(passwordReset){
     this.afAuth.auth.sendPasswordResetEmail(passwordReset)
     .then(()=>{
       window.alert('Password reset email');
     }).catch((error)=>{
       window.alert(error);
     })
   }

   //Sign in with facebook
   FacebookAuth(){
     return this.AuthLogin(new auth.FacebookAuthProvider());
   }

   //Sign in with twitter
   TwitterAuth(){
     return this.AuthLogin(new auth.TwitterAuthProvider());
   }

   //Auth logic to run auth providers
   AuthLogin(provider){
     this.afAuth.auth.signInWithPopup(provider)
     .then((result)=>{
       this.ngZone.run(()=>{
         this.router.navigate(['dashboard']);
       })
     }).catch((error)=>{
       window.alert(error);
     })
   }

   
   //Sign out
   SignOut(){
     this.afAuth.auth.signOut();
     this.router.navigate(['/login']);
   }
}
