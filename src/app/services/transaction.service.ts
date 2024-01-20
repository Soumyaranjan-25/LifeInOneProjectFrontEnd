import { Injectable } from '@angular/core';
import { ApiResponse } from '../model/ApiResponse';
import { environment } from '../environment/url';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) {}

  submitCreditDetails(encryptedData: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.saveCreditUrl}`, { encryptedData });
  }
}
