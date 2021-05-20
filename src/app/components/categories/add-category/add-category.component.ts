import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { NzMessageService } from 'ng-zorro-antd/message';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category = new Category;
  categories:any;
  selectedCategory:number;

 // message:any;

  constructor(private categoryService:CategoryService, private message: NzMessageService) { }

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
        this.createMessage('success');
      }
    )
  }

  createMessage(type: string): void {
    this.message.create(type, 'Catégorie créée');
  }

}
