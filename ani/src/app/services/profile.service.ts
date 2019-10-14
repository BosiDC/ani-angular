import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import {
  AngularFireStorage,
  AngularFireUploadTask
} from "@angular/fire/storage";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { FirebaseAuth } from "@firebase/auth-types";
import * as firebase from "firebase";

interface User {
  photoURL?: string;
  displayName?: string;
  description?: string;
}
interface DownloadUrl {
  url: string;
}

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  task: AngularFireUploadTask;
  snapshot: Observable<any>;
  downloadURL: Observable<any>;
  private authState: FirebaseAuth;
  userId: string;
  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private storage: AngularFireStorage
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) this.userId = user.uid;
    });
  }

  uploadImage(fileInput: Event) {
    let file = (<HTMLInputElement>fileInput.target).files[0];
    const path = `image/${Date.now()}_${file.name}`;
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, file);
    this.task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          const downloadURL = ref.getDownloadURL().subscribe(url => {
            console.log(url);
            const downloadurl = {
              url: url
            };
            this.updateURL(downloadurl);
          });
        })
      )
      .subscribe();
  }

  updateUserData(user: User) {
    this.afAuth.auth.currentUser.updateProfile({
      displayName: user.displayName
    });

    this.afs
      .collection("users")
      .doc(this.userId)
      .update({
        displayName: user.displayName,
        description: user.description
      });
  }

  updateURL(downloadurl: DownloadUrl) {
    this.afAuth.auth.currentUser.updateProfile({
      photoURL: downloadurl.url
    });

    this.afs
      .collection("users")
      .doc(this.userId)
      .update({
        photoURL: downloadurl.url
      });
  }
}
