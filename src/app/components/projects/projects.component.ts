import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Router } from '@angular/router';
import { AccessModeService } from 'src/app/services/access-mode.service';
import { debounce } from 'lodash';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects:any;
  permissions:any;
  hasAddProject:boolean;
  hasConsultProjects:boolean;
  userPermissions:any;

  constructor(private projectService:ProjectService, private router:Router, private accessService:AccessModeService) { }

  ngOnInit(): void {
    this.getProjectsData();
    this.hasAddProjectPermission();
  }

  getProjectsData() {
    this.projectService.getData().subscribe(response => {
      this.projects= response;
   });
  }

  onSelect(project) {
    this.router.navigate(['/show_project', project.id]);
  }

  hasAddProjectPermission() {
    this.accessService.getUserPermissions().subscribe(
      response => {
        this.userPermissions = response;
        this.hasAddProject = this.userPermissions.some(function(p)
          { return p.permission_code === 'CRP'});
      }
    )

  }

}
