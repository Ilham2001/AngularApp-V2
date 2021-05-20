import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient:HttpClient) { }

  getData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/project');
  }

  storeData(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/project',data);
  }

  getProject(id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/project/'+id);
  }

  deleteProject(id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/project/'+id);
  }

  updateData(id,data) {
    return this.httpClient.put('http://127.0.0.1:8000/api/project/'+id,data);
  }

  deleteMember(project_id,member_id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/project/deleteMember/'+project_id+'/'+member_id);
  }

  addMember(project_id, member_id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/project/addMember/'+project_id+'/'+member_id);
  }
}
