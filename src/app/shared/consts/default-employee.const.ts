import { Validators } from "@angular/forms";

export const DEFAULT_EMPLOYEE = {
	username: ['', Validators.required],
	firstName: ['', Validators.required],
	lastName: ['', Validators.required],
	email: ['', [Validators.email, Validators.required]],
	birthDate: ['', Validators.required],
	basicSalary: [null, Validators.required],
	status: ['', Validators.required],
	group: ['', Validators.required],
	description: new Date(),
};