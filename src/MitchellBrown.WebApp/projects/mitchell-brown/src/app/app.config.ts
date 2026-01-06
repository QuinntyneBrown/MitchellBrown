import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { BASE_URL, TENANT_ID } from './injection-tokens';
import { tenantInterceptor } from './interceptors/tenant.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(withInterceptors([tenantInterceptor])),
    { provide: BASE_URL, useValue: "https://localhost:7129/" },
    { provide: TENANT_ID, useValue: "00000000-0000-0000-0000-000000000001" }
    ]
};
