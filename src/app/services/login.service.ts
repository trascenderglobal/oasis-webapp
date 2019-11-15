import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from "../config/config";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  // login(username:string, password:string) {
  //   return this.http.post('https://oasis-app-backend.herokuapp.com/api/auth/login', {
  //     username ,
  //     password ,     
  //   });     
  // }



  postIniciarSesion(datos) {
    const url = URL_SERVICIOS + "auth/login";
    return this.http.post(url, datos);
  }
 
}