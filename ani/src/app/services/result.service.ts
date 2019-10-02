import { Injectable } from "@angular/core";
import { Top, Search, Current } from "../models/Anime";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ResultService {
  topURL: string = "https://api.jikan.moe/v3/top/anime/1/";
  searchURL: string = "https://api.jikan.moe/v3/search/anime?q=";
  currentURL: string = "https://api.jikan.moe/v3/season/2019/fall";

  constructor(private http: HttpClient) {}

  private messageSource = new BehaviorSubject<Search[]>(null);
  currentMessage = this.messageSource.asObservable();

  getTop(): Observable<Top[]> {
    return this.http.get<Top[]>(this.topURL + "airing");
  }
  getSearch(name: string): Observable<Search[]> {
    return this.http.get<Search[]>(this.searchURL + name);
  }
  getCurrent(): Observable<Current[]> {
    return this.http.get<Current[]>(this.currentURL);
  }

  changeMessage(message: Search[]) {
    this.messageSource.next(message);
  }
}
