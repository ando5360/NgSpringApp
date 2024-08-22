import { Routes } from '@angular/router';
import { AuthGuard } from './auth-guard';
import { NotAuthGuard } from './not-auth-guard';

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
      path: 'settings',
      loadComponent: () => import('./user-settings/user-settings.component').then((m) => m.SettingsComponent),
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
