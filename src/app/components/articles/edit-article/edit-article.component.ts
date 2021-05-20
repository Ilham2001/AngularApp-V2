import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  categories:any;
  selectedCategory:number;

  article = new Article();

  /*profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
   
  });*/


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
    /*this.articleService.storeData(this.article).subscribe(response => {
      console.log(response);
    })*/
  }
}
