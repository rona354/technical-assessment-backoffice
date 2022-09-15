import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { AddEmployeeRoutingModule } from './add-employee-routing.module';
import { AddEmployeeComponent } from './add-employee.component';


@NgModule({
  declarations: [AddEmployeeComponent],
  imports: [
    CommonModule,
    AddEmployeeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
		CurrencyMaskModule,
    // Materials
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [

	],
})
export class AddEmployeeModule {}
