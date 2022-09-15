import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmployeeService } from './employee.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
	providers: [EmployeeService],
})
export class EmployeeModule { }
