import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from "@angular/common/http";
import { URL_SERVICIOS } from "../../config/config";

@Injectable({
  providedIn: 'root'
})
export class MostrarCatalogoProductoService {

  constructor(private http: HttpClient) {}
  getProductosRegistrados() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', "Bearer " + localStorage.getItem('token') );
    const url = URL_SERVICIOS + "product/";
    return this.http.get(url,{headers: headers});
  }
}
