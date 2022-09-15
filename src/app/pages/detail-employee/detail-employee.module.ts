import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailEmployeeRoutingModule } from './detail-employee-routing.module';
import { DetailEmployeeComponent } from './detail-employee.component';


@NgModule({
  declarations: [
    DetailEmployeeComponent
  ],
  imports: [
    CommonModule,
    DetailEmployeeRoutingModule
  ]
})
export class DetailEmployeeModule { }
