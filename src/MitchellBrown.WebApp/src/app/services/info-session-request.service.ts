import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoSessionRequestService {

  private readonly _httpClient = inject(HttpClient);

  public infoSessionRequestCreate(infoSessionRequest:any) {
    return this._httpClient.post("api/infoSessionRequests", {infoSessionRequest});
  }
}
