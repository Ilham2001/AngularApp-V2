import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  constructor() { }

  addArticleForm = new FormGroup({
    articleCategory: new FormControl(''),
    articleTitle: new FormControl(''),
    articleSummary: new FormControl(''),
    articleEnvironment: new FormControl(''),
    articleDescription: new FormControl(''),
    articleErrorMessage: new FormControl(''),
    articleTicketNumber: new FormControl(''),
    articleCause: new FormControl(''),
    articleResolution: new FormControl(''),
    articleKeywords: new FormControl('')
  });

  ngOnInit(): void {
  }

  onSubmit() {
    
  }

}
