import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class ListarPremiosService {

  constructor(private http: HttpClient) {}

  public getPremiosRegistrados(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('token') );
    const url = URL_SERVICIOS + 'prize/';
    return this.http.get(url, { headers });
  }

}
