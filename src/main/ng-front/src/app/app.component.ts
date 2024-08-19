import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule,  MatButtonModule,MatIconModule, CommonModule],
  template: `
<mat-drawer-container class="draw-container">
  <mat-drawer mode="over"  #drawer>
      <div style="width: 100%; display: flex; flex-direction: column;">
        <form class="form-inline drawer-form">
          <input class="form-control" type="search" placeholder="Search" aria-label="Search" style="margin-right: 5px;">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <button mat-raised-button class="menu-option">Home</button>
        <button mat-raised-button class="menu-option">Settings</button>
        <button mat-raised-button class="menu-option">Profile</button>
        <button mat-raised-button class="menu-option">Log out</button>
      </div>
    </mat-drawer>
    <mat-drawer-content>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">GuestBook.io<span style="font-family: teko;"> |  Where guests feel at home</span></a>
        <button mat-mini-fab class="mobile-burger" (click)="drawer.toggle()" aria-label="Open side nav" style="margin: 10px;">
            <mat-icon>menu</mat-icon>
        </button>
        <ul class="navbar-nav menu-items">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">My Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Settings</a>
          </li>     
        </ul>
        <form class="form-inline search-form">
          <input class="form-control" type="search" placeholder="Search" aria-label="Search" style="margin-right: 5px;">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <button mat-raised-button class="amber-button menu-items account-actions" *ngIf="isLoggedIn()" (click)="logout()">Log out</button>
        <button mat-raised-button class="green-button menu-items account-actions" *ngIf="!isLoggedIn()">Log in</button>
       </nav>    
      <router-outlet/>
    </mat-drawer-content>
  </mat-drawer-container>
  `,

  styles: `
  .navbar{
    position: absolute; 
    top:0; 
    width: 100%; 
    display: flex; 
    flex-direction: row;
    justify-content: space-between; 
    align-items: space-between
  }
  .drawer-form{
    display: flex; 
    flex-direction: row; 
    margin: 10px;
  }
  .navbar-brand{
    font-family: 'Pacifico', cursive; 
    font-weight: 400;
  }
  .draw-container {
    height: 100%;
    width: 100%;
  }
  .sidenav-container {
      height: 100%;
  }
  .menu-option{
    margin: 10px; 
    border-radius: 5px;
  }
  .sidenav {
    width: 200px;
  }
  .account-actions{
    margin-right: 5px; 
    border-radius: 5px; 
    padding: 2px;
    min-width: 90px;
    max-width: 90px;
  }
  .search-form{
    display: flex; 
    flex-direction: row; 
    margin-right: 15px; 
    margin-left: auto; 
    min-width: 275px;
  }
  .sidenav .mat-toolbar {
    background: inherit;
  }
  .menu-items{
    width: 100%; 
    justify-content: center;
  }
  
  .mat-toolbar.mat-primary {
    position: sticky;
    top: 0;
    z-index: 1;
  }
  .green-button{
    padding: 2px;
    background: linear-gradient(179.1deg, rgb(43, 170, 96) 2.3%, rgb(129, 204, 104) 98.3%); 
    color: whitesmoke !important;
  }
  .amber-button{
    padding: 2px;
    background: linear-gradient(109.6deg, rgb(255, 194, 48) 11.2%, rgb(255, 124, 0) 100.2%); 
    color: whitesmoke !important;
  }
  @media (max-width: 995px) {
    .menu-items{
      display: none;
    }
  }
  @media (min-width: 995px) {
    .mobile-burger{
      display: none;
    }
  }
`
})
export class AppComponent {
  private breakpointObserver = inject(BreakpointObserver);
  sidemenu = false;


  constructor(private authService : AuthService) { }
  isLoggedIn(){
    return this.authService.isLoggedIn();
  }
  logout(){
    this.authService.logout();
  }
}
