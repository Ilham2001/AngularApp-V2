import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private httpClient:HttpClient) { }

  getData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/role');
  }

  getRole(id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/role/'+id);
  }

  deleteRole(id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/role/'+id);
  }

  storeData(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/role',data);
  }
}
