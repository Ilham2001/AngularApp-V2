import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  authenticatedUserId: number;
  user = new User;

  constructor(private userService:UserService) { }

  setAuthenticatedUser(id) {
    this.authenticatedUserId = id;
  }

  getAuthenticatedUser() {
    return this.authenticatedUserId;
  }

  getAuthenticatedUserPermissions() {
    this.userService.getUser(this.authenticatedUserId).subscribe(
      (response: User) => {
        this.user = response;
      }
    )
    return this.user;
  }

}
