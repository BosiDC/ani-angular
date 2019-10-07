import { Component, OnInit, Input } from "@angular/core";
import { Search } from "../../models/Anime";
import { ResultService } from "../../services/result.service";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "app-search-item",
  templateUrl: "./search-item.component.html",
  styleUrls: ["./search-item.component.scss"]
})
export class SearchItemComponent implements OnInit {
  @Input() search: Search;

  constructor(
    resultService: ResultService,
    public auth: AuthenticationService
  ) {}

  ngOnInit() {}
}
