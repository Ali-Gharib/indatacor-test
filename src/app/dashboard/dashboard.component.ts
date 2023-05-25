import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  chartData: any;
  
  stackedChartData: any;
  stackedChartOptions:any ;
  pieChartData:any ;
  pieChartOptions :any ;

  constructor() { }

  ngOnInit(): void {
    this.chartData = {
      labels: ['Label 1', 'Label 2', 'Label 3'],
      datasets: [
        {
          label: 'Data',
          data: [10, 20, 30],
          backgroundColor: ['red', 'green', 'blue']
        }
      ]
    };
  }
}

  