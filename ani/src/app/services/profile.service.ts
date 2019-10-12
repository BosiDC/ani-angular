import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
interface User {
  photoURL?: string;
  displayName: string;
  description?: string;
}
interface DownloadUrl {
  url: string;
}

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  userId: string;
  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user) this.userId = user.uid;
    });
  }

  updateUserData(user: User) {
    this.afs
      .collection("users")
      .doc(this.userId)
      .update({
        displayName: user.displayName,
        description: user.description
      });
  }

  updateURL(downloadurl: DownloadUrl) {
    this.afs
      .collection("users")
      .doc(this.userId)
      .update({
        photoURL: downloadurl.url
      });
  }
}
