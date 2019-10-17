import { Component, OnInit } from "@angular/core";
import { Top } from "../../models/Anime";
import { ResultService } from "../../services/result.service";

@Component({
  selector: "app-airing",
  templateUrl: "./airing.component.html",
  styleUrls: ["./airing.component.scss"]
})
export class AiringComponent implements OnInit {
  results: Top[];
  showSpinner: boolean;

  constructor(private resultService: ResultService) {}

  ngOnInit() {
    this.showSpinner = true;
    this.resultService.getTop().subscribe(results => {
      this.results = results["top"];
      console.log(this.results);
      this.showSpinner = false;
    });
  }
}
