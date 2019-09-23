import { Component, OnInit, Input } from '@angular/core';
import { Top } from '../../models/Anime';
import { ResultService } from '../../services/result.service';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.css']
})
export class ResultItemComponent implements OnInit {
  @Input() result: Top;

  constructor(private resultService: ResultService) { }

  ngOnInit() {
  }

}
