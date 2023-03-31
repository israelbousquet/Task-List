import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  set(key: string, data: any) {
    window.localStorage.setItem(key, JSON.stringify(data));
  }

  get(key: string) {
    return JSON.parse(window.localStorage.getItem(key) || '[]');
  }
}
