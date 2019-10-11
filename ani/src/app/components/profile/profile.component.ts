import { Component, OnInit } from "@angular/core";
import { NbSidebarService } from "@nebular/theme";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  isOn: boolean = true;
  constructor(
    private sidebarService: NbSidebarService,
    public auth: AuthenticationService
  ) {}

  ngOnInit() {}

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
}
