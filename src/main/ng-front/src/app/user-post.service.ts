import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Message } from './shared/message';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserPostService {
  private springRestURL = 'https://spring-backend/api';  // URL to web api
  private posts: Array<Message> = [];

  constructor(private http: HttpClient) { }

  getResponse(): Observable<any>{
    return this.http.get(this.springRestURL);
  }

  getPosts(): Observable<Message[]> {
    return this.http
      .get(this.springRestURL)
      .pipe(

        tap((post: any) => console.log(post)),

        map((responseJSON: { Items: any }) => {
          const data = responseJSON.Items;
          return data.splice(0, 100);
        }),

        map((list: Array<Message>) => {
          return list.map(it => {
            let post: Message = {
              author: it.author,
              timestamp: it.timestamp,
              content: it.content,
              origin: roles.Admin
            };
            return post;  // Corrected from 'onmessage' to 'post'
          });
        })
      );
  }
}
