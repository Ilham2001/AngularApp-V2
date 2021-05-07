import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { CategoryService } from 'src/app/services/category.service';



@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  categories:any;
  selectedCategory:number;

  article = new Article();


  constructor(private articleService:ArticleService, private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
    
  }

  getCategories() {
    this.categoryService.getData().subscribe(response => {
      this.categories = response;
    })
  }

  onSubmit() {
    this.article.category_id = this.selectedCategory;
    this.articleService.storeData(this.article).subscribe(response => {
      console.log(response);
    })
  }

  selected() {
    //console.log(this.selectedCategory);
  }

}
