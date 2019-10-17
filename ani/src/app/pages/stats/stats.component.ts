import { Component, OnInit, Input } from "@angular/core";
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
  public chartColors2: any[] = [
    {
      backgroundColor: [
        "#4363d8",
        "#4363d8",
        "#4363d8",
        "#4363d8",
        "#4363d8",
        "#4363d8",
        "#4363d8",
        "#4363d8",
        "#4363d8",
        "#4363d8"
      ]
    }
  ];
  public barChartData: ChartDataSets[] = [
    { data: this.data_arr, label: "Score" }
  ];

  //Chart 3$ -----------------------------------------------------------
  public label_arr1 = [];
  public data_arr1 = [];

  public label_arr2 = [];
  public data_arr2 = [];

  public label_arr3 = [];
  public data_arr3 = [];

  public label_arr4 = [];
  public data_arr4 = [];

  public label_arr5 = [];
  public data_arr5 = [];

  public barChartOptions2: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [
        {
          ticks: {}
        }
      ],
      yAxes: [
        {
          ticks: {
            max: 90,
            min: 40
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
  public barChartLabels2: Label[] = this.label_arr1;
  public barChartType2: ChartType = "bar";
  public barChartLegend2 = true;
  public chartColors: any[] = [
    {
      backgroundColor: [
        "#3cb44b",
        "#3cb44b",
        "#3cb44b",
        "#3cb44b",
        "#3cb44b",
        "#3cb44b",
        "#3cb44b",
        "#3cb44b",
        "#3cb44b",
        "#3cb44b",
        "#3cb44b",
        "#3cb44b"
      ]
    }
  ];
  public barChartData2: ChartDataSets[] = [
    { data: this.data_arr1, label: "Score" }
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

  showSpinner: boolean;
  show: boolean;
  //for nb-select

  onChange(value) {
    console.log(value);
    if (value == 5) {
      this.barChartData2[0].data = this.data_arr5;
      this.barChartLabels2 = this.label_arr5;
    } else if (value == 4) {
      this.barChartData2[0].data = this.data_arr4;
      this.barChartLabels2 = this.label_arr4;
    } else if (value == 3) {
      this.barChartData2[0].data = this.data_arr3;
      this.barChartLabels2 = this.label_arr3;
    } else if (value == 2) {
      this.barChartData2[0].data = this.data_arr2;
      this.barChartLabels2 = this.label_arr2;
    }
    //value = 1
    else {
      this.barChartData2[0].data = this.data_arr1;
      this.barChartLabels2 = this.label_arr1;
    }
  }

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
    });

    //Action 1
    this.stat.getActionTopTen().subscribe(res => {
      for (var i = 0; i < res.length; i++) {
        var obj = res[i];
        this.data_arr1[i] = obj.averageScore;
        this.label_arr1[i] = obj.title;
      }
    });
    //Adventure 2
    this.stat.getAdventureTen().subscribe(res => {
      for (var i = 0; i < res.length; i++) {
        var obj = res[i];
        this.data_arr2[i] = obj.averageScore;
        this.label_arr2[i] = obj.title;
      }
    });
    //Romance 3
    this.stat.getRomanceTen().subscribe(res => {
      for (var i = 0; i < res.length; i++) {
        var obj = res[i];
        this.data_arr3[i] = obj.averageScore;
        this.label_arr3[i] = obj.title;
      }
    });
    //Comedy 4
    this.stat.getComedyTen().subscribe(res => {
      for (var i = 0; i < res.length; i++) {
        var obj = res[i];
        this.data_arr4[i] = obj.averageScore;
        this.label_arr4[i] = obj.title;
      }
    });
    //Fantasy 5
    this.stat.getFantasyTen().subscribe(res => {
      for (var i = 0; i < res.length; i++) {
        var obj = res[i];
        this.data_arr5[i] = obj.averageScore;
        this.label_arr5[i] = obj.title;
      }
    });
  }
}
