import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  postIniciarSesion(datos) {
    const url = URL_SERVICIOS + 'auth/login';
    return this.http.post(url, datos);
  }

}
