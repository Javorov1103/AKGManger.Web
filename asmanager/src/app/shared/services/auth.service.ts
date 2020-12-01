import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UserLoginModel } from 'src/app/core/models/userloginmodel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginPath = environment.apiUrl + "login";
  private registerPath = environment.apiUrl + "register";

  constructor(private http: HttpClient) { }

  login(data: UserLoginModel): Observable<any> {
    return this.http.post(this.loginPath, data)
  }

  register(data): Observable<any> {
    return this.http.post(this.registerPath, data)
  }

  saveToken(token) {
    localStorage.setItem('token', token)
  }

  getToken() {
    return localStorage.getItem('token')
  }

  isAuthenticated() {
      if (this.getToken()) {
        return true
      }
      return false;
  }
}