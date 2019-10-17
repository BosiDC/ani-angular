import { Component, OnInit } from "@angular/core";
import {
  ChartOptions,
  ChartType,
  ChartDataSets,
  RadialChartOptions
} from "chart.js";
import { Label } from "ng2-charts";
import { StatService } from "src/app/services/stat.service";
import { GenreFreq } from "../../models/Chart";

@Component({
  selector: "app-stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.scss"]
})
export class StatsComponent implements OnInit {
  genres: Label[] = [];
  freqGenres: number[] = [];
  genreFreqs: GenreFreq[];
  //Chart 1# -----------------------------------------------------------
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end"
      }
    }
  };
  public barChartLabels: Label[] = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012"
  ];
  public barChartType: ChartType = "bar";
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Series A" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: "Series B" }
  ];

  //Chart 3$ -----------------------------------------------------------
  public radarChartOptions: RadialChartOptions = {
    responsive: true
  };
  public radarChartLabels: Label[] = [
    "Eating",
    "Drinking",
    "Sleeping",
    "Designing",
    "Coding",
    "Cycling",
    "Running"
  ];

  public radarChartData: ChartDataSets[] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: "Series A" },
    { data: [28, 48, 40, 19, 96, 27, 100], label: "Series B" }
  ];
  public radarChartType: ChartType = "radar";

  //Chart 2# -----------------------------------------------------------
  public barChartOptions2: ChartOptions = {
    responsive: true
  };
  public barChartType2: ChartType = "pie";
  public barChartLegend2 = true;

  public barChartData2: ChartDataSets[] = [
    { data: [1, 2, 3], label: "Approved", stack: "a" }
  ];
  public barChartLabels2: string[] = ["P", "R", "B"];

  public pieChartOption: ChartOptions = {
    responsive: true
  };
  public pieChartType: ChartType = "pie";
  public pieChartLabel: Label[] = this.genres;
  public pieChartData: number[] = this.freqGenres;

  constructor(private stat: StatService) {}

  ngOnInit() {
    this.stat.getGenreAvgScore().subscribe(res => {
      console.log(res);
    });
    this.stat.getGenreFreq().subscribe(res => {
      this.genreFreqs = res;
      console.log(this.genreFreqs);
      for (let genreFreq of this.genreFreqs) {
        let genre = genreFreq.genres;
        let freq = genreFreq.g_freg;
        this.genres.push(genre);
        this.freqGenres.push(freq);
        console.log(this.freqGenres);
        console.log(freq);
        console.log(this.pieChartData);
      }
    });
    this.stat.getTopTen().subscribe(res => {
      console.log(res);
    });
    this.stat.getComedyTen().subscribe(res => {
      console.log(res);
    });
    this.stat.getActionTopTen().subscribe(res => {
      console.log(res);
    });
  }
}
