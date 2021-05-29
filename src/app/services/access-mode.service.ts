import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class AccessModeService {

  userId: number;
  userPermissions: any;

  constructor(private appService: AppService, private userService: UserService, private httpClient: HttpClient) { }

  setUserId() {
    this.userId = this.appService.getUserId();
  }

  getUserPermissions() {
    /*this.userId = this.appService.getUserId();
    this.userService.getUserPermissions(this.userId).subscribe(
      response => {
        this.userPermissions = response;
      }
    )*/

    this.userId = this.appService.getUserId();
    return this.httpClient.get('http://localhost:8000/api/user/getPermissions/' + this.userId);

  }
}
