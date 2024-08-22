import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, tap } from 'rxjs';
import { User } from './common/user';
import { UserPost } from './common/user-post';
import { environment } from '../environment/environment';
import { PostSubmission } from './common/post-submission';


@Injectable({
  providedIn: 'root'
})
export class UserPostService {

  constructor(private http: HttpClient) { }

  submitPost(title: string, content: string): Observable<number> {
    console.log("user post triggered");
    console.log(localStorage.getItem("entityId"));
    const url = `${environment.api_url}/content/users/post`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const body = new PostSubmission(title, content);

    return this.http.post(url, body, { headers, observe: 'response' })
    .pipe(
      tap(response => {
        if (response.status === 200) {
          console.log("post successful");
        } else {
          console.log("post failed");
        }
      }),
      map(response => response.status)
    ); // Ensure you subscribe to the observable
  }

  getPosts(): Observable<UserPost[]> {
    console.log("user post triggered");
    const url = `${environment.api_url}/content/users/post/all`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get(url, { headers, observe: 'response' })
    .pipe(
      tap(response => {
        if (response.status === 200) {
          console.log(response.body);
        } else {
          console.log("post failed");
          console.log(response.body);
          console.log(response);
        }
      }),
      map(response => response.body as UserPost[]) // Map the response body to Post[]
    ); // Ensure you subscribe to the observable
  }

}
