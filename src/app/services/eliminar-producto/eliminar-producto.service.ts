import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from "@angular/common/http";
import { URL_SERVICIOS } from "../../config/config";

@Injectable({
  providedIn: 'root'
})
export class EliminarProductoService {

  constructor(private http: HttpClient) {}

  eliminoProducto(id) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', "Bearer " + localStorage.getItem('token') );
    const url = URL_SERVICIOS + "product/" + id + "";
    return this.http.delete(url,{headers: headers});
  }
}
