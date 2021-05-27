import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  authenticatedUserId: number;
  data:any;
  token :any;
  userData:any;


  constructor() { }

  getUserId() {
    this.token = localStorage.getItem('token');
    this.userData = jwt_decode(this.token);
    this.authenticatedUserId = this.userData.id;
    return this.authenticatedUserId;
  }
  
  setAuthenticatedUser(id) {
    this.authenticatedUserId = id;
  }

  getAuthenticatedUser() {
    return this.authenticatedUserId;
  }


}
