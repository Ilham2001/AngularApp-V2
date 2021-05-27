import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { User } from 'src/app/models/user';
import { AppService } from 'src/app/services/app.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  authenticatedUser = new User;
  user_id:number;
  userForm: FormGroup;
  isVisible = false;

  constructor(private appService:AppService, private userService:UserService,
    private fb:FormBuilder, private message: NzMessageService) { }

  ngOnInit(): void {
    this.initUserForm();
    this.getAuthenticatedUser();
  }

  getAuthenticatedUser() {
    this.user_id = this.appService.getUserId();
    //console.log(this.user_id);
    
    this.userService.getUser(this.user_id).subscribe(
      (response: User) => {
        this.authenticatedUser = response;
        this.setUserFormValues();
      });
  }

  initUserForm() {
    this.userForm = this.fb.group({
      first_name: new FormControl('',Validators.required),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      landing_page: new FormControl(''),
      role_id: new FormControl('')
    })
    
  }

  setUserFormValues() {
    this.userForm = this.fb.group({
      first_name: (this.authenticatedUser.first_name),
      last_name: (this.authenticatedUser.last_name),
      email: (this.authenticatedUser.email),
      landing_page: (this.authenticatedUser.landing_page),
      role_id: (this.authenticatedUser.role_id)
    })
  }

  onSubmit() {
    if(this.userForm.valid) {
        console.log(this.userForm.value);
        this.userService.updateUser(this.user_id, this.userForm.value).subscribe(
          response => {
            window.location.reload();
            this.createMessage('success');
          }
        )
    }
    else {
      for (const i in this.userForm.controls) {
        this.userForm.controls[i].markAsDirty();
        this.userForm.controls[i].updateValueAndValidity();
      }
    }
    
  }

  createMessage(type: string): void {
    this.message.create(type, 'Utilisateur crée');
  }

 
 
}