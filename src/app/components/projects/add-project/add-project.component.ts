import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Project } from 'src/app/models/project';
import { AppService } from 'src/app/services/app.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  projects: Array<Project>;
  project = new Project();

  authenticatedUserId:number;
  
  selectedProject:number;

  addProject = this.fb.group({
    name: new FormControl('', Validators.required),
    description: new FormControl(''),
    website: new FormControl(''),
    isPublic: new FormControl(''),
    project: new FormControl(''),
    landing_page: new FormControl(''),
    user_id: new FormControl('')
  })
  
  constructor(private projectService:ProjectService, private fb: FormBuilder,
      private appService:AppService, private router:Router,
      private message: NzMessageService) { }

  ngOnInit(): void {
    this.getProjectsData();
  }

  getProjectsData() {
    this.projectService.getData().subscribe((response: Array<Project>) => {
      this.projects= response;
   });
  }

  onSubmit() {
    if (this.addProject.valid) {
      /* Get the ID of the authenticated User and set it to the form => to set the user_id which means the user that has created the project */
      this.addProject.controls.user_id.setValue(this.appService.getAuthenticatedUser());
      
      console.log(this.addProject.value);

      this.projectService.storeData(this.addProject.value).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/projects'])
          .then(() => {
            window.location.reload()
          })
          .then(() => {
            this.createMessage('success');
          });
        }
      )
    }
    else {
      for (const i in this.addProject.controls) {
        this.addProject.controls[i].markAsDirty();
        this.addProject.controls[i].updateValueAndValidity();
      }
    }
    
  }

  createMessage(type: string): void {
    this.message.create(type, 'Projet créée');
  }

}
