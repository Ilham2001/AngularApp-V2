import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.css']
})
export class InformationsComponent implements OnInit {

  projects:Array<Project>;
  project: Project;
  project_id: number;
  
  selectedProject:number;

  editProject: FormGroup;

  constructor(private projectService:ProjectService,
    private formBuilder: FormBuilder,private router:Router,
    private route:ActivatedRoute, private message: NzMessageService) { }

  ngOnInit(): void {
    this.project_id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.initForm();
    this.getProject();
    this.getProjectsData();
  }

  onSubmit() {
    //this.project.parent_id = this.selectedProject;
    //console.log(this.project);
    
    this.projectService.updateData(this.project_id,this.editProject.value).subscribe(
      response => {
        this.router.navigate(['/show_project/'+this.project_id]);
        this.createMessage('success');
      }
    )
  }

  getProjectsData() {
    this.projectService.getData().subscribe((response: Array<Project>) => {
      this.projects = response;
   });
  }

  getProject() {
    this.projectService.getProject(this.project_id).subscribe(
      (response: Project) => {
        this.project = response;
        this.setFormValues();
      }
    )
  }

  initForm() {
    this.editProject = this.formBuilder.group({
      name: new FormControl(),
      description: new FormControl(),
      website: new FormControl(),
      isPublic: new FormControl(),
      parent_id: new FormControl(),
      landing_page: new FormControl()
    });
  }

  setFormValues() {
    this.editProject = this.formBuilder.group({
      name: (this.project.name),
      description: (this.project.description),
      website: (this.project.website),
      isPublic: (this.project.isPublic),
      parent_id: (this.project.parent_id),
      landing_page: (this.project.landing_page)
    });
  }

  createMessage(type: string): void {
    this.message.create(type, 'Informations du projet modifiées');
  }
}
