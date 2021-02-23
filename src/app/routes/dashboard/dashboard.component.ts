import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  NgZone,
} from '@angular/core';

import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
      .mat-raised-button {
        margin-right: 8px;
        margin-top: 8px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DashboardService],
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  targetAmount:number;
  finalAmount:number;
  addRequest:number;
  percentage:number;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.dashboardSrv.getData();

  infos = this.dashboardSrv.getInfos();

  charts = this.dashboardSrv.getCharts();
  chart1 = null;
  chart2 = null;

  stats = this.dashboardSrv.getStats();

  constructor(
    private dashboardSrv: DashboardService,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => this.initChart());
  }

  ngOnDestroy() {
    if (this.chart1) {
      this.chart1.destroy();
    }
    if (this.chart2) {
      this.chart2.destroy();
    }
  }

  initChart() {
    this.chart1 = new ApexCharts(document.querySelector('#chart1'), this.charts[0]);
    this.chart1.render();
    this.chart2 = new ApexCharts(document.querySelector('#chart2'), this.charts[1]);
    this.chart2.render();
    this.targetAmount = this.dashboardSrv.targetAmount;
    this.finalAmount = this.dashboardSrv.finalAmount;
    this.addRequest = this.dashboardSrv.addRequest;
    this.percentage = this.dashboardSrv.percentage * 100;
  }
}
