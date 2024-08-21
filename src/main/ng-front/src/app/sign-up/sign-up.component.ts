import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormArray,
  FormSubmittedEvent,
} from '@angular/forms';
import { filter } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    ReactiveFormsModule,
    MatIconModule,
    RouterModule
  ],
  template: `
    <div class="parent">
      <div class="user-actions-col">
        <mat-card appearance="raised" class="signup-container" style="background-color: #f4bc1c;">
              <mat-card-header class="mat-card-form">
                <mat-card-title style="margin: auto; padding: auto">Welcome</mat-card-title>
                <mat-card-subtitle class="teko banner">Sign up</mat-card-subtitle>
              </mat-card-header>
              <form class="form-width" [formGroup]="signupForm" >
                <mat-form-field class="user-form">
                  <mat-label>Username</mat-label>
                  <input type="username" matInput placeholder="username"  style="font-weight: 400" formControlName="username">
                </mat-form-field>
                <mat-form-field class="user-form">
                  <mat-label>Email</mat-label>
                  <input type="email" matInput placeholder="Ex. pat@example.com" style="font-weight: 400" formControlName="email">
                </mat-form-field>
                <mat-form-field class="user-form">
                  <mat-label>Password</mat-label>
                  <input type="password" matInput placeholder="************" style="font-weight: 400" formControlName="password">
                </mat-form-field>
                <mat-hint class="teko">
                  Or sign in with ...
                </mat-hint><br>
                <button class="alt-login" mat-button></button>    
            <mat-card-actions>
              <button style="margin: auto" type="submit" mat-fab extended>
                <mat-icon>login</mat-icon>
                Sign up
              </button>
            </mat-card-actions>
            </form>
        </mat-card>
        <mat-card appearance="raised" style="background-color: #f4bc1c; background-image: radial-gradient(circle, #F180FF, #FD8BD9  53%, #7742B2 100%); width: 100%;">
          <mat-card-header>
            <mat-card-title class="teko" style="text-decoration: underline; font-size: 28px">Log in</mat-card-title>
            <mat-card-subtitle class="teko" style="font-size: 22px">Already have an account? Login here.</mat-card-subtitle>
          </mat-card-header>
          <mat-card-actions align="end">
            <button mat-button [routerLink]="['/login']">Log in</button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: `
    .mat-card-form{
      display: flex: 
      flex-direction: row; 
      justify-content: center;
    }
    mat-card-title{
      font-family: 'Pacifico', cursive; 
      font-weight: 400;
      font-style: normal; 
      color: white; 
      font-size: 50px
    }
    mat-card-subtitle {
      position: relative;
      font-size: 40px;
      margin-top: 0px; 
      float: right; 
      text-decoration: underline; 
    }
    mat-card{
      flex-grow: 1;
      margin-bottom: 12px;
      max-height: 100%;
      display: flex;
      justify-content: space-between;
      font-weight: bold;
    }
    mat-hint{
      font-size: 18px; 
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
    }
    .login{
      text-align: center;
      align-items: center; 
      background-image: radial-gradient(circle, #F180FF, #FD8BD9  53%, #7742B2 100%);
    }
    .teko {
      font-family: "Teko", sans-serif;
      font-optical-sizing: auto;
      font-weight: 500;
      font-style: normal;
    }
    .signup-container{
      text-align: center; 
      align-items: center: 
      width: 100%; 
      justify-content: center;
    }
    .alt-login{
      align-items: center; 
      justify-content: center; 
      align-items: center;
      width: 50px;
      max-height: 50px; 
      margin-top: 5px;
      background-position: center; 
      background-size: contain;
      background-repeat: no-repeat;
      background-image: url("https://cdn-icons-png.flaticon.com/512/25/25231.png")!important;
    }
    .parent{
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      font-weight: bold;
      height: 100%;
    }
    .user-actions-col {
      height: auto: 
      width: 100%;
      max-width: 400px;    
      flex-direction: column;
      flex-grow: 1;
      max-height: 700px;
      font-weight: bold;
    }
    .signup{
      flex-grow: 0;
      margin-bottom: 20px;
      max-height: 100%;
      display: flex;
      font-weight: bold;
    }
    .user-form {
      min-width: 150px;
      max-width: 500px;
      width: 100%;
      margin: 10px 0px 10px 0px;
      font-weight: bold;
    }
    .form-width {
      width: 100%;
      padding: 25px;
    }
    `
})
export class SignUpComponent {
  signupForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private router: Router, private authService : AuthService) { }

  ngOnInit() {
    //this.signupForm.valueChanges.subscribe((value) => console.log('Value:', value));
    this.signupForm.events
    .pipe(filter((event) => event instanceof FormSubmittedEvent))
    .subscribe((event) => this.authService.signup(event.source.value.username, event.source.value.password));
  }
}
/** Error when invalid control is dirty, touched, or submitted. */