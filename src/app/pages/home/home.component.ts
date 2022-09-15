import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Employee_List } from 'src/app/shared/consts/employee-list.const';
import { EmployeeService } from '../../shared/services/employee/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
	private subscriber: Subscription[] = [];
	
  displayedColumns!: string[];
	searchValue: string = '';

  constructor(public service: EmployeeService, private router: Router) {}

  ngOnInit(): void {
		this.displayedColumns = Object.keys(Employee_List[0]).map((key) => key);
		this.getSearchValue();
  }

	private getSearchValue() {
		this.subscriber.push(
			this.service.filter$.subscribe({
				next: (value) => this.searchValue = value
			})
		);
	}

  clickedRow(event: any) {
    console.log(event);
		this.router.navigate(['/detail-employee'], {
			queryParams:  { user: event.username }
		});
  }

  addEmploye() {
    this.router.navigate(['/add-employee']);
  }

	onChangeSearch(value: string) {
		this.service.setFilter$(value)
	}

	ngOnDestroy(): void {
		this.subscriber.forEach(subs => subs.unsubscribe())
	}
}
