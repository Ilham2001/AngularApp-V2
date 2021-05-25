import { Injectable } from '@angular/core';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class AccessModeService {

  userPermissions;

  constructor(private appService:AppService) { }

  getUserPermissions() {
     this.userPermissions = this.appService.getAuthenticatedUserPermissions();
  }

  hasConsultStatistics() : boolean {
    return;
  }
}
