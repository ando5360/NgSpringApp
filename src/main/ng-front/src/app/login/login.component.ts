import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../shared/user';
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
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-login',
  template: `
  <div class="parent">
    <div class="user-actions-col">
      <mat-card class="login" appearance="raised">
        <mat-card-header>
          <mat-card-title style="font-family: 'Pacifico', cursive; font-weight: 400;
  font-style: normal; color: white; font-size: 50px">Welcome</mat-card-title>
          <mat-card-subtitle class="teko" style="position: relative; font-size: 40px; margin-top: 0px; float: right; text-decoration: underline; z-axis: 99">Log in</mat-card-subtitle>
        </mat-card-header>

        <form class="form-width">
          <mat-form-field class="user-form">
            <mat-label>Email</mat-label>
            <input type="email" matInput [formControl]="emailFormControl" [errorStateMatcher]="matcher"
                  placeholder="Ex. pat@example.com" STYLE="font-weight: 400">
            @if (emailFormControl.hasError('email') && !emailFormControl.hasError('required')) {
              <mat-error>Enter your email address here</mat-error>
            }
            @if (emailFormControl.hasError('required')) {
              <mat-error>Hey👋 ! we cant sign you in with no <strong>email</strong></mat-error>
            }
          </mat-form-field>
          <mat-form-field class="user-form">
            <mat-label>Password</mat-label>
            <input type="password" matInput placeholder="****" style="font-weight: 400">
          </mat-form-field>


          <mat-hint class="teko" style="font-size: 18px; text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;">
            Or sign in with ...
          </mat-hint><br>
          <button class="alt-login" mat-button></button>     
        </form>

        <mat-card-actions>
          <button mat-fab extended>
            <mat-icon>login</mat-icon>
            Log in
          </button>
        </mat-card-actions>
      </mat-card>
      <br>



      <mat-card appearance="raised" style="background-color: #f4bc1c">
        <mat-card-header>
          <mat-card-title class="teko" style="text-decoration: underline; font-size: 28px">Sign Up</mat-card-title>
          <mat-card-subtitle class="teko" style="font-size: 22px">Havent got an account? Sign up here.</mat-card-subtitle>
        </mat-card-header>
        <mat-card-actions align="end">
          <button mat-button>Sign up</button>
        </mat-card-actions>
      </mat-card>
    <div>
  </div>
  `,
  styles: `

    .teko {
      font-family: "Teko", sans-serif;
      font-optical-sizing: auto;
      font-weight: 500;
      font-style: normal;
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
    .login{
      flex-grow: 1;
      margin-bottom: 12px;
      max-height: 100%;
      display: flex;
      min-height: 400px;
      justify-content: space-between;
      text-align: center;
      align-items: center; 
      font-weight: bold;
      background-image: radial-gradient(circle, #F180FF, #FD8BD9  53%, #7742B2 100%);
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
  `,
    standalone: true,
    imports: [
      MatCardModule,
      MatButtonModule,
      MatFormFieldModule,
      FormsModule, 
      MatFormFieldModule, 
      MatInputModule, 
      ReactiveFormsModule,
      MatIconModule
    ],
})
export class LoginComponent {
  constructor() { }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
  ngOnInit() {
  }

  onClickSubmit(data: any) {

  }

}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}