import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.css']
})
export class InformationsComponent implements OnInit {

  projects:any;
  project = new Project();
  
  selectedProject:number;

  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
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
