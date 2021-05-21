import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Project } from 'src/app/models/project';
import { WikiService } from 'src/app/services/wiki.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {

  @Input() project: Project;
  
  wiki_id: number;
  isVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  
}
