import { Component, OnInit, Input } from "@angular/core";
import { Top } from "../../models/Anime";
import { ResultService } from "../../services/result.service";
import { AuthenticationService } from "../../services/authentication.service";
import { FaveService } from "src/app/services/fave.service";

@Component({
  selector: "app-result-item",
  templateUrl: "./result-item.component.html",
  styleUrls: ["./result-item.component.css"]
})
export class ResultItemComponent implements OnInit {
  checked: boolean;
  @Input() result: Top;

  constructor(
    private resultService: ResultService,
    public auth: AuthenticationService,
    private fave: FaveService
  ) {}

  ngOnInit() {}

  toggle() {
    if (this.checked == true) {
      const fave = {
        title: this.result.title,
        url: this.result.url,
        checked: true
      };
      this.fave.addFave(fave);
    }
  }
}
