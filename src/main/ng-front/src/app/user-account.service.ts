import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './shared/user';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
  
  constructor(private http: HttpClient) { }
  private springRestURL = 'https://spring-backend/api';  // URL to web api
  private user: User;

  getResponse(): Observable<any>{
    return this.http.get();
  }
}
