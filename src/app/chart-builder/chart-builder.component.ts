import { Component, OnInit, NgZone, Output, EventEmitter } from '@angular/core';
import { colorSets } from '@swimlane/ngx-charts/release/utils/color-sets';
import * as shape from 'd3-shape';
import chroma from 'chroma-js';

import { Chart, Filter, Data, Query } from '../data.models';
import { DataService } from '../data.service';
import { chartTypes } from '../chartTypes';
import { toCapitalizedWords } from '../utils';

const defaultOptions = {
  view: undefined,
  colorScheme: colorSets.find(s => s.name === 'cool'),
  schemeType: 'ordinal',
  showLegend: true,
  legendTitle: 'Legend',
  gradient: false,
  showXAxis: true,
  showYAxis: true,
  showXAxisLabel: true,
  showYAxisLabel: true,
  yAxisLabel: '',
  xAxisLabel: '',
  autoScale: true,
  showGridLines: true,
  rangeFillOpacity: 0.5,
  roundDomains: false,
  tooltipDisabled: false,
  showSeriesOnHover: true,
  curve: shape.curveLinear,
  curveClosed: shape.curveCardinalClosed
} as Chart;

@Component({
  selector: 'app-chart-builder',
  templateUrl: './chart-builder.component.html',
  styleUrls: ['./chart-builder.component.scss']
})
export class ChartBuilderComponent implements OnInit {
  chartTypes = chartTypes;

  dataDims: string[] = [null, null, null, null, 'count'];
  chartOptions: Chart;
  colors: string;
  colorsRight: string;
  steps: number;
  bezier: boolean;
  lightness: boolean;
  bezierRight: boolean;
  lightnessRight: boolean;
  diverging: boolean;
  theme: string;
  chartType: any = chartTypes[0];

  data: Data[] = [];
  headerValues: any[] = [];

  aggragates = ['count', 'sum', 'avg', 'max', 'min'];

  @Output() addChart: EventEmitter<Chart> = new EventEmitter();

  get hasChartSelected(): boolean {
    return this.chartType && this.chartType.name;
  }

  get hasValidDimensions(): boolean {
    return this.hasChartSelected &&
      !this.chartType.dimLabels.some((l, i) => l ? !this.dataDims[i] : false);
  }

  constructor(private ngZone: NgZone, private dataService: DataService) {
    dataService.universeUpdated.subscribe(() => {
      this.clearAll();

      const headerValues = this.dataService.headerValues;

      if (JSON.stringify(headerValues) !== JSON.stringify(this.headerValues)) {
        this.headerValues = headerValues.slice();
        this.dataDims = [null, null, null, null, 'count'];
        this.data = [];
      } else {
        this.processData();
      }
    });
  }

  async processData() {
    if (!this.hasValidDimensions) {
      return;
    }

    // todo: this assumes bar chart/single series
    const xKey = this.dataDims[0];
    const yKey = this.dataDims[2];
    const agg = this.dataDims[4];

    const x = this.chartOptions.xAxisLabel = this.chartOptions.legendTitle = toCapitalizedWords(xKey);
    const y = toCapitalizedWords(yKey);
    const a = toCapitalizedWords(agg);

    this.chartOptions.yAxisLabel = `${a} of ${y}`;
    this.chartOptions.title = `${a} of ${y} vs ${x}`;

    const query = await this.dataService.createQuery(xKey, yKey, agg);
    this.data = this.dataService.getChartSeriesFromQuery(query, yKey, agg);

    this.ngZone.run(() => { });
  }

  ngOnInit() {
    this.dataDims = [null, null, null, null, 'count'];
    this.clearAll();
  }

  clearAll() {
    this.chartType = chartTypes[0];
    this.theme = 'dark';
    this.colors = '#a8385d,#7aa3e5,#a27ea8,#aae3f5,#adcded,#a95963,#8796c0,#7ed3ed,#50abcc,#ad6886';
    this.colorsRight = 'darkred, deeppink, orange, lightyellow';
    this.steps = 10;
    this.bezier = false;
    this.lightness = false;
    this.bezierRight = false;
    this.lightnessRight = false;
    this.bezier = false;
    this.lightness = false;
    this.chartOptions = {...defaultOptions} as Chart;
    return this.updateColorScheme();
  }

  updateColorScheme() {
    const domain = this.diverging ? this.updateColorSchemeDiv() : this.updateColorSchemeSeq();
    this.chartOptions.colorScheme = {...this.chartOptions.colorScheme, domain};
  }

  async onAddToDashboard() {
    const chart = {...this.chartOptions};
    chart.data = this.data.slice();
    chart.chartType = {...this.chartType};
    chart.dataDims = this.dataDims.slice();
    chart.theme = this.theme;
    this.addChart.emit(chart);
  }

  private updateColorSchemeSeq() {
    return getColorScale(this.colors, this.bezier, this.lightness).colors(this.steps);
  }

  private updateColorSchemeDiv() {
    const domainL = getColorScale(this.colors, this.bezier, this.lightness).colors(this.steps);
    const domainR = getColorScale(this.colorsRight, this.bezierRight, this.lightnessRight).colors(this.steps);

    if (domainL[domainL.length - 1] === domainR[0]) {
      domainL.pop();
    }

    return chroma.scale([...domainL, ...domainR]).colors(this.steps);
  }
}

function getColorScale(colors: string, bezier: boolean, lightness: boolean): any {
  const cleanColors = clean(colors);
  const scale = bezier ? chroma.bezier(cleanColors.slice(0, 5)).scale() : chroma.scale(cleanColors);
  return scale.mode('lab').correctLightness(lightness);

  function clean(s: string): string[] {
    return s.trim().replace(/(, *| +)/g, ',').replace(/['"]/g, '').split(',');
  }
}






