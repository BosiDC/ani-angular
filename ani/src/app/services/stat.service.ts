import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class StatService {
  constructor(private http: HttpClient) {}
  getData() {
    return this.http
      .get<any[]>(
        "https://us-central1-anii-420.cloudfunctions.net/getReportData"
      )
      .pipe(map((result: any) => result));
  }

  getTopTen() {
    return this.http
      .get<any[]>("https://us-central1-anii-420.cloudfunctions.net/getTopTen")
      .pipe(map((result: any) => result));
  }

  getGenreFreq() {
    return this.http
      .get<any[]>(
        "https://us-central1-anii-420.cloudfunctions.net/getGenreFreq"
      )
      .pipe(map((result: any) => result));
  }

  getGenreAvgScore() {
    return this.http
      .get<any[]>(
        "https://us-central1-anii-420.cloudfunctions.net/getGenreAvgScore"
      )
      .pipe(map((result: any) => result));
  }

  getActionTopTen() {
    return this.http
      .get<any[]>(
        "https://us-central1-anii-420.cloudfunctions.net/getActionTen"
      )
      .pipe(map((result: any) => result));
  }

  getAdventureTen() {
    return this.http
      .get<any[]>(
        "https://us-central1-anii-420.cloudfunctions.net/getAdventureTen"
      )
      .pipe(map((result: any) => result));
  }

  getComedyTen() {
    return this.http
      .get<any[]>(
        "https://us-central1-anii-420.cloudfunctions.net/getComedyTen"
      )
      .pipe(map((result: any) => result));
  }

  getDramaTen() {
    return this.http
      .get<any[]>("https://us-central1-anii-420.cloudfunctions.net/getDramaTen")
      .pipe(map((result: any) => result));
  }

  getFantasyTen() {
    return this.http
      .get<any[]>(
        "https://us-central1-anii-420.cloudfunctions.net/getFantasyTen"
      )
      .pipe(map((result: any) => result));
  }

  getRomanceTen() {
    return this.http
      .get<any[]>(
        "https://us-central1-anii-420.cloudfunctions.net/getRomanceTen"
      )
      .pipe(map((result: any) => result));
  }

  getSportsTen() {
    return this.http
      .get<any[]>(
        "https://us-central1-anii-420.cloudfunctions.net/getSportsTen"
      )
      .pipe(map((result: any) => result));
  }
}
