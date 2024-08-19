import { Routes } from '@angular/router';
import { AuthGuard } from './shared/auth-guard';
import { NotAuthGuard } from './shared/not-auth-guard';

export const routes: Routes =  [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: 'home',
      loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
      canActivate: [AuthGuard] 
    },
    {
      path: 'login',
      loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent),
      canActivate: [NotAuthGuard] 
    },
    {
      path: 'signup',
      loadComponent: () => import('./sign-up/sign-up.component').then((m) => m.SignUpComponent),
      canActivate: [NotAuthGuard] 
    }
  ];
