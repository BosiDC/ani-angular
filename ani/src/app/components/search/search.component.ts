import { Component, OnInit, Input } from "@angular/core";
import { Search } from "../../models/Anime";
import { ResultService } from "../../services/result.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  searchs: Search[];

  constructor(private resultService: ResultService) {}

  ngOnInit() {
    this.resultService.currentMessage.subscribe(
      message => (this.searchs = message)
    );
  }
}
