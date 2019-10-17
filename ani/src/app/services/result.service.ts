import { Injectable } from "@angular/core";
import { Top, Search, Current } from "../models/Anime";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

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
    let httpParams = new HttpParams()
      .set("q", name)
      .set("order_by", order)
      .set("type", type)
      .set("status", status)
      .set("rated", rating)
      .set("genre", genre);
    //if undefined put empty string in the params
    if (name == undefined) {
      httpParams = httpParams.set("q", "");
    }
    if (order == undefined || order == "no") {
      httpParams = httpParams.set("order_by", "");
    }
    if (type == undefined || type == "no") {
      httpParams = httpParams.set("type", "");
    }
    if (status == undefined || status == "no") {
      httpParams = httpParams.set("status", "");
    }
    if (rating == undefined || rating == "no") {
      httpParams = httpParams.set("rated", "");
    }
    if (genre == undefined || genre == "no") {
      httpParams = httpParams.set("genre", "");
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
