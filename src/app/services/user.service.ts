import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  login(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/login',data);
  }

  getUsers() {
    return this.httpClient.get('http://127.0.0.1:8000/api/user');
  }

  storeUser(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/user',data);
  }

  deleteUser(id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/user/'+id);
  }

  getUser(id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/user/'+id);
  }

  updateUser(id,data) {
    return this.httpClient.put('http://127.0.0.1:8000/api/user/'+id,data);
  }
  
}
