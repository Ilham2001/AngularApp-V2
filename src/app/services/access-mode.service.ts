import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AccessModeService {

  userId:number;
  userPermissions: any;

  constructor(private appService:AppService, private userService:UserService) { }

  getUserPermissions() {
      this.userId = this.appService.getAuthenticatedUser();
      this.userService.getUserPermissions(this.userId).subscribe(
        response => {
          this.userPermissions = response;
        }
      )
      return this.userPermissions;
  }

  hasConsultStatistics() : boolean {
    return;
  }
}
