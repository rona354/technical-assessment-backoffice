import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { delay, switchMap, tap } from 'rxjs/operators';
import { Employee_List } from '../../consts/employee-list.const';
import { EmployeeModel } from '../../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private _search$ = new Subject<void>();
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _employee$ = new BehaviorSubject<EmployeeModel[]>([]);
  private _filter$ = new BehaviorSubject<string>('');

  constructor() {
    this._search$
      .pipe(
        tap(() => this._loading$.next(true)),
        switchMap(() => this._getEmployee()),
        tap(() => this._loading$.next(false))
      )
      .subscribe((result) => {
        this._employee$.next(result);
      });
    this._search$.next();
  }

	/**
	 * 
	 * @returns MOCK GET DUMMY DATA
	 */
  private _getEmployee(): Observable<EmployeeModel[]> {
    return of(Employee_List).pipe(delay(1000));
  }

	/**
	 * 
	 * @param data employees
	 * @returns MOCK POST DUMMY DATA
	 */
	public addEmployee(data: EmployeeModel[]): Observable<any> {
		return of('Success').pipe(
			tap(() => this._loading$.next(true)),
			tap(() => this._employee$.next([...this._employee$.getValue(), ...data])),
			delay(1000),
			tap(() => this._loading$.next(false))
		);
	}

  get loading$() {
    return this._loading$.asObservable();
  }
  get employee$() {
    return this._employee$.asObservable();
  }
	public get filter$() {
		return this._filter$.asObservable();
	}

	public setFilter$(value: string) {
		this._filter$.next(value);
	}
}
