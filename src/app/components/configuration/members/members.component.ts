import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Project } from 'src/app/models/project';
import { User } from 'src/app/models/user';
import { ProjectService } from 'src/app/services/project.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  
  @Input() project: Project;

  users: Array<User>;
  member_id:number;
  isVisible = false;

  addMember = this.fb.group({
    member: new FormControl('')
  })
  
  constructor(private projectService:ProjectService,private modal: NzModalService, 
    private message: NzMessageService, private router:Router,
    private fb: FormBuilder, private userService:UserService) { }

  
  ngOnInit(): void {
    this.getUsers();
  }

  deleteUser(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    this.member_id = idAttr.nodeValue;
    
    //Confirm modal
    this.modal.confirm({
      nzTitle: 'Voulez-vous supprimer cet utilisteur ?',
      nzOkText: 'Supprimer',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () =>  this.projectService.deleteMember(this.project.id,this.member_id).subscribe(
        response => {
        window.location.reload(); //Refresh page
        this.createMessage('success');
        }
      )
    }); 
  }

  createMessage(type: string): void {
    this.message.create(type, 'Membre supprimé');
  }

  showModal(): void {
    this.isVisible = true;
  }

  //Add new member to this.project
  handleOk(): void {
    //console.log(this.addMember.controls.member.value);
    this.isVisible = false;

    this.projectService.addMember(this.project.id, this.addMember.controls.member.value).subscribe(response => {
      console.log(response);
      this.router.navigate(['/show_project', this.project.id])
      .then(() => {
        window.location.reload()
      })
      .then(() => {
        this.createMessage_member('success');
      });
    })
  }

  handleCancel(): void {
    //console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  createMessage_member(type: string): void {
    this.message.create(type, 'Utilisateur crée');
  }


  
  getUsers() {
    this.userService.getUsers().subscribe((response: Array<User>) => {
      this.users= response;
      //console.log(this.users);
   });
  }

}
