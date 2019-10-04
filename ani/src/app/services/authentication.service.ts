import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { auth } from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";

import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  users$: Observable<any>;
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {
    this.users$ = this.afAuth.authState;
  }

  signOut() {
    return this.afAuth.auth.signOut().then(() => {
      this.router.navigate(["/"]);
    });
  }

  private update;
}
