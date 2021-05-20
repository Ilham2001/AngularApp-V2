import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  users:Array<User>;

  user_id: number;

  constructor(private userService:UserService, private modal: NzModalService, 
    private message: NzMessageService, private router:Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((response: Array<User>) => {
      this.users = response;
    })
  }

  deleteUser(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    this.user_id = idAttr.nodeValue;
    
    //Confirm modal
    this.modal.confirm({
      nzTitle: 'Voulez-vous supprimer cet utilisteur ?',
      nzOkText: 'Supprimer',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () =>  this.userService.deleteUser(this.user_id).subscribe(
        response => {
        window.location.reload(); //Refresh page
        this.createMessage('success');
        }
      )
    }); 
  }

  createMessage(type: string): void {
    this.message.create(type, 'Utilisateur supprimé');
  }


}
