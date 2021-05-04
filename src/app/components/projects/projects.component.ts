import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects:any;

  constructor(private projectService:ProjectService, private router:Router) { }

  ngOnInit(): void {
    this.getProjectsData();
  }

  getProjectsData() {
    this.projectService.getData().subscribe(response => {
      this.projects= response;
   });
  }

  onSelect(project) {
    this.router.navigate(['/show_project', project.id]);
  }


}
