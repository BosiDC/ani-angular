import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-profile-stat',
  templateUrl: './profile-stat.component.html',
  styleUrls: ['./profile-stat.component.scss']
})
export class ProfileStatComponent implements OnInit {

  //Chart 1# -----------------------------------------------------------
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  
 //Chart 2# ----------------------------------------------------------- 
  public barChartOptions2: ChartOptions = {
    responsive: true
  };
  public barChartType2: ChartType = 'pie';
  public barChartLegend2 = true;

  public barChartData2: ChartDataSets[] = [
    { data: [1, 2, 3], label: 'Approved', stack: 'a' },
  ];
  public barChartLabels2: string[] = ['P', 'R', 'B'];

  constructor() { }

  ngOnInit() {
  }

}
