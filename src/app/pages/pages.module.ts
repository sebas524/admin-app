import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    Graphic1Component,
    ProgressComponent,
    PagesComponent,
  ],
  exports: [DashboardComponent, Graphic1Component, ProgressComponent],
  imports: [CommonModule, SharedModule, PagesRoutingModule],
})
export class PagesModule {}
