import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ProfileService } from "../../services/profile.service";
import { AuthenticationService } from "../../services/authentication.service";
import {
  AngularFireStorage,
  AngularFireUploadTask
} from "@angular/fire/storage";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { finalize, tap } from "rxjs/operators";
import { AngularFireAuth } from "@angular/fire/auth";

export interface DownloadUrl {
  url: string;
}
@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.scss"]
})
export class EditProfileComponent implements OnInit {
  @Output() onCloseClick = new EventEmitter();
  task: AngularFireUploadTask;
  snapshot: Observable<any>;
  downloadURL: Observable<any>;
  url: string;
  name: string;
  desc: string;
  userId: string;
  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    public profileService: ProfileService,
    public auth: AuthenticationService,
    private afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) this.userId = user.uid;
    });
  }

  ngOnInit() {
    this.auth.users$.subscribe(user => {
      this.name = user.displayName;
      this.desc = user.description;
    });
  }

  onNameKeyUp(event: any) {
    this.name = event.target.value;
  }

  onDesKeyUp(event: any) {
    this.desc = event.target.value;
  }

  onSubmit() {
    const user = {
      displayName: this.name,
      description: this.desc
    };
    this.profileService.updateUserData(user);
  }

  closeEdit() {
    this.onCloseClick.emit();
  }

  startUpload(fileInput: Event) {
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
  updateURL(downloadurl: DownloadUrl) {
    this.db
      .collection("users")
      .doc(this.userId)
      .update({
        photoURL: downloadurl.url
      });
  }
}
