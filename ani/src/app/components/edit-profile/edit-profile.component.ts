import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ProfileService } from "../../services/profile.service";
import { AuthenticationService } from "../../services/authentication.service";
import {
  AngularFireStorage,
  AngularFireUploadTask
} from "@angular/fire/storage";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";

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
    public profileService: ProfileService,
    public auth: AuthenticationService
  ) {}

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
            this.profileService.updateURL(downloadurl);
          });
        })
      )
      .subscribe();
  }
}
