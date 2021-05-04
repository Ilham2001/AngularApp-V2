import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  projects:any;
  project = new Project();
  
  selectedProject:number;
  
  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
    this.getProjectsData();
  }

  getProjectsData() {
    this.projectService.getData().subscribe(response => {
      this.projects= response;
   });
  }

  onSubmit() {
    this.project.parent_id = this.selectedProject;
    console.log(this.project);
    
    this.projectService.storeData(this.project).subscribe(
      response => {
        console.log(response);
      }
    )
  }

  selected() {
    console.log(this.selectedProject);
  }

}
