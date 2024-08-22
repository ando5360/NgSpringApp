import { Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../environment/environment';
import { User } from './common/user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }
  err403 = new BehaviorSubject(false);
  err401 = new BehaviorSubject(false);
  err500 = new BehaviorSubject(false);

  public is403() : BehaviorSubject<boolean> {
    return this.err403;
  }
  
  public signup(username: string, password: string): void {
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
          }
        })
      )
      .subscribe(); // Ensure you subscribe to the observable
  }

  public login(username: string, password: string){
    this.err403.next(false);
    console.log("login triggered");
    const url = `${environment.api_url}/auth/users/${username}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const body = { password: password };

    this.http.post<User>(url, body, { headers, observe: 'response' })
      .pipe(
        tap(response => {
          console.log(response.status)
          this.setCurrentUser(response.body?.accessorId ?? "", response.body?.entityId ?? ""); 
          }),
          catchError(err => this.handleError(err))
      ).subscribe();
  }

  public handleError(error: HttpErrorResponse) {
    if (error.status === 403) {
      this.err403.next(true);
    } else if (error.status === 401) {
      this.err401.next(true);
    } else if (error.status === 500) {
      this.err500.next(true);
    }
    return throwError('Something went wrong');
  }

  public logout(): void {
    localStorage.removeItem('accesorId')
    localStorage.removeItem('entityId');
    this.router.navigate([this.router.url])
    .then(() => {
      window.location.reload();
    });
  }

  public isLoggedIn(): boolean {
    return true ? (localStorage.getItem('entityId') != "" && localStorage.getItem('entityId') != null) : false;
  }

  public getToken(): string | null {
    return localStorage.getItem('entityId');
  }

  private setCurrentUser(accessorId: string, entityId : string): void {
    localStorage.setItem("accesorId", accessorId); 
    localStorage.setItem("entityId", entityId);
  }
}
