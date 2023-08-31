import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {

  constructor(private http: HttpClient) { }
  public saveDiary(diaryContent: String) {
    return this.http.post(`${environment.baseUrl}/diary/`, diaryContent);
  }
  public getAllDiary() {
    return this.http.get(`${environment.baseUrl}/diary/`);
  }

  public getDiaryById(diaryId: number): Observable<any> {
    return this.http.get(`${environment.baseUrl}/diary/${diaryId}`);
  }
}
