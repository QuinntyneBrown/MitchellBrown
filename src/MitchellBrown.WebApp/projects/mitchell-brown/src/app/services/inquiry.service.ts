import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BASE_URL } from '../injection-tokens';

@Injectable({
  providedIn: 'root'
})
export class InquiryService {

  private readonly _httpClient = inject(HttpClient);
  private readonly _baseUrl = inject(BASE_URL);

  public inquiryCreate(inquiry:any) {
    const url = this._baseUrl
      ? new URL('api/inquiries', this._baseUrl).toString()
      : 'api/inquiries';

    return this._httpClient.post(url, inquiry);
  }
}
