import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TakeTestComponent } from '../user/take-test/take-test.component';
import {ReportComponent } from '../user/report/report.component';

const routes: Routes = [
  {path:'take-test', component:TakeTestComponent},
  {path:'report', component:ReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
