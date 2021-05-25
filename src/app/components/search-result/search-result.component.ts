import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(private route:ActivatedRoute, private searchService:SearchService) { }

  searchResult:any;

  ngOnInit(): void {
    this.searchResult = this.searchService.getSearchResult();
    
    //window.location.reload(); //Navigate and refresh page
    console.log(this.searchResult);
     
  }

}
