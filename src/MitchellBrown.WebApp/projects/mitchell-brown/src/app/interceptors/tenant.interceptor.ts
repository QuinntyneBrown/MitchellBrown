import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TENANT_ID } from '../injection-tokens';

/**
 * HTTP interceptor that adds the X-Tenant-Id header to all outgoing requests.
 * This ensures multi-tenancy support by including the tenant identifier in API calls.
 */
export const tenantInterceptor: HttpInterceptorFn = (req, next) => {
  const tenantId = inject(TENANT_ID, { optional: true });

  // Only add the header if a tenant ID is configured
  if (tenantId) {
    const clonedRequest = req.clone({
      setHeaders: {
        'X-Tenant-Id': tenantId
      }
    });
    return next(clonedRequest);
  }

  return next(req);
};
