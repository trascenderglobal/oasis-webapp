import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from "@angular/common/http";
import { URL_SERVICIOS } from "../../config/config";

@Injectable({
  providedIn: 'root'
})
export class CrearCatalogoService {

  constructor(private http: HttpClient) {}

  postCrearCatalogo(datos) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', "Bearer " + localStorage.getItem('token') );
    const url = URL_SERVICIOS + "product/";
    return this.http.post(url, datos,{headers: headers});
  }
}
