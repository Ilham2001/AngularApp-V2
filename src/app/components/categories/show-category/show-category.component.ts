import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  public lengthOfArticles;
  categories:any;
  public selectedCategory;
  public selectedChild;

  constructor(private route:ActivatedRoute, private categoryService:CategoryService, private router:Router) { }

 
  ngOnInit(): void {
    this.category_id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getCategory();
    this.getLengthOfArticles();
    this.getCategoriesData();
   
  }

  getCategory() {
    this.categoryService.getCategory(this.category_id).subscribe(
      response => {
        this.category = response;
        console.log(this.category);
        //console.log(this.category.children.length);
        
        
      }
    )
  }

  getCategoriesData() {
    this.categoryService.getData().subscribe(response => {
      this.categories= response;
      //console.log(this.categories);
    });
  }


  //Get length of category's articles
  getLengthOfArticles() {
      this.categoryService.getLengthOfArticles(this.category_id).subscribe(response => {
        this.lengthOfArticles = response;
      })
  }

  onSelect() {
    this.router.navigate(['/show_category', this.selectedCategory])
      .then(() => {
        window.location.reload(); //Navigate and refresh page
      });
  }

  selectChild(child) {
    console.log(child);
    this.router.navigate(['/show_category', child])
      .then(() => {
        window.location.reload(); //Navigate and refresh page
      });
  }
}
