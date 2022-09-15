import { EmployeeModel } from '../models/employee.model';

export const Employee_List: EmployeeModel[] = [
  {
    username: 'anto69',
    firstName: 'Anto',
    lastName: 'Maryanto',
    email: 'antomaryanto@gmail.com',
    birthDate: new Date(1992, 1, 21),
    basicSalary: 99999999,
    status: 'permanent',
    group: 'IT',
    description: new Date(),
  },
  {
    username: 'borat7x',
    firstName: 'Borat',
    lastName: 'Sagdiyev',
    email: 'boratsagdiyev@gmail.com',
    birthDate: new Date(1992, 1, 14),
    basicSalary: 66666666,
    status: 'contract',
    group: 'IT',
    description: new Date(),
  },
];
