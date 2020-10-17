import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {}

  public isAuthenticated() {
    const helper = new JwtHelperService();
    const token = localStorage.getItem('token');
    return !helper.isTokenExpired(token);
  }

  public signOut(): void {
    localStorage.removeItem('token');
  }

}
