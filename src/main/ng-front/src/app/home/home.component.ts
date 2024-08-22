import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { filter, map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'; // Add this import
import { FormControl, FormGroup, FormSubmittedEvent } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; // Add this import
import { UserPostService } from '../user-post.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { UserPost } from '../common/user-post';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule, // Add this import
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    CommonModule,
    MatProgressBarModule
  ],
  template: `
      <mat-grid-list cols="2" rowHeight="350px" class="grid-container">
          <mat-grid-tile>
            <mat-card class="dashboard-card">
              <mat-card-header>
                <mat-card-title class="post-form" style="font-family: 'Pacifico'">
                  Stay Worth Posting about?
                </mat-card-title>
              </mat-card-header>
              <mat-card-content class="dashboard-card-content">      
                <form [formGroup]="postForm" class="post-form">
                  <div class="post-form-row">
                      <input matInput class="title-input" placeholder="Enter your title here" formControlName="postTitle">
                      <button mat-raised-button class="green-button post-button">Post</button>
                  </div>   
                  <textarea matInput  class="post-content" formControlName="postContent"  placeholder="How was your latest isit ? Write your guestbook entry here."></textarea>
                </form>
              </mat-card-content>
              <mat-card-footer style="width: 100%; display: flex; justify-content: center; align-items: center;">
                  <mat-progress-bar mode="determinate" value="40" style="border-radius: 25px; width: 98%;"></mat-progress-bar>
              </mat-card-footer>
            </mat-card>
          </mat-grid-tile>
        <mat-grid-tile *ngFor="let post of posts;">
            <mat-card class="dashboard-card">
              <mat-card-header>
                <mat-card-title style="font-family: 'Pacifico'; font-size: 18px; font-weight: 200">
                  {{post.title}}
                </mat-card-title>
                <button mat-icon-button class="more-button" [matMenuTriggerFor]="menu" aria-label="Toggle menu">
                    <mat-icon>more_vert</mat-icon>
                  </button>
                  <mat-menu #menu="matMenu" xPosition="before">
                    <button mat-menu-item>Delete</button>
                    <button mat-menu-item>Block user</button>
                  </mat-menu>
              </mat-card-header>
              <mat-card-content class="dashboard-card-content" style="font-family: 'Teko'; font-size: 18px; font-weight: 200">      
                <p>{{post.content}}</p>
              </mat-card-content>
              <mat-card-footer class="teko" style="text-align: right; padding: 25px 70px 45px 0px; font-size: 28px; font-style: italic">
                ~ {{post.author}}
              </mat-card-footer>
            </mat-card>
          </mat-grid-tile>
        
      </mat-grid-list>
  `,
  styles: `
      .grid-container {
        display: flex;
        margin-top: 60px;
      }
    .green-button{
      padding: 2px;
      background: linear-gradient(179.1deg, rgb(43, 170, 96) 2.3%, rgb(129, 204, 104) 98.3%); 
      color: whitesmoke !important;
    }
    .post-form{
      display: flex;
      flex-direction: column; 
      height: 100%; 
      width: 100%; 
      text-align: left; 
      padding: 5px;
      flex-shrink: 1; 
      max-width: 800px; 
      margin: auto
    }
    .post-form-row{
      display: flex; 
      flex-direction: row;
    }
    .dashboard-card {
      position: absolute;
      top: 15px;
      left: 15px;
      right: 15px;
      bottom: 15px;
    }
    .post-content{
      margin-top: 3px;
      width: 100%; 
      display: flex; 
      flex-grow: 2; 
      border-radius: 5px; 
      margin-bottom: 5px; 
      height: 100%
    }
    .dashboard-card-content{
      height: 100%;
    }
    .title-input{
      width: 100%; 
      height: 100%; 
      margin: auto; 
      margin-bottom: 3px;
    }
    .post-button{
      height: 100%; 
      width: 100%; 
      border-radius: 10px;
      font-family: 'Pacifico';
      font-size: 20px; 
      flex-shrink: 2; 
      max-width: 60px;
      display: flex;
      padding: 0px;
      margin-left: 2px;
      margin-bottom: 7px !important;
    }
    .more-button {
      position: absolute;
      top: 5px;
      right: 10px;
    }  
    .dashboard-card-content {
      text-align: center;
    }
    @media (max-width: 995px) {
      .grid-container {
        display: flex;
        margin-top: 120px;
      }
    }
    .post-card{
      font-family: 'Pacifico';
      text-decoration: underline;
    }
    
  `
})
export class HomeComponent {
  private breakpointObserver = inject(BreakpointObserver);
  posts : UserPost[] = [];
  postForm = new FormGroup({
    postTitle: new FormControl(''),
    postContent: new FormControl(''),
  });

  constructor(private userPostService: UserPostService, public snackBar: MatSnackBar) {
  }
  ngOnInit() {
    this.userPostService.getPosts().subscribe(
      (data: UserPost[]) => {
        this.posts = data;
    });
      
    this.postForm.events
    .pipe(filter((event) => event instanceof FormSubmittedEvent))
    .subscribe((event) => {
      this.userPostService.submitPost(
        event.source.value.postTitle,
        event.source.value.postContent,
      ).subscribe(
        statusCode => {
          if (statusCode === 200) {
            this.snackBar.open("Post successful", "Close");
          } else {
            this.snackBar.open("An error occurred whilst submitting your post", "Close")
            // Perform actions for failed post
          }
        },
        error => {
          console.error("An error occurred:", error);
          // Handle error scenario
        }
      );
      this.postForm.reset();
    }
    );
  }
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Stay Worth Posting about?', cols: 2, rows: 1, form: true},
        ];
      }

      return [
        { title: 'Stay Worth Posting about?', cols: 1, rows: 1, form: true},
      ];
    })
  );
}