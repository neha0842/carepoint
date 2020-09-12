import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { FrontPageRoutingModule } from './front-page-routing.module';

import { LandingBodyComponent } from './landing-body/landing-body.component';


@NgModule({
  declarations: [LandingBodyComponent],
  imports: [
    CommonModule,
    FrontPageRoutingModule,
    MatButtonModule
  ],
  exports:[LandingBodyComponent]
})
export class FrontPageModule { }
