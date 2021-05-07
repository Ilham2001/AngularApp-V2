import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css']
})
export class ShowCategoryComponent implements OnInit {

  public category_id;
  public category;
  children:Category[];

  constructor(private route:ActivatedRoute, private categoryService:CategoryService) { }

 
  ngOnInit(): void {
    this.category_id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getCategory();
  }

  getCategory() {
    this.categoryService.getCategory(this.category_id).subscribe(
      response => {
        this.children = this.category.children;
        console.log(this.children);
        this.category = response;
      }
    )
  }
}
