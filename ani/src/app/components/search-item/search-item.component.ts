import { Component, OnInit, Input } from "@angular/core";
import { Search } from "../../models/Anime";
import { ResultService } from "../../services/result.service";
import { FaveService } from "src/app/services/fave.service";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "app-search-item",
  templateUrl: "./search-item.component.html",
  styleUrls: ["./search-item.component.scss"]
})
export class SearchItemComponent implements OnInit {
  checked: boolean;
  @Input() search: Search;

  constructor(
    private fave: FaveService,
    resultService: ResultService,
    public auth: AuthenticationService
  ) {}

  ngOnInit() {}

  toggle() {
    if (this.checked == true) {
      const fave = {
        title: this.search.title,
        url: this.search.url,
        type: this.search.type,
        mal_id: this.search.mal_id,
        checked: true
      };
      this.fave.addFave(fave);
    }
  }
}
