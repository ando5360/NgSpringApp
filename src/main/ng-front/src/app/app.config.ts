import { ApplicationConfig, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { environment } from '../environment/environment';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthGuard } from './auth-guard';
import { authConfig } from './auth/auth.config';
import { provideAuth } from 'angular-auth-oidc-client';


export const appConfig: ApplicationConfig = {
  providers: [
    AuthGuard,
    provideHttpClient(),
    provideRouter(
      routes,
      withViewTransitions(),
      withComponentInputBinding(),
    ),
      provideAnimationsAsync(), 
      provideAnimationsAsync(), provideAuth(authConfig), 
  ],
};