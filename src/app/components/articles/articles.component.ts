import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/project';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  categories:any;

  @Input() project: Project;

  constructor(private categoryService:CategoryService, private router:Router) { }

  ngOnInit(): void {
    this.getCategoriesData();
  }

  getCategoriesData() {
    this.categoryService.getData().subscribe(response => {
       this.categories= response;
    });
  }

  onSelect(category) {
    this.router.navigate(['/show_category', category.id]);
  }

}
