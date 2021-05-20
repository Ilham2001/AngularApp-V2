import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-show-project',
  templateUrl: './show-project.component.html',
  styleUrls: ['./show-project.component.css']
})
export class ShowProjectComponent implements OnInit {

  public project_id;
  public project;
  
  constructor(private route:ActivatedRoute, private projectService:ProjectService) { }

  ngOnInit(): void {
    //Get id from URL
    this.project_id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getProject();

  }

  getProject() {
    this.projectService.getProject(this.project_id).subscribe(
      response => {
        this.project = response;
        //console.log(this.project);
      }
    )
  }

}
