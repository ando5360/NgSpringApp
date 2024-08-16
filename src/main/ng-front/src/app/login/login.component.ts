import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  template:
  ""
})
export class LoginComponent {
  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
  }

  onClickSubmit(data: any) {

  }

}
