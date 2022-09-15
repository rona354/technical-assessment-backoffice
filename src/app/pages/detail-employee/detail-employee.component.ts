import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeModel } from '../../shared/models/employee.model';
import { EmployeeService } from '../../shared/services/employee/employee.service';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css']
})
export class DetailEmployeeComponent implements OnInit {
	username!: string;
	data: EmployeeModel | undefined;

  constructor(
		private route: ActivatedRoute,
		public service: EmployeeService,
		) { }

  ngOnInit(): void {
		this.route.queryParams.subscribe(params => {
			this.username = params['user'];
			this.findAnEmployee();
		});
  }

	private findAnEmployee() {
		this.service.employee$.subscribe({
			next: (employees) => {
				this.data = employees.find(each => each.username === this.username);
			}
		});
	}

}
