import { TestBed } from '@angular/core/testing';

import { InquiryService } from './inquiry.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';

describe('InquiryService', () => {
  let service: InquiryService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[

      ],
      providers: [
        InquiryService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(InquiryService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should post inquiry', () => {

    const mockResponse = {};

    service.inquiryCreate({ name: "Foo" }).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const testRequest = httpTestingController.expectOne('api/inquiries');

    expect(testRequest.request.method).toEqual('POST');

    testRequest.flush(mockResponse);
    
  })
});
