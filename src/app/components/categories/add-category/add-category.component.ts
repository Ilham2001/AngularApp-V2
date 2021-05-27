import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category = new Category;
  categories: Array<Category>;
  project_id:number;
  project = new Project;

  addCategory = this.fb.group({
    title: new FormControl('', Validators.required),
    parent_id: new FormControl(''),
    description: new FormControl(''),
    project_id: new FormControl('')
  })

  constructor(private categoryService:CategoryService,private route:ActivatedRoute,
    private message: NzMessageService, private fb: FormBuilder,
    private projectService:ProjectService, private router:Router) { }

  ngOnInit(): void {
    this.project_id = parseInt(this.route.snapshot.paramMap.get('project_id'));
    this.getCategories();
    this.getProject();
  }

  getCategories() {
    this.categoryService.getData().subscribe(
      (response: Array<Category>) => {
      this.categories = response;
      
    });
  }

  getProject() {    
    this.projectService.getProject(this.project_id).subscribe(
      (response: Project) => {
        this.project = response;
      }
    )
  }

  onSubmit() {
    if(this.addCategory.valid) {
      this.addCategory.controls.project_id.setValue(this.project_id);
      this.categoryService.storeData(this.addCategory.value).subscribe(
        response => {
          //console.log(response);
          this.router.navigate(['/show_project/'+this.project_id]);
          this.createMessage('success');
        }
      )
    }
    else {
      for (const i in this.addCategory.controls) {
        this.addCategory.controls[i].markAsDirty();
        this.addCategory.controls[i].updateValueAndValidity();
      }
    }
  }

  createMessage(type: string): void {
    this.message.create(type, 'Catégorie créée');
  }

}
