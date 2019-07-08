import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})
export class Chart1Component implements OnInit {

  isLoading = false;

  options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
         // backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['X-1', 'X-2', 'X-3', 'X-4', 'Plan 2019 High']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['30 June 2019', '7 July 2019', '14 July 2019', '28 July 2019', '4 August 2019', '11 August 2019', '18 August 2019','25 August 2019', '1 September 2019', '8 September 2019','15 September 2019']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [      
      {
        name: 'Plan 2019 High',
        type: 'line',
        stack: 'counts',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        areaStyle: { normal: {} },
        data: [410, 750, 300, 934, 1001, 1330, 830, 310, 1500, 1200,645]
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
