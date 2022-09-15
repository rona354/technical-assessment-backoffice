import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  setToken(token: string) {
    sessionStorage.setItem('token', JSON.stringify(token));
  }

  getToken() {
    if (sessionStorage.getItem('token')) {
      return JSON.parse(sessionStorage.getItem('token') ?? '');
    } else {
      return null;
    }
  }

  clearToken() {
    sessionStorage.clear();
  }
}
