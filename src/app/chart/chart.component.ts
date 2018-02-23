import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Universe, Chart, Filter, Data, Query } from '../data.models';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Output() select: EventEmitter<{chart: Chart, value: any}> = new EventEmitter();

  @Input() chart: Chart;
  @Input() chartType: any;
  @Input() data: Data[];

  constructor() { }

  ngOnInit() {
  }

  onSelect(data: Data) {
    const value = typeof data === 'object' ? data.name : data;
    if (this.chart.xFilter) {
      const filter = this.chart.xFilter;
      switch (filter.type) {
        case 'value':
          filter.range[0] = value;
          break;
        default:
          filter.rangeIndex[value] = !filter.rangeIndex[value];
      }
    }
    this.select.emit({chart: this.chart, value});
  }
}
