import { ApplicationConfig, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { environment } from '../environment/environment';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(
      [
        {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full',
        },
        {
          path: 'home',
          loadComponent: () => import('/home/home.component.ts').then((m) => m.HomeComponent),
        },
        {
          path: 'login',
          loadComponent: () => import().then((m) => m.LoginComponent),
        }
      ],
      withViewTransitions(),
      withComponentInputBinding(),
    ),
    provideHttpClient(withInterceptors([errorHandlingInterceptor, tokenInterceptor])),
    { provide: API_URL, useValue: environment.api_url }, 
      provideAnimationsAsync(),
  ],
};