import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  getData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/category');
  }

  storeData(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/category',data);
  }

  getCategory(id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/category/'+id);
  }

  getLengthOfArticles(id) {
    return this.httpClient.get('http://localhost:8000/api/category/length/'+id);
  }
}
