import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.scss']
})
export class StackedBarChartComponent implements OnInit {
    stackedData: any;

    stackedOptions: any;
  constructor() { }

  ngOnInit(): void {
      this.stackedData = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
              type: 'bar',
              label: 'Dataset 1',
              backgroundColor: '#42A5F5',
              data: [
                  50,
                  25,
                  12,
                  48,
                  90,
                  76,
                  42
              ]
          }, {
              type: 'bar',
              label: 'Dataset 2',
              backgroundColor: '#66BB6A',
              data: [
                  21,
                  84,
                  24,
                  75,
                  37,
                  65,
                  34
              ]
          }, {
              type: 'bar',
              label: 'Dataset 3',
              backgroundColor: '#FFA726',
              data: [
                  41,
                  52,
                  24,
                  74,
                  23,
                  21,
                  32
              ]
          }]
      };

      this.stackedOptions = {
          tooltips: {
              mode: 'index',
              intersect: false
          },
          responsive: true,
          scales: {
              xAxes: [{
                  stacked: true,
              }],
              yAxes: [{
                  stacked: true
              }]
          }
      };
      this.stackedOptions = {
          plugins: {
              legend: {
                  labels: {
                      color: '#ebedef'
                  }
              },
              tooltips: {
                  mode: 'index',
                  intersect: false
              }
          },
          scales: {
              x: {
                  stacked: true,
                  ticks: {
                      color: '#ebedef'
                  },
                  grid: {
                      color: 'rgba(255,255,255,0.2)'
                  }
              },
              y: {
                  stacked: true,
                  ticks: {
                      color: '#ebedef'
                  },
                  grid: {
                      color: 'rgba(255,255,255,0.2)'
                  }
              }
          }
      };
  }

}
