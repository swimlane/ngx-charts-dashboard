import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { NgxUIModule } from '@swimlane/ngx-ui';
// import { NgxDnDModule } from '@swimlane/ngx-dnd/src/';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { DataService } from './data.service';
import { ChartBuilderComponent } from './chart-builder/chart-builder.component';
import { ChartDashboardComponent } from './chart-dashboard/chart-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    ChartBuilderComponent,
    ChartDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxUIModule,
    // NgxDnDModule,
    NgxChartsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
