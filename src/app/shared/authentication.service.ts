import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase";
import { Injectable } from "@angular/core";
import { Observable, Subscriber } from "rxjs";

@Injectable()
export class AuthenticationService {
  userData: Observable<any>;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState;
  }

  signInGmail() {
    this.angularFireAuth.auth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then(res => {
        console.log("Successfully signed in!");
      })
      .catch(err => {
        console.log("Something is wrong:", err.message);
      });
  }

  signInTwitter() {
    this.angularFireAuth.auth
      .signInWithPopup(new auth.TwitterAuthProvider())
      .then(res => {
        console.log("Successfully signed in!");
      })
      .catch(err => {
        console.log("Something is wrong:", err.message);
      });
  }

  signUpEmail(email: string, password: string) {
    this.angularFireAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log("Successfully signed up!", res);
      })
      .catch(error => {
        console.log("Something is wrong:", error.message);
      });
  }

  signInEmail(email: string, password: string) {
    this.angularFireAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log("Successfully signed in!");
      })
      .catch(err => {
        console.log("Something is wrong:", err.message);
      });
  }

  /* Sign out */
  signOut() {
    this.angularFireAuth.auth.signOut();
  }
}
