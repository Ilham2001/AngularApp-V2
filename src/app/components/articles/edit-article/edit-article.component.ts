import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Article } from 'src/app/models/article';
import { AppService } from 'src/app/services/app.service';
import { ArticleService } from 'src/app/services/article.service';
import { CategoryService } from 'src/app/services/category.service';
import {Location} from '@angular/common';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  categories:any;
  selectedCategory:number;
  category_id;
  article_id:number;
  article = new Article;
  files:any;
  editArticle: FormGroup;
  

  constructor(private articleService:ArticleService, 
    private categoryService:CategoryService, private _location: Location,
    private fb: FormBuilder, private appService:AppService, private message: NzMessageService,
    private route:ActivatedRoute, private msg: NzMessageService ) { }

  ngOnInit(): void {
    this.article_id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getCategories();
    this.initForm();
    this.getArticle();
  }

  getCategories() {
    this.categoryService.getData().subscribe(response => {
      this.categories = response;
    })
  }

  getArticle() {
    this.articleService.getArticle(this.article_id).subscribe(
      (response: Article) => {
        this.article = response;
        this.setFormValues();
      }
    )
  }


  onSubmit() {
    if(this.editArticle.valid) {

      this.editArticle.controls.user_id.setValue(this.appService.getAuthenticatedUser());
  
      this.articleService.updateArticle(this.article_id,this.editArticle.value).subscribe(
        response => {
          console.log(response);
          this._location.back();
          this.createMessage('success');
        }
      )
    }
    else {
      for (const i in this.editArticle.controls) {
        this.editArticle.controls[i].markAsDirty();
        this.editArticle.controls[i].updateValueAndValidity();
      }
    }

  }

  createMessage(type: string): void {
    this.message.create(type, 'Article modifié');
  }

  initForm() {
    this.editArticle = this.fb.group({
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
      user_id: new FormControl('')
    });
  }

  setFormValues() {
    this.editArticle = this.fb.group({
      category_id: (this.article.category_id),
      title: (this.article.title),
      summary: (this.article.summary),
      environment: (this.article.environment),
      description: (this.article.description),
      error_message: (this.article.error_message),
      ticket_number: (this.article.ticket_number),
      cause: (this.article.cause),
      resolution: (this.article.resolution),
      keywords: (this.article.keywords),
      workaround: (this.article.workaround),
      user_id: (this.article.user_id),
    });
  }

}
