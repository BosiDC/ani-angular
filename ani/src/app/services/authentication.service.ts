import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";

import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";

interface User {
  photoURL?: string;
  displayName: string;
  description?: string;
}

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  users$: Observable<User>;
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {
    this.users$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  //log user off
  signOut() {
    return this.afAuth.auth.signOut().then(() => {
      this.router.navigate(["/"]);
    });
  }
}
