import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/project';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  categories:any;
  selectedCategory:any;
  articles:any;

  @Input() project: Project;

  constructor(private categoryService:CategoryService, private articleService:ArticleService, 
    private router:Router) { }

  ngOnInit(): void {
    this.getCategoriesData();
    this.getArticlesData();
  }

  getCategoriesData() {
    this.categoryService.getData().subscribe(response => {
       this.categories= response;
    });
  }

  onSelect() {
    console.log(this.selectedCategory);

    this.router.navigate(['/show_category', this.selectedCategory])
      /*.then(() => {
        window.location.reload(); //Navigate and refresh page
      });*/
  }

  getArticlesData() {
    this.articleService.getData().subscribe(response => {
      this.articles = response;
    })
  }



}
