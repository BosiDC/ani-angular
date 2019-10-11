import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.scss"]
})
export class EditProfileComponent implements OnInit {
  name: string;
  desc: string;

  constructor() {}

  ngOnInit() {}

  onNameKeyUp(event: any) {
    this.name = event.target.value;
  }

  onDesKeyUp(event: any) {
    this.desc = event.target.value;
  }

  onSubmit() {}
}
