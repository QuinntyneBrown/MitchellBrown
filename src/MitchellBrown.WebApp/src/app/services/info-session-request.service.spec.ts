import { TestBed } from '@angular/core/testing';

import { InfoSessionRequestService } from './info-session-request.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';

describe('InfoSessionRequestService', () => {
  let service: InfoSessionRequestService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[

      ],
      providers: [
        InfoSessionRequestService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(InfoSessionRequestService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should post infoSessionRequest', () => {

    const mockResponse = {};

    service.infoSessionRequestCreate({ name: "Foo" }).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const testRequest = httpTestingController.expectOne('api/infoSessionRequests');

    expect(testRequest.request.method).toEqual('POST');

    testRequest.flush(mockResponse);
    
  })
});
