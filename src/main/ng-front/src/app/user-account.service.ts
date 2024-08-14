import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
  
  constructor(private http: HttpClient) { }
  private springRestURL = 'https://spring-backend/api';  // URL to web api
  private posts: Array<Message> = [];

  getResponse(): Observable<any>{
    return this.http.get();
  }
}
