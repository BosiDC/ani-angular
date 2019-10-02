import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Search } from "../../models/Anime";
import { ResultService } from "../../services/result.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  searchs: Search[];
  name: string;

  constructor(private resultService: ResultService) {}

  ngOnInit() {}

  onSubmit() {
    this.resultService.getSearch(this.name).subscribe(results => {
      this.searchs = results["results"];
      this.update();
    });
    this.update();
  }
  onNameKeyUp(event: any) {
    this.name = event.target.value;
  }
  update() {
    this.resultService.changeMessage(this.searchs);
  }
}
