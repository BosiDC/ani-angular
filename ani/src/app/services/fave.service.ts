import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from "@angular/fire/firestore";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AngularFireStorage } from "@angular/fire/storage";
import { Fave } from "../models/List";

@Injectable({
  providedIn: "root"
})
export class FaveService {
  private faveCollection: AngularFirestoreCollection<Fave>;
  faves: Observable<Fave[]>;
  userId: string;
  collectId: string;
  faveDoc: AngularFirestoreDocument<Fave>;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    //get user uid
    this.afAuth.authState.subscribe(user => {
      if (user) this.userId = user.uid;
    });

    this.faveCollection = this.afs.collection(`faves/${this.userId}/list`);
    this.faves = this.faveCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Fave;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  //Get user's list
  getFaveList(): Observable<Fave[]> {
    return this.afs
      .collection<Fave>(`faves/${this.userId}/list`)
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(action => {
            const data = action.payload.doc.data() as Fave;
            return {
              id: action.payload.doc.id,
              title: data.title
            };
          });
        })
      );
  }

  //Add new anime to user's list
  addFave(fave: Fave) {
    this.afs
      .collection("faves")
      .doc(this.userId)
      .collection("list")
      .add(fave);
  }

  //Delete fave from user's list
  deleteFave(fave: Fave) {
    this.faveDoc = this.afs.doc(`faves/${this.userId}/list/${fave}`);
    this.faveDoc.delete();
  }
}
