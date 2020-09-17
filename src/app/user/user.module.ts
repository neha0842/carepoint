import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { TakeTestComponent } from './take-test/take-test.component';
import { ReportComponent } from './report/report.component';
import {FormsModule } from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';
import { FetchReportComponent } from './fetch-report/fetch-report.component';
import { ReportDeatilsComponent } from './report-deatils/report-deatils.component';


@NgModule({
  declarations: [TakeTestComponent, ReportComponent, FetchReportComponent, ReportDeatilsComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
