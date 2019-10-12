import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ProfileService } from "../../services/profile.service";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.scss"]
})
export class EditProfileComponent implements OnInit {
  @Output() onCloseClick = new EventEmitter();
  url: string;
  name: string;
  desc: string;
  constructor(
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
    this.profileService.uploadImage(fileInput);
  }
}
