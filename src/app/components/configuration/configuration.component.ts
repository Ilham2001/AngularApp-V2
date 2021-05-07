import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styles: [
    `
      [nz-menu] {
        width: 240px;
      }
    `
  ]
})
export class ConfigurationComponent implements OnInit {

  @Input() project: Project;
  
  constructor() { }

  ngOnInit(): void {
  }


}
