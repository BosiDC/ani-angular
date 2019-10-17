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
  label_arr = [];
  data_arr = [];
  genres: Label[] = [];
  freqGenres: number[] = [];
  genreFreqs: GenreFreq[];
  avgGenres: any[];
  avgGenresLabels: Label[] = [];
  avgScoreGenres: number[] = [];
  //Chart 1# -----------------------------------------------------------
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [{ ticks: {} }],
      yAxes: [
        {
          ticks: {
            max: 90,
            min: 80
          }
        }
      ]
    },
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end"
      }
    }
  };
  public barChartLabels: Label[] = this.label_arr;
  public barChartType: ChartType = "bar";
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [
    { data: this.data_arr, label: "Score" }
  ];

  //Chart 2# -----------------------------------------------------------
  public barChartOptionTwo: ChartOptions = {
    responsive: true,
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end"
      }
    }
  };
  public barChartLabelsTwo: Label[] = this.avgGenresLabels;
  public barChartTypeTwo: ChartType = "bar";
  public barChartLegendTwo = true;
  public barChartDataTwo: ChartDataSets[] = [
    { data: this.avgScoreGenres, label: "Score" }
  ];

  //Pie Chart 1# -----------------------------------------------------------
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: "top"
    }
  };
  public pieChartType: ChartType = "pie";
  public pieChartLabel: Label[] = this.genres;
  public pieChartData: number[] = this.freqGenres;
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: [
        "#e6194b",
        "#3cb44b",
        "#ffe119",
        "#4363d8",
        "#f58231",
        "#911eb4",
        "#46f0f0",
        "#f032e6",
        "#bcf60c",
        "#fabebe",
        "#008080",
        "#e6beff",
        "#9a6324",
        "#fffac8",
        "#800000"
      ]
    }
  ];
  showSpinner: boolean;
  show: boolean;

  constructor(private stat: StatService) {}

  ngOnInit() {
    this.showSpinner = true;
    this.show = false;
    this.stat.getGenreAvgScore().subscribe(res => {
      this.avgGenres = res;
      for (let avgGenre of this.avgGenres) {
        let genre = avgGenre.genres;
        let avgScore = avgGenre.asScore;
        this.avgGenresLabels.push(genre);
        this.avgScoreGenres.push(avgScore);
      }
      this.showSpinner = false;
      this.show = true;
    });
    this.stat.getGenreFreq().subscribe(res => {
      this.genreFreqs = res;
      for (let genreFreq of this.genreFreqs) {
        let genre = genreFreq.genres;
        let freq = genreFreq.g_freg;
        this.genres.push(genre);
        this.freqGenres.push(freq);
      }
      this.showSpinner = false;
      this.show = true;
    });

    this.stat.getTopTen().subscribe(res => {
      for (var i = 0; i < res.length; i++) {
        var obj = res[i];
        this.data_arr[i] = obj.averageScore;
        this.label_arr[i] = obj.title;
      }
      this.showSpinner = false;
      this.show = true;
    });
  }
}
