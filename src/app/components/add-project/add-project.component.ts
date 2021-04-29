import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  constructor() { }

  addProjectForm = new FormGroup({
    projectName: new FormControl('', Validators.required),
    projectDescription: new FormControl(''),
    projectWebsite: new FormControl(''),
    projectIsPublic: new FormControl(''),
    projectSubproject: new FormControl(''),
    projectMembers: new FormControl(''),
    projectLandingPage: new FormControl('')
  });

  ngOnInit(): void {
  }

  onSubmit() {
    //TODO when form is submitted
  }

}
