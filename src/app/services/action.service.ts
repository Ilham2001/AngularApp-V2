import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(private httpClient:HttpClient) { }

  getActions() {
    return this.httpClient.get('http://127.0.0.1:8000/api/action');
  }
}
