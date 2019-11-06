import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from "@angular/common/http";
import { URL_SERVICIOS } from "../../config/config";

@Injectable({
  providedIn: 'root'
})
export class CrearPremioService {

  constructor(private http: HttpClient) {}

  postCrearPremio(datos) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', "Bearer " + localStorage.getItem('token') );
    const url = URL_SERVICIOS + "prize/";
    return this.http.post(url, datos,{headers: headers});
  }
}
