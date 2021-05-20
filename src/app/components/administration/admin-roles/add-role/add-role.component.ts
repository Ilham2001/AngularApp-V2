import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Permission } from 'src/app/models/permission';
import { PermissionService } from 'src/app/services/permission.service';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  permissions:Array<Permission>;
  checked_permissions:any;

  addRole = this.fb.group({
    name: new FormControl('', Validators.required),
    permissions: new FormControl('')
  })

  constructor(private fb: FormBuilder, private permissionService:PermissionService, 
    private roleService:RoleService) { }

  ngOnInit(): void {
    this.getPermissions();
  }

  getPermissions() {
    this.permissionService.getData().subscribe((response: Array<Permission>) => {
      this.permissions = response;
      //console.log(this.permissions);
    })
  }

  onSubmit() {

    if(this.addRole.valid) {
      this.addRole.get('permissions').setValue(this.checked_permissions); 
      console.log(this.addRole.value);
      this.roleService.storeData(this.addRole.value).subscribe(response => {
        console.log(response);
      })
    }
    else {
      for (const i in this.addRole.controls) {
        this.addRole.controls[i].markAsDirty();
        this.addRole.controls[i].updateValueAndValidity();
      }
    }
  }

  getCheckedPermissions(value: string[]): void {
    this.checked_permissions = value;
    console.log(this.checked_permissions);
  }

}
