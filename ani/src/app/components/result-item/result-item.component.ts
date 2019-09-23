import { Component, OnInit, Input } from '@angular/core';
import { Anime } from '../../models/Anime';
import { ResultService } from '../../services/result.service';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.css']
})
export class ResultItemComponent implements OnInit {
  @Input() result: Anime;

  constructor(private resultService: ResultService) { }

  ngOnInit() {
  }

}
