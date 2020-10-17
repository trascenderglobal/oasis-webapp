import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class EliminarUsuarioService {

  constructor(private http: HttpClient) {}

  public eliminoUsuario(id) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('token') );
    const url = URL_SERVICIOS + 'user/' + id + '';
    return this.http.delete(url, { headers });
  }
}
