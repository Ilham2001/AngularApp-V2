import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  categories:any;

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategoriesData();
  }

  getCategoriesData() {
    this.categoryService.getData().subscribe(response => {
       this.categories= response;
    });
  }

}
