import { Component, OnInit } from '@angular/core';
import { Anime } from '../../models/Anime';
import { ResultService } from '../../services/result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  results: Anime[];

  constructor(private resultService: ResultService) { }

  ngOnInit() {
    this.resultService.getTop().subscribe(results => {
      this.results = results['top'];
      console.log('success', results);
    });
  }
}
