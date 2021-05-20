import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  authenticatedUserId: number;

  constructor() { }

  setAuthenticatedUser(id) {
    this.authenticatedUserId = id;
  }

  getAuthenticatedUser() {
    return this.authenticatedUserId;
  }

}
