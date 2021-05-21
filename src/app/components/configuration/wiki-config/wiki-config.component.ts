import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Project } from 'src/app/models/project';
import { WikiService } from 'src/app/services/wiki.service';

@Component({
  selector: 'app-wiki-config',
  templateUrl: './wiki-config.component.html',
  styleUrls: ['./wiki-config.component.css']
})
export class WikiConfigComponent implements OnInit {

  @Input() project: Project;

  wiki_id:number;

  constructor(private wikiService:WikiService, private modal: NzModalService, 
    private message: NzMessageService, private router:Router) { }

  ngOnInit(): void {
  }

  deleteWiki(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    this.wiki_id = idAttr.nodeValue;
    
    //Confirm modal
    this.modal.confirm({
      nzTitle: 'Voulez-vous supprimer cette page Wiki ?',
      nzOkText: 'Supprimer',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () =>  this.wikiService.deleteWiki(this.wiki_id).subscribe(
        response => {
        window.location.reload(); //Refresh page
        this.createMessage('success');
        }
      )
    }); 
  }

  createMessage(type: string): void {
    this.message.create(type, 'Page wiki supprimée');
  }

}
