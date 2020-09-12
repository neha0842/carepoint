import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { DiagnosisOneComponent } from './diagnosis-one/diagnosis-one.component';
import { TakeTestComponent } from './take-test/take-test.component';
import { ReportComponent } from './report/report.component';


@NgModule({
  declarations: [DiagnosisComponent, DiagnosisOneComponent, TakeTestComponent, ReportComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
