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

  getHello() {
    return this.http.get<any[]>(
      "https://us-central1-anii-420.cloudfunctions.net/helloWorld"
    );
  }
}
