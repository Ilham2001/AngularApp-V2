import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private httpClient:HttpClient) { }

  uploadFile(data) {
    return this.httpClient.post('http://localhost:8000/api/document/',data);
  }
}
