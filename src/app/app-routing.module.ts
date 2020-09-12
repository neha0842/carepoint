import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingBodyComponent} from './front-page/landing-body/landing-body.component';



const routes: Routes = [
    { path:'',redirectTo:'',pathMatch:'full'},
    {path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }