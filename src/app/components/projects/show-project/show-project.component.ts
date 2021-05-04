import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-project',
  templateUrl: './show-project.component.html',
  styleUrls: ['./show-project.component.css']
})
export class ShowProjectComponent implements OnInit {

  public project_id;
  
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    //Get id from URL
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.project_id = id;
  }

}
