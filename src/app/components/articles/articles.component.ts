import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/project';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { AccessModeService } from 'src/app/services/access-mode.service';
import { UserService } from 'src/app/services/user.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  categories: any;
  selectedCategory: any;
  articles: any;
  hasAddArticle: boolean;
  hasAddCategory: boolean;
  userPermissions: any;
  userArticlesLength:number;

  @Input() project: Project;

  constructor(private categoryService: CategoryService, private articleService: ArticleService,
    private router: Router, private accessService: AccessModeService,
    private userService:UserService, private appSerivce:AppService) { }

  ngOnInit(): void {
    this.getCategoriesData();
    this.getArticlesData();
    this.hasAddArticlePermission();
    this.hasAddCategoryPermission();
    this.userCountArticles();
  }

  getCategoriesData() {
    this.categoryService.getData().subscribe(response => {
      this.categories = response;
    });
  }

  onSelect() {
    this.router.navigate(['/show_category', this.selectedCategory])
  }

  getArticlesData() {
    this.articleService.getData().subscribe(response => {
      this.articles = response;
    })
  }

  hasAddArticlePermission() {
    this.accessService.getUserPermissions().subscribe(
      response => {
        this.userPermissions = response;
        this.hasAddArticle = this.userPermissions.some(function (p) { return p.permission_code === 'CRA' });
      }
    )
  }

  hasAddCategoryPermission() {
    this.accessService.getUserPermissions().subscribe(
      response => {
        this.userPermissions = response;
        this.hasAddCategory = this.userPermissions.some(function (p) { return p.permission_code === 'CRC' });
      }
    )
  }

  userCountArticles() {
    this.userService.getUserNumberOfArticles(this.appSerivce.getUserId()).subscribe(
      (response:number) => {
        this.userArticlesLength = response;
        
      }
    )
  }

}
