import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from './shared/Message';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserPostService {
  private springRestURL = 'https://spring-backend/api/media-feed';  // URL to web api
  private posts: Array<Post> = [];

  constructor(private http: HttpClient) { }

  getResponse(): Observable<any>{
    return this.http.get(this.springRestURL);
  }

  getPosts(): Observable<[]> {
    return this.http
      .get(this.springRestURL)
      .pipe(
        tap(post => console.log(post)),
        map((responseJSON: { Items: any }) => {
          const data = responseJSON.Items;
          return data.splice(0, 100);
        }),
        map((list: Array<Post>) => {
          return list.map(it => {
            let post: Post = {
              Author: it.Author,
              Date: it.Date,
              Message: it.Message
            };
            return post;  // Corrected from 'onmessage' to 'post'
          });
        })
      );
  }
}
