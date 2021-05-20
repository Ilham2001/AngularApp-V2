import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Role } from 'src/app/models/role';
import { RoleService } from 'src/app/services/role.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  roles:Array<Role>;

  addUser = this.fb.group({
    first_name: new FormControl('',Validators.required),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    role_id: new FormControl('', Validators.required),
    landing_page: new FormControl('')

  })

  constructor(private fb: FormBuilder, private roleService:RoleService, 
    private userService:UserService, private message: NzMessageService, private router:Router) {

  }

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles() {
    this.roleService.getData().subscribe((response: Array<Role>) => {
      this.roles = response;
    })
  }

  onSubmit() {
    if (this.addUser.valid) {
      
      this.userService.storeUser(this.addUser.value).subscribe(response => {
        this.router.navigate(['/administration']);
        this.createMessage('success');
      })

    }
    else {
      for (const i in this.addUser.controls) {
        this.addUser.controls[i].markAsDirty();
        this.addUser.controls[i].updateValueAndValidity();
      }
    }
    
  }

  createMessage(type: string): void {
    this.message.create(type, 'Utilisateur crée');
  }

}
