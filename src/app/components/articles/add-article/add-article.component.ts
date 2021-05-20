import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  addArticle = this.fb.group({
    category: new FormControl(''),
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
  });

  constructor(private articleService:ArticleService, 
    private categoryService:CategoryService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getCategories();
    
  }

  getCategories() {
    this.categoryService.getData().subscribe(response => {
      this.categories = response;
    })
  }

  onSubmit() {
   // this.article.category_id = this.selectedCategory;
    //this.articleService.storeData(this.article).subscribe(response => {
      //console.log(response);
      console.log(this.addArticle.value);
    //})
  }

}
