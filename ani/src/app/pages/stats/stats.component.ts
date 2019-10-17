import { Component, OnInit } from "@angular/core";
import {
  ChartOptions,
  ChartType,
  ChartDataSets,
  RadialChartOptions
} from "chart.js";
import { Label } from "ng2-charts";
import { StatService } from "src/app/services/stat.service";

@Component({
  selector: "app-stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.scss"]
})
export class StatsComponent{
  public label_arr = [];
  public data_arr = [];
  public max_y = 100;
  public min_y = 70;
  //Chart 1# -----------------------------------------------------------
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{
      ticks: {
      }
    }], yAxes: [{
      ticks: {
        max : 90,
        min: 80
      }
    }] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = this.label_arr;
  public barChartType: ChartType = 'bar'; 
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: this.data_arr, label: 'Score' }
  ];
  //test chart --------------

  constructor(private stats: StatService) {}

  ngOnInit() {
    this.stats.getTopTen().subscribe(res => {
      for(var i = 0; i < res.length; i++){
        var obj = res[i];
        this.data_arr[i] = obj.averageScore;
        this.label_arr[i] = obj.title;
      }
  });
}
}
