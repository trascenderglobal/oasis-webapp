import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from "@angular/common/http";
import { URL_SERVICIOS } from "../../config/config";

@Injectable({
  providedIn: 'root'
})
export class EditarProductoCatalogoService {

  constructor(private http: HttpClient) {}

  getListarProducto(id) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', "Bearer " + localStorage.getItem('token') );
    const url = URL_SERVICIOS + "product/" + id + "";
    return this.http.get(url,{headers: headers});
  }

  guardarEditarProducto(id,datos){
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', "Bearer " + localStorage.getItem('token') );
    const url = URL_SERVICIOS + "product/" + id + "";
    return this.http.put(url,datos,{headers: headers});
  }
}
