import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  template:
  '
  <div class="container">
     <h2>Login</h2>
     <form [formGroup]="formData" (ngSubmit)="onClickSubmit(formData.value)">
        <div class="form-group">
  '
})
export class LoginComponent {

  userName: string;
  password: string;
  formData: FormGroup;

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
     this.formData = new FormGroup({
        userName: new FormControl("admin"),
        password: new FormControl("admin"),
     });
  }

  onClickSubmit(data: any) {
     this.userName = data.userName;
     this.password = data.password;

     console.log("Login page: " + this.userName);
     console.log("Login page: " + this.password);

     this.authService.login(this.userName, this.password)
        .subscribe( data => { 
           console.log("Is Login Success: " + data); 
     
          if(data) this.router.navigate(['/expenses']); 
     });
  }

}
