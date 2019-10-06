import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from "@angular/fire/firestore";

import { Observable } from "rxjs";
import { AngularFireStorage } from "@angular/fire/storage";

export interface Fave {
  title: string;
}

@Injectable({
  providedIn: "root"
})
export class FaveService {
  private faveCollection: AngularFirestoreCollection<Fave>;
  faves: Observable<Fave[]>;
  userId: string;
  collectId: string;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    //get user uid
    this.afAuth.authState.subscribe(user => {
      if (user) this.userId = user.uid;
    });
  }

  //Get user's list
  getFaveList(): Observable<Fave[]> {
    if (!this.userId) return;
    this.faveCollection = this.afs.collection(`faves/${this.userId}`);
    this.faves = this.faveCollection.valueChanges();
    return this.faves;
  }

  //Add new anime to user's list
  addFave(fave: Fave) {
    this.afs
      .collection("faves")
      .doc(this.userId)
      .collection("list")
      .add(fave);
  }
}
