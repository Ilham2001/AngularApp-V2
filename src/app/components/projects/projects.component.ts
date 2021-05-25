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

  constructor(private projectService:ProjectService, private router:Router, private accessService:AccessModeService) { }

  ngOnInit(): void {
    this.getProjectsData();
    //this.getPermissions();
  }

  getProjectsData() {
    this.projectService.getData().subscribe(response => {
      this.projects= response;
   });
  }

  onSelect(project) {
    this.router.navigate(['/show_project', project.id]);
  }

  getPermissions() {
    this.permissions = this.accessService.getUserPermissions();
    console.log(this.permissions);
    //debounce._some(this.permissions)
    
  }

}
