import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Wiki } from 'src/app/models/wiki';
import { AppService } from 'src/app/services/app.service';
import { DocumentService } from 'src/app/services/document.service';
import { WikiService } from 'src/app/services/wiki.service';

@Component({
  selector: 'app-add-wiki',
  templateUrl: './add-wiki.component.html',
  styleUrls: ['./add-wiki.component.css']
})
export class AddWikiComponent implements OnInit {

  public project_id;
  wiki = new Wiki;
  files: any;

  addWiki = this.fb.group({
    title: new FormControl('', Validators.required),
    content: new FormControl(''),
    reference: new FormControl(''),
    project_id: new FormControl(''),
    user_id: new FormControl('')
  });


  constructor(private route: ActivatedRoute, private wikiService: WikiService,
    private fb: FormBuilder, private documentService: DocumentService, private appService: AppService) { }

  ngOnInit(): void {
    this.project_id = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  uploadFile(event) {
    this.files = event.target.files[0];
  }

  onSubmit() {
    this.addWiki.controls.project_id.setValue(this.project_id);
    const formData = new FormData();
    formData.append("title", this.addWiki.controls.title.value);
    formData.append("content", this.addWiki.controls.content.value);
    /* if the file exists */
    if (this.files) {
      formData.append("reference", this.files, this.files.name);
    }
    formData.append("project_id", this.project_id);
    this.addWiki.controls.user_id.setValue(this.appService.getUserId());
    formData.append("user_id", this.addWiki.controls.user_id.value);

    this.wikiService.storeData(formData).subscribe(
      response => {
        console.log(response);
      }
    )

  }


}
