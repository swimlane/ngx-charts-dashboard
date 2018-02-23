import { Injectable, EventEmitter } from '@angular/core';
import * as universe from 'universe';
import * as babyparse from 'babyparse';

import { Universe, Chart, Filter, Data, Query } from './data.models';

@Injectable()
export class DataService {

  private _dataText: string;
  private _parsed: {data: Data[], errors: any[], meta: any};

  universeUpdated: EventEmitter<Universe> = new EventEmitter();

  dataDims: string[] = [];

  dataUniverse: Universe;

  get rawData(): Data[] {
    return this._parsed.data;
  }

  get errors(): any[] {
    return this._parsed.errors;
  }

  get dataText(): string {
    return this._dataText || ' ';
  }

  get headerValues(): string[] {
    return this._parsed.meta.fields.map(d => ({
      name: d,
      type: typeof this._parsed.data[0][d]
    }));
  }

  constructor() { }

  async updateData(dataText: string): Promise<Data[]> {
    this._parsed = babyparse.parse(dataText, {
      header: true,
      dynamicTyping: true
    });

    if (this._parsed.errors.length) {
      this._dataText = '';
      return this.rawData;
    }

    this.dataUniverse = await universe(this._parsed.data);

    this.universeUpdated.emit(this.dataUniverse);
    return this.rawData;
  }

  async createQuery(groupBy: string, valueKey: string, aggragate = 'sum'): Promise<Query> {
    let select: any = { $count: true };
    aggragate = '$' + aggragate;

    if (valueKey && valueKey !== 'count') {
      select = {
        $count: true,
        [valueKey]: {
          [aggragate]: valueKey
        }
      };
    }

    return await this.dataUniverse.query({
      groupBy,
      select
    });
  }

  getChartSeriesFromQuery(query: Query, yKey: string = 'count', aggragate = 'sum'): Data[] {
    return query.data.map(d => {
      let value =  d.value[yKey];
      if (typeof value === 'object') {
        value = value[aggragate];
      }
      return {
        name: d.key,
        value: value
      };
    }).filter(d => d.value !== 0);
  }
}
