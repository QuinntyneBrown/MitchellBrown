import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InquiryService {

  private readonly _httpClient = inject(HttpClient);

  public inquiryCreate(inquiry:any) {
    return this._httpClient.post("api/inquiries", {inquiry});
  }
}
