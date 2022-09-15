import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from 'src/app/shared/table/table.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, TableComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
		FormsModule,
    /** Angular material */
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
})
export class HomeModule {}
