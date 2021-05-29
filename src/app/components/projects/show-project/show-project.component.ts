import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { AccessModeService } from 'src/app/services/access-mode.service';

@Component({
  selector: 'app-show-project',
  templateUrl: './show-project.component.html',
  styleUrls: ['./show-project.component.css']
})
export class ShowProjectComponent implements OnInit {

  public project_id;
  public project;
  userPermissions:any;
  hasConfig:boolean;
  
  constructor(private route:ActivatedRoute, private projectService:ProjectService,
    private accessService:AccessModeService) { }

  ngOnInit(): void {
    //Get id from URL
    this.project_id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getProject();
    this.hasConfigPermission();

  }

  getProject() {
    this.projectService.getProject(this.project_id).subscribe(
      response => {
        this.project = response;
        //console.log(this.project);
      }
    )
  }

  hasConfigPermission() {
    this.accessService.getUserPermissions().subscribe(
      response => {
        this.userPermissions = response;
        this.hasConfig = this.userPermissions.some(function(p)
          { return p.permission_code === 'CFP'});
      }
    )
  }

}
