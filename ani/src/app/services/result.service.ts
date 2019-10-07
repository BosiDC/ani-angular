import { Injectable } from "@angular/core";
import { Top, Search, Current } from "../models/Anime";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { ɵNAMESPACE_URIS } from "@angular/platform-browser";

@Injectable({
  providedIn: "root"
})
export class ResultService {
  topURL: string = "https://api.jikan.moe/v3/top/anime/1/";
  searchURL: string = "https://api.jikan.moe/v3/search/anime?";
  currentURL: string = "https://api.jikan.moe/v3/season/2019/fall";
  URL: string = "";

  constructor(private http: HttpClient) {}

  private messageSource = new BehaviorSubject<Search[]>(null);
  currentMessage = this.messageSource.asObservable();

  //get the top airing animes
  getTop(): Observable<Top[]> {
    return this.http.get<Top[]>(this.topURL + "airing");
  }

  //search anime function
  getSearch(
    name: string,
    order: string,
    type: string,
    status: string,
    rating: string,
    genre: string
  ): Observable<Search[]> {
    let httpParams = new HttpParams();
    if (name == "") {
      httpParams.set("q", "");
    } else {
      httpParams.set("q", name);
    }
    if (order == "") {
      httpParams.set("order_by", "");
    } else {
      httpParams.set("order_by", order);
    }
    if (type == "") {
      httpParams.set("type", "");
    } else {
    }
    return this.http.get<Search[]>(this.searchURL, { params: httpParams });
  }

  //get the current season of animes
  getCurrent(): Observable<Current[]> {
    return this.http.get<Current[]>(this.currentURL);
  }

  //allows communication between different componenets
  changeMessage(message: Search[]) {
    this.messageSource.next(message);
  }
}
