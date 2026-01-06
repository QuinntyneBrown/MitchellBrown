import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { tenantInterceptor } from './tenant.interceptor';
import { TENANT_ID } from '../injection-tokens';

describe('tenantInterceptor', () => {
  it('should add X-Tenant-Id header when tenant ID is provided', (done) => {
    TestBed.configureTestingModule({
      providers: [
        { provide: TENANT_ID, useValue: '00000000-0000-0000-0000-000000000001' }
      ]
    });

    const request = new HttpRequest('GET', '/api/test');
    const next: HttpHandlerFn = (req: HttpRequest<any>): Observable<HttpEvent<any>> => {
      expect(req.headers.get('X-Tenant-Id')).toBe('00000000-0000-0000-0000-000000000001');
      done();
      return of({} as HttpEvent<any>);
    };

    TestBed.runInInjectionContext(() => {
      tenantInterceptor(request, next).subscribe();
    });
  });

  it('should not add X-Tenant-Id header when tenant ID is not provided', (done) => {
    TestBed.configureTestingModule({
      providers: []
    });

    const request = new HttpRequest('GET', '/api/test');
    const next: HttpHandlerFn = (req: HttpRequest<any>): Observable<HttpEvent<any>> => {
      expect(req.headers.has('X-Tenant-Id')).toBe(false);
      done();
      return of({} as HttpEvent<any>);
    };

    TestBed.runInInjectionContext(() => {
      tenantInterceptor(request, next).subscribe();
    });
  });
});

