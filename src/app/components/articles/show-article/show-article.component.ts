import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ArticleService } from 'src/app/services/article.service';
import { CategoryService } from 'src/app/services/category.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-show-article',
  templateUrl: './show-article.component.html',
  styleUrls: ['./show-article.component.css']
})
export class ShowArticleComponent implements OnInit {

  public article_id;
  public article;
  public category;

  constructor(private route:ActivatedRoute, private articleService:ArticleService,
     private categoryService:CategoryService, private modal: NzModalService, 
     private message: NzMessageService, private _location: Location) { }

  ngOnInit(): void {
    this.article_id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getArticle();
  }

  getArticle() {
    this.articleService.getArticle(this.article_id).subscribe(
      response => {
        this.article = response;
        this.getCategory();
        //console.log(this.article.category_id);
      }
    )
  }

  getCategory() {
    this.categoryService.getCategory(this.article.category_id).subscribe(
      response => {
        this.category = response;
      }
    )
  }

  deleteArticle() {
     //Confirm modal
     this.modal.confirm({
      nzTitle: 'Voulez-vous supprimer cet article ?',
      nzOkText: 'Supprimer',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () =>  this.articleService.deleteArticle(this.article_id).subscribe(
        response => {
          this._location.back();
          this.createMessage('success');
        }
      )
    }); 
  }

  createMessage(type: string): void {
    this.message.create(type, 'Article supprimé');
  }

}
