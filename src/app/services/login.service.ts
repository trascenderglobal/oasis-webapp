import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  login(username:string, password:string) {
    return this.http.post('https://oasis-app-backend.herokuapp.com/api/auth/login', {
      username ,
      password ,     
    });     
  }
 
}