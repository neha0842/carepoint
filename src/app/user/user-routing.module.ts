import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TakeTestComponent } from '../user/take-test/take-test.component';
import { ReportComponent} from '../user/report/report.component';
import { FetchReportComponent} from '../user/fetch-report/fetch-report.component';
import {ReportDeatilsComponent} from '../user/report-deatils/report-deatils.component';


const routes: Routes = [
  {path:'take-test', component:TakeTestComponent},
  {path:'report', component:ReportComponent},
  { path:'fetch-report',component:FetchReportComponent},
  { path:'report-details/:id', component:ReportDeatilsComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
