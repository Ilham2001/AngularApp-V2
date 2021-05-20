import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Project } from 'src/app/models/project';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';
import { ProjectService } from 'src/app/services/project.service';
import { RoleService } from 'src/app/services/role.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  roles:Array<Role>;
  user = new User;
  user_id: number;

  editUser: FormGroup;

  constructor(private fb: FormBuilder, private roleService:RoleService, 
    private userService:UserService, private message: NzMessageService, 
    private router:Router, private route:ActivatedRoute,
    private projectService:ProjectService ) { }

  ngOnInit(): void {
    this.user_id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.initForm();
    this.getRoles();
    this.getUser();
  }

  getRoles() {
    this.roleService.getData().subscribe((response: Array<Role>) => {
      this.roles = response;
    });
  }

  getUser() {
    this.userService.getUser(this.user_id).subscribe(
      (response: User) => {
        this.user = response;
        this.setFormValues();
      }
    )
  }

  onSubmit() {
    if (this.editUser.valid) {
      
     // console.log(this.editUser.value);
      
      this.userService.updateUser(this.user_id, this.editUser.value).subscribe(
        response => {
          this.router.navigate(['/administration']);
          this.createMessage('success');
          //console.log(response);
          
      })
    }
    else {
      for (const i in this.editUser.controls) {
        this.editUser.controls[i].markAsDirty();
        this.editUser.controls[i].updateValueAndValidity();
      }
    }
    
  }

  createMessage(type: string): void {
    this.message.create(type, 'Utilisateur crée');
  }

  initForm() {
    this.editUser = this.fb.group({
      first_name: new FormControl('',Validators.required),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      role_id: new FormControl('', Validators.required),
      landing_page: new FormControl('')
  
    });
  }

  setFormValues() {
    this.editUser = this.fb.group({
      first_name: (this.user.first_name),
      last_name: (this.user.last_name),
      email: (this.user.email),
      password: (this.user.password),
      role_id: (this.user.role_id),
      landing_page: (this.user.landing_page)
    })
  }

}
