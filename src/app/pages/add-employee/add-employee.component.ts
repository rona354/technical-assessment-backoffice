import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DEFAULT_EMPLOYEE } from '../../shared/consts/default-employee.const';
import { EmployeeService } from '../../shared/services/employee/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
	public maxDate!: Date;
  public form: FormGroup = this.fb.group({
    employees: this.fb.array([], Validators.required),
  });

  constructor(
		private fb: FormBuilder,
		public service: EmployeeService,
		private router: Router
	) {}

  ngOnInit(): void {
		this.addEmployee(DEFAULT_EMPLOYEE);
		this.maxDate = new Date();
	}

	/**
	 * 	DYNAMIC FORM MANIPULATION & SUBMIT
	 */

	public addEmployee(value?: any) {
		const newMember = this.fb.group(value || DEFAULT_EMPLOYEE);
		this.employees.push(newMember);
	}

	public removeMember(index: number) {
		this.employees.removeAt(index);
	}

  onClickSubmit() {
		if (this.form.valid) {
			this.service.addEmployee(this.form.value.employees)
				.subscribe({
					next: (res) => {
						if (res) console.log(res);
						this.service.employee$.subscribe(val => console.log(val))
						this.router.navigate(['/home']);
					}
				});
    }
  }

	get employees(): FormArray {
		return this.form.controls['employees'] as FormArray;
	}
}
