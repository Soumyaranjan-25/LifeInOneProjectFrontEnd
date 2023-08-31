import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/url';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getAllApps(){
    return  this.http.get<any>(`${environment.baseUrl}/app/`);
  }

  getAppLockSettings(){
    return  this.http.get<any>(`${environment.baseUrl}/app/getAppLockSettings/`);
  }

  saveLockSettings(appLockSettings: any){
    return  this.http.post<any>(`${environment.baseUrl}/saveLockSettings`,appLockSettings);
  }
}
