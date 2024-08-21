import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../environment/environment';
import { User } from './shared/user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }

  headers = new HttpHeaders()
  .set('content-type', 'application/json');
 

  signup(username: string, password: string): void {
    console.log("signup triggered");
    const url = `${environment.api_url}/auth/users/create/${username}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const body = { password: password };

    this.http.post<User>(url, body, { headers, observe: 'response' })
      .pipe(
        tap(response => {
          if (response.status === 200) {
            localStorage.setItem("accessorId", response.body?.accessorId ?? ""); 
            localStorage.setItem("entityId", response.body?.entityId ?? "");
            this.router.navigate(['/home']); // Redirect to home
          } else {
            console.log(response.body);
          }
        }),
        catchError(this.handleError('signup', false))
      )
      .subscribe(); // Ensure you subscribe to the observable
  }

  login(username: string, password: string): void {
    console.log("login triggered");
    const url = `${environment.api_url}/auth/users/${username}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const body = { password: password };

    this.http.post<User>(url, body, { headers, observe: 'response' })
      .pipe(
        tap(response => {
          if (response.status === 200) {
            localStorage.setItem("accesorId", response.body?.accessorId ?? ""); 
            localStorage.setItem("entityId", response.body?.entityId ?? "");
          } else {
            console.log(response.body);
            console.log();
          }
        }),
        catchError(this.handleError('signup', false))
      )
      .subscribe(); // Ensure you subscribe to the observable
  }

  logout(): void {
    localStorage.removeItem("accesorId")
    localStorage.removeItem('entityId');
    this.router.navigate([this.router.url])
    .then(() => {
      window.location.reload();
    });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('entityId');
  }

  getToken(): string | null {
    return localStorage.getItem('entityId');
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // Log the error to the console
      return of(result as T); // Keep the app running by returning a safe result
    };
  }
}
