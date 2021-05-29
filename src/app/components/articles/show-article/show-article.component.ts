import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ArticleService } from 'src/app/services/article.service';
import { CategoryService } from 'src/app/services/category.service';
import {Location} from '@angular/common';
import { AccessModeService } from 'src/app/services/access-mode.service';

@Component({
  selector: 'app-show-article',
  templateUrl: './show-article.component.html',
  styleUrls: ['./show-article.component.css']
})
export class ShowArticleComponent implements OnInit {

  public article_id;
  public article;
  public category;
  userPermissions:any;
  hasAddArticle:boolean;
  hasUpdateArticle:boolean;
  hasDeleteArticle:boolean;

  constructor(private route:ActivatedRoute, private articleService:ArticleService,
     private categoryService:CategoryService, private modal: NzModalService, 
     private message: NzMessageService, private _location: Location,
     private accessService:AccessModeService) { }

  ngOnInit(): void {
    this.article_id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getArticle();
    this.hasAddArticlePermission();
    this.hasUpdateArticlePermission();
    this.hasDeleteArticlePermission();
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

  hasAddArticlePermission() {
    this.accessService.getUserPermissions().subscribe(
      response => {
        
        this.userPermissions = response;
        this.hasAddArticle = this.userPermissions.some(function(p)
          { return p.permission_code === 'CRA'});
      }
    )
  }

  hasUpdateArticlePermission() {
    this.accessService.getUserPermissions().subscribe(
      response => {
        
        this.userPermissions = response;
        this.hasUpdateArticle = this.userPermissions.some(function(p)
          { return p.permission_code === 'UPA'});
      }
    )
  }

  hasDeleteArticlePermission() {
    this.accessService.getUserPermissions().subscribe(
      response => {
        
        this.userPermissions = response;
        this.hasDeleteArticle = this.userPermissions.some(function(p)
          { return p.permission_code === 'DLA'});
      }
    )
  }
}
