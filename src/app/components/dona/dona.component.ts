import { Component, Input, Output, SimpleChanges } from '@angular/core';
import { ChartData, ChartType, ChartEvent } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent {
  @Input() title: string = 'untitled';

  @Input('labels') public doughnutChartLabels: string[] = [
    'Download Sales-1',
    'In-Store Sales-22',
    'Mail-Order Sales',
  ];

  @Input('data') public data: any = [350, 455, 100];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ data: this.data }],
  };

  ngOnChanges(changes: SimpleChanges): void {
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [{ data: this.data }],
    };
  }
}
