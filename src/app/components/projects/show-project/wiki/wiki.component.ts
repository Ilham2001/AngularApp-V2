import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Project } from 'src/app/models/project';
import { AccessModeService } from 'src/app/services/access-mode.service';
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
  hasAddWiki:boolean;
  userPermissions:any;

  constructor(private accessService:AccessModeService) { }

  ngOnInit(): void {
    this.hasAddWikiPermission();
    this.hasUpdateWikiPermission();
  }

  hasAddWikiPermission() {
    this.accessService.getUserPermissions().subscribe(
      response => {
        
        this.userPermissions = response;
        this.hasAddWiki = this.userPermissions.some(function(p)
          { return p.permission_code === 'CRW'});
      }
    )
  }

  hasUpdateWikiPermission() {
    this.accessService.getUserPermissions().subscribe(
      response => {
        
        this.userPermissions = response;
        this.hasAddWiki = this.userPermissions.some(function(p)
          { return p.permission_code === 'UPW'});
      }
    )
  }


  
}
