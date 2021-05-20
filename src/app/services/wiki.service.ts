import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WikiService {

  constructor(private httpClient:HttpClient) { }

  storeData(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/wiki',data);
  }
}
