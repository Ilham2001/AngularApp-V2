import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  result: any;

  private subjectName = new Subject<any>(); //need to create a subject

  constructor(private httpClient: HttpClient) { }


  searchResult(data) {
    return this.httpClient.get('http://127.0.0.1:8000/api/project/search/' + data);
  }

  setSearchResult(data) {
    this.result = data;
  }

  getSearchResult() {
    return this.result;
  }

  sendUpdate(message: any) { //the component that wants to update something, calls this fn
    this.subjectName.next({ result: message }); //next() will feed the value in Subject
  }

  getUpdate(): Observable<any> { //the receiver component calls this function 
    return this.subjectName.asObservable(); //it returns as an observable to which the receiver funtion will subscribe
  }
}
