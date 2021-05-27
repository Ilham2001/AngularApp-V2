import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {


  private subscriptionName: Subscription;

  searchResult: any;

  constructor(private route: ActivatedRoute, private searchService: SearchService) {
    
    this.subscriptionName = this.searchService.getUpdate().subscribe
      ((response): any => {
        this.searchResult = response.result;
        console.log(this.searchResult);

      });
  }

  ngOnInit(): void {
    this.searchResult = this.searchService.getSearchResult();
    console.log(this.searchResult);

  }

  ngOnDestroy() {
    this.subscriptionName.unsubscribe();
  }

}
