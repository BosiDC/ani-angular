import { Component, OnInit, Input } from "@angular/core";
import { Current } from "src/app/models/Anime";

@Component({
  selector: "app-current-item",
  templateUrl: "./current-item.component.html",
  styleUrls: ["./current-item.component.scss"]
})
export class CurrentItemComponent implements OnInit {
  @Input() current: Current;

  constructor() {}

  ngOnInit() {}
}
