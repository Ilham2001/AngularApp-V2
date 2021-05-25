import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/services/role.service';
import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';


@Component({
  selector: 'app-admin-roles',
  templateUrl: './admin-roles.component.html',
  styleUrls: ['./admin-roles.component.css']
})
export class AdminRolesComponent implements OnInit {

  isVisible = false;
  roles:any; 
  role_id: number;
  role:any;

  constructor(private roleService:RoleService, private modal: NzModalService) { }

  ngOnInit(): void {
    this.getRolesData();
    
  }

  getRolesData() {
    this.roleService.getData().subscribe(response => {
      this.roles= response;
   });
  }

  deleteRole(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    this.role_id = idAttr.nodeValue;
    
    console.log(this.role_id);

    //Confirm modal
    this.modal.confirm({
      nzTitle: 'Voulez-vous supprimer ce rôle ?',
      nzOkText: 'Supprimer',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () =>  this.roleService.deleteRole(this.role_id).subscribe(
        response => {
          //console.log(response);
          window.location.reload(); //Refresh page
        }
      )
    }); 
  }

}
