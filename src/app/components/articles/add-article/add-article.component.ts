import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Article } from 'src/app/models/article';
import { AppService } from 'src/app/services/app.service';
import { ArticleService } from 'src/app/services/article.service';
import { CategoryService } from 'src/app/services/category.service';
import {Location} from '@angular/common';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  categories:any;
  selectedCategory:number;
  category_id;
  article = new Article();
  files:any;
  project_id:number;

  addArticle = this.fb.group({
    category_id: new FormControl(''),
    title: new FormControl(''),
    summary: new FormControl(''),
    environment: new FormControl(''),
    description: new FormControl(''),
    error_message: new FormControl(''),
    ticket_number: new FormControl(''),
    cause: new FormControl(''),
    resolution: new FormControl(''),
    keywords: new FormControl(''),
    workaround: new FormControl(''),
    reference: new FormControl(''),
    user_id: new FormControl(''),
    project_id: new FormControl('')
  });

  constructor(private articleService:ArticleService, 
    private categoryService:CategoryService, private _location: Location,
    private fb: FormBuilder, private appService:AppService, private message: NzMessageService,
    private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.project_id = parseInt(this.route.snapshot.paramMap.get('project_id'));
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getData().subscribe(response => {
      this.categories = response;
    })
  }

  uploadFile(event) {
    this.files = event.target.files[0];
  }


  onSubmit() {
    if(this.addArticle.valid) {
      const formData = new FormData();
      formData.append("category_id", this.addArticle.controls.category_id.value);
      formData.append("title", this.addArticle.controls.title.value);
      formData.append("summary", this.addArticle.controls.summary.value);
      formData.append("environment", this.addArticle.controls.environment.value);
      formData.append("description", this.addArticle.controls.description.value);
      formData.append("error_message", this.addArticle.controls.error_message.value);
      formData.append("ticket_number", this.addArticle.controls.ticket_number.value);
      formData.append("cause", this.addArticle.controls.cause.value);
      formData.append("resolution", this.addArticle.controls.resolution.value);
      formData.append("keywords", this.addArticle.controls.keywords.value);
      formData.append("workaround", this.addArticle.controls.workaround.value);
      /* if the file exists */
      if (this.files) {
        formData.append("reference",this.files, this.files.name);
      }

      this.addArticle.controls.user_id.setValue(this.appService.getUserId());
      formData.append("user_id",this.addArticle.controls.user_id.value);

      this.addArticle.controls.project_id.setValue(this.project_id);
      formData.append("project_id",this.addArticle.controls.project_id.value);

  
      this.articleService.storeData(formData).subscribe(
        response => {
          console.log(response);
          this._location.back();
          this.createMessage('success');
        }
      )
    }
    else {
      for (const i in this.addArticle.controls) {
        this.addArticle.controls[i].markAsDirty();
        this.addArticle.controls[i].updateValueAndValidity();
      }
    }

  }

  createMessage(type: string): void {
    this.message.create(type, 'Article créée');
  }

}
