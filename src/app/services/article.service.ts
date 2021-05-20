import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient:HttpClient) { }

  getData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/article');
  }

  storeData(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/article',data);
  }

  getArticle(id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/article/'+id);
  }
}
