import { Component, OnInit } from '@angular/core';
import { Action } from 'src/app/models/action';
import { User } from 'src/app/models/user';
import { AccessModeService } from 'src/app/services/access-mode.service';
import { ActionService } from 'src/app/services/action.service';
import { UserService } from 'src/app/services/user.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: Array<User>;
  actions: Array<Action>;
  userPermissions:any;

  hasConsultStatistics :boolean;
  constructor(private userService:UserService, private actionService:ActionService,
    private accessService:AccessModeService) { }

  ngOnInit(): void {
    this.getUsers();
    this.getActions();
    this.hasConsultStatisticsPermission();
    
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      (response: Array<User>) => {
        this.users = response;
        
      }
    )
  }

  getActions() {
    this.actionService.getActions().subscribe(
      (response: Array<Action>) => {
        this.actions = response;
      } 
    )
  }

  hasConsultStatisticsPermission() {
    this.accessService.getUserPermissions().subscribe(
      response => {
        this.userPermissions = response;
        this.hasConsultStatistics = this.userPermissions.some(function(p)
          { return p.permission_code === 'CST'});
      }
    )

  }
}
