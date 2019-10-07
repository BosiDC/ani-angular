import { Component, OnInit } from "@angular/core";
import { FaveService } from "../../services/fave.service";
import { Fave } from "../../models/List";

@Component({
  selector: "app-favourite-item",
  templateUrl: "./favourite-item.component.html",
  styleUrls: ["./favourite-item.component.scss"]
})
export class FavouriteItemComponent implements OnInit {
  lists: Fave[];
  constructor(public faveService: FaveService) {}

  ngOnInit() {
    this.faveService.getFaveList().subscribe(list => {
      this.lists = list;
      console.log(list);
    });
  }
}
