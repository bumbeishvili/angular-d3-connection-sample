import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { BarChartD3 } from './bar-chart.d3';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  @ViewChild('chartContainer') chartContainer: ElementRef;
  @Input() data: any[];

  constructor() {}

  ngOnChanges() {
    this.updateChart();
  }

  ngAfterViewInit() {
    this.updateChart();
  }

  updateChart() {
    if (!this.data) {
      BarChartD3(this.data, this.chartContainer);
    }
  }

  ngOnInit() {}
}
