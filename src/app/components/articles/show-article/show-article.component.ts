import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { CategoryService } from 'src/app/services/category.service';

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
     private categoryService:CategoryService) { }

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

}
