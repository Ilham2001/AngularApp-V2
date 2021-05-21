import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Wiki } from 'src/app/models/wiki';
import { WikiService } from 'src/app/services/wiki.service';

@Component({
  selector: 'app-edit-wiki',
  templateUrl: './edit-wiki.component.html',
  styleUrls: ['./edit-wiki.component.css']
})
export class EditWikiComponent implements OnInit {

  wiki_id:number;
  project_id:number;
  editWiki: FormGroup;
  wiki = new Wiki;

  
  constructor(private wikiService:WikiService, private route:ActivatedRoute,
    private fb: FormBuilder, private router:Router, private message: NzMessageService) { }

  ngOnInit(): void {
    this.wiki_id = parseInt(this.route.snapshot.paramMap.get('wiki_id'));
    this.project_id = parseInt(this.route.snapshot.paramMap.get('project_id'));
    this.getWiki();
    
    this.initForm();
    
  }

  initForm() {
    this.editWiki = this.fb.group({
      title: new FormControl('',Validators.required),
      content: new FormControl('', Validators.required),
      reference: new FormControl('', [Validators.required, Validators.email]),
      project_id: new FormControl('', Validators.required),
    
  
    });
  }
  
  getWiki() {
    this.wikiService.getWiki(this.wiki_id).subscribe(
      (response: Wiki) => {
        this.wiki = response;
        this.setFormValues();
      }
    )
  }

  setFormValues() {

    this.editWiki = this.fb.group({
      title: (this.wiki.title),
      content: (this.wiki.content)
    });
  }


  onSubmit() {
    if(this.editWiki.valid) {

      this.wikiService.updateWiki(this.wiki_id, this.editWiki.value).subscribe(
        response => {
          this.router.navigate(['/show_project/'+this.project_id]);
          this.createMessage('success');
        }
      )
    }
    else {
      for (const i in this.editWiki.controls) {
        this.editWiki.controls[i].markAsDirty();
        this.editWiki.controls[i].updateValueAndValidity();
      }
    }
  }

  createMessage(type: string): void {
    this.message.create(type, 'Page wiki modifiée');
  }
}
