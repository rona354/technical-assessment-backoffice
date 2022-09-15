import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';
import { AppComponent } from './app.component';
import { EmployeeModule } from './shared/services/employee/employee.module';


export const MY_DATE_FORMATS = {
  parse: {
    dateInput: ['MM/DD/YYYY'],
  },
  display: {
    dateInput: 'MM/DD/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
	align: "right",
	allowNegative: false,
	decimal: ".",
	precision: 0,
	prefix: "",
	suffix: "",
	thousands: ","
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [
		EmployeeModule,
		{ provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
		{ provide: MAT_DATE_LOCALE, useValue: 'id' },
		{ provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
	],
  bootstrap: [AppComponent],
})
export class AppModule {}
