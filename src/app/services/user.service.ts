import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/url';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  public addUser(user:any){
    return this.http.post(`${environment.baseUrl}/user/`, user);
  }
  // public checkUser(user:any){
  //   return this.http.post(`${environment.baseUrl}/user/checkUser`, user);
  // }
}
