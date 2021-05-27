import { Component, OnInit } from '@angular/core';
import { Action } from 'src/app/models/action';
import { User } from 'src/app/models/user';
import { ActionService } from 'src/app/services/action.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: Array<User>;
  actions: Array<Action>;
  constructor(private userService:UserService, private actionService:ActionService) { }

  ngOnInit(): void {
    this.getUsers();
    this.getActions();
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
        console.log(this.actions);  
      } 
    )
  }

}
