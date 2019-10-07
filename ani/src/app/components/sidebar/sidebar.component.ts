import { Component, OnInit } from "@angular/core";
import { Search } from "../../models/Anime";
import { Sort, Type, Status, Rating, Genre } from "../../models/Select";
import { ResultService } from "../../services/result.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  searchs: Search[];
  sorts: Sort[] = [
    { value: " ", viewValue: "No Sort" },
    { value: "title", viewValue: "Title" },
    { value: "score", viewValue: "Score" }
  ];
  types: Type[] = [
    { value: " ", viewValue: "Any Type" },
    { value: "tv", viewValue: "TV" },
    { value: "ova", viewValue: "OVA" },
    { value: "special", viewValue: "Special" },
    { value: "ona", viewValue: "ONA" },
    { value: "music", viewValue: "Music" }
  ];
  statuses: Status[] = [
    { value: " ", viewValue: "Any Status" },
    { value: "airing", viewValue: "Airing" },
    { value: "completed", viewValue: "Completed" },
    { value: "to_be_aired", viewValue: "Upcoming" }
  ];
  ratings: Rating[] = [
    { value: " ", viewValue: "Any Rating" },
    { value: "g", viewValue: "G" },
    { value: "pg", viewValue: "PG" },
    { value: "pg13", viewValue: "PG-13" },
    { value: "r17", viewValue: "R" },
    { value: "r", viewValue: "R+" },
    { value: "rx", viewValue: "Rx" }
  ];
  genres: Genre[] = [
    { value: " ", viewValue: "Any Genre" },
    { value: "1", viewValue: "Action" },
    { value: "2", viewValue: "Adventure" },
    { value: "3", viewValue: "Cars" },
    { value: "4", viewValue: "Comedy" },
    { value: "5", viewValue: "Dementia" },
    { value: "6", viewValue: "Demons" },
    { value: "7", viewValue: "Mystery" },
    { value: "8", viewValue: "Drama" },
    { value: "9", viewValue: "Ecchi" },
    { value: "10", viewValue: "Fantasy" },
    { value: "11", viewValue: "Game" },
    { value: "13", viewValue: "Historical" },
    { value: "14", viewValue: "Horror" },
    { value: "15", viewValue: "Kids" },
    { value: "16", viewValue: "Magic" },
    { value: "17", viewValue: "Martial Arts" },
    { value: "18", viewValue: "Mecha" },
    { value: "19", viewValue: "Music" },
    { value: "20", viewValue: "Parody" },
    { value: "21", viewValue: "Samurai" },
    { value: "22", viewValue: "Romance" },
    { value: "23", viewValue: "School" },
    { value: "24", viewValue: "Sci Fi" },
    { value: "25", viewValue: "Shoujo" },
    { value: "26", viewValue: "Shoujo Ai" },
    { value: "27", viewValue: "Shounen" },
    { value: "28", viewValue: "Shounen Ai" },
    { value: "29", viewValue: "Space" },
    { value: "30", viewValue: "Sports" },
    { value: "31", viewValue: "Super Power" },
    { value: "32", viewValue: "Vampire" },
    { value: "33", viewValue: "Yaoi" },
    { value: "34", viewValue: "Yuri" },
    { value: "35", viewValue: "Harem" },
    { value: "36", viewValue: "Slice of Life" },
    { value: "37", viewValue: "Supernatural" },
    { value: "38", viewValue: "Military" },
    { value: "39", viewValue: "Police" },
    { value: "40", viewValue: "Psychological" },
    { value: "41", viewValue: "Thriller" },
    { value: "42", viewValue: "Seinen" },
    { value: "43", viewValue: "Josei" },
    { value: "12", viewValue: "Hentai" }
  ];
  name: string;
  selectedSort: string;
  selectedType: string;
  selectedStatus: string;
  selectedRating: string;
  selectedGenre: string;
  showSpinner: boolean;

  constructor(private resultService: ResultService) {}

  ngOnInit() {}

  //searches animes
  onSubmit() {
    this.showSpinner = true;
    this.resultService
      .getSearch(
        this.name,
        this.selectedSort,
        this.selectedType,
        this.selectedStatus,
        this.selectedRating,
        this.selectedGenre
      )
      .subscribe(results => {
        this.searchs = results["results"];
        this.update();
        console.log("success", results);
        this.showSpinner = false;
      });
    this.update();
  }

  //update name for search
  onNameKeyUp(event: any) {
    this.name = event.target.value;
  }

  //update the message for other componenets to see search results
  update() {
    this.resultService.changeMessage(this.searchs);
    console.log("success", this.searchs);
  }
}
