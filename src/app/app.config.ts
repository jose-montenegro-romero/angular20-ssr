import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
// Interceptors
import { authInterceptor } from '@interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(
      routes,
      withViewTransitions(),
      withComponentInputBinding()
    ),
    provideHttpClient(
      withInterceptors([authInterceptor]), withFetch()
    ),
    provideClientHydration(withEventReplay()),
    //     provideClientHydration(
    //   withEventReplay(),
    //   withIncrementalHydration(),
    //   withHttpTransferCacheOptions({
    //     filter: (req: HttpRequest<unknown>) => true, // to filter
    //     includeHeaders: [], // to include headers
    //     includePostRequests: false, // to include POST
    //     includeRequestsWithAuthHeaders: true, // to include with auth
    //   })
    // ),
  ]
};
