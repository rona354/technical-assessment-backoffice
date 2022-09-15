import { Injectable } from '@angular/core';
import { TimeoutError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor() {}

  // handling error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    let errorCode = '';
    if (error instanceof TimeoutError) {
      // Handle 'timeout over' error, ini jika pipe() nya dikasi timeout
      errorCode = '408';
      errorMessage = 'Request timeout from server. Please retry !';
    } else if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorCode = `Error`;
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      if (error.status === 0) {
        errorCode = `${error.status}`;
        errorMessage = 'Request timeout from server. Please retry !';
      } else if (error.status === 500) {
        errorCode = `${error.status}`;
        errorMessage = `${error.error.data}`;
      } else if (error.status === 404) {
        errorCode = `${error.status}`;
        errorMessage = `${error.message}`;
      } else {
        errorCode = `${error.status}`;
        errorMessage = `${error.error.message}`;
      }
    }

    return throwError(() => new Error(errorMessage));
  }
}
