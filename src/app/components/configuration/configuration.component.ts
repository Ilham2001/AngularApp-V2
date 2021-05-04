import { Component, OnInit } from '@angular/core';

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

  

  constructor() { }

  ngOnInit(): void {
  }


}
