import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../environment/environment';
import { User } from './shared/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  private apiUrl = 'https://localhost:8200'; // Your API URL

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<HttpResponse<User>>(
      environment.vault_url + '/auth/userpass/login/' + username, 
      {password}
    ).pipe(
        tap(response => {
          if (response.status === 200) {
            console.log("login successful");
            localStorage.setItem('authToken', response.headers.get('X-Vault-Token') || '');
            return true;
          } else {
            console.log("login failed");
            return false;
          }
        }),
        catchError(this.handleError<boolean>('login', false))
      );
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  signup(): Observable<any> {
    return this.http.post(this.apiUrl + '/signup', User)
      .pipe(
        catchError(this.handleError('signup', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // Log the error to the console
      return of(result as T); // Keep the app running by returning a safe result
    };
  }
}
