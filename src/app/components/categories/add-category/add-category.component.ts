import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category = new Category;
  categories:any;
  selectedCategory:number;

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getData().subscribe(response => {
      this.categories = response;
    });
  }

  onSubmit() {
    this.category.parent_id = this.selectedCategory;
    //console.log(this.category);
    this.categoryService.storeData(this.category).subscribe(
      response => {
        console.log(response);
      }
    )
  }

  selected() {
    //console.log(this.selectedCategory);
  }

}
