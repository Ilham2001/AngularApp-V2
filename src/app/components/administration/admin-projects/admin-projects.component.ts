import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-admin-projects',
  templateUrl: './admin-projects.component.html',
  styleUrls: ['./admin-projects.component.css']
})
export class AdminProjectsComponent implements OnInit {

  projects:Array<Project>;

  project_id:number;

  constructor(private projectService:ProjectService, private modal: NzModalService, 
    private message: NzMessageService, private router:Router) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projectService.getData().subscribe((response: Array<Project>) => {
      this.projects= response;
   });
  }

  deleteProject(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    this.project_id = idAttr.nodeValue;
    
    //Confirm modal
    this.modal.confirm({
      nzTitle: 'Voulez-vous supprimer cet utilisteur ?',
      nzOkText: 'Supprimer',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () =>  this.projectService.deleteProject(this.project_id).subscribe(
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
