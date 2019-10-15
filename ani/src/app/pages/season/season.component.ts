import { Component, OnInit } from "@angular/core";
import { Current } from "../../models/Anime";
import { ResultService } from "../../services/result.service";

@Component({
  selector: "app-season",
  templateUrl: "./season.component.html",
  styleUrls: ["./season.component.scss"]
})
export class SeasonComponent implements OnInit {
  currents: Current[];
  showSpinner: boolean = true;

  constructor(private resultService: ResultService) {}

  ngOnInit() {
    this.resultService.getCurrent().subscribe(currents => {
      this.currents = currents["anime"];
      this.showSpinner = false;
    });
  }
}
