import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  result:any;

  constructor(private httpClient:HttpClient) { }


  searchResult(data) {
    return this.httpClient.get('http://127.0.0.1:8000/api/project/search/'+data);
  }

  setSearchResult(data) {
    this.result = data;
  }

  getSearchResult() {
    return this.result;
  }
}
