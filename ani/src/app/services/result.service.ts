import { Injectable } from '@angular/core';
import { Top } from '../models/Anime';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  topURL: string = 'https://api.jikan.moe/v3/top/anime/1/';

  constructor(private http: HttpClient) { }

  getTop(): Observable<Top[]> {
    return this.http.get<Top[]>(this.topURL + 'airing');
  }
}
