import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	OnDestroy,
	Output,
	ViewChild
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';
import { EmployeeService } from '../services/employee/employee.service';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements AfterViewInit, OnDestroy {
	private subscriber: Subscription[] = [];

	@ViewChild(MatPaginator,) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;
	dataSource: MatTableDataSource<any> = new MatTableDataSource();

	/** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
	@Input() displayedColumns!: string[];
	@Input() dataTable!: EmployeeModel[];

	@Output() clickedData: EventEmitter<any> = new EventEmitter();

	constructor(public service: EmployeeService) { }

	ngAfterViewInit(): void {
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;

		this.dataSource = new MatTableDataSource(this.dataTable);
		this.observeFilterInService();
	}

	private observeFilterInService() {
		this.service.filter$.subscribe({
			next: (value) => this.applyFilter(value)
		});
	}

	applyFilter(value: string) {
		this.dataSource.filter = value?.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

	isDate(data: any): boolean {
		return data instanceof Date;
	}

	ngOnDestroy(): void {
		this.subscriber.forEach(subs => subs.unsubscribe())
	}
}
