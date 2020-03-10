import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from "@angular/common/http";
import { URL_SERVICIOS } from "../../config/config";

@Injectable({
  providedIn: 'root'
})
export class EditarPremioService {

  constructor(private http: HttpClient) {}

  getListarPremio(id) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', "Bearer " + localStorage.getItem('token') );
    const url = URL_SERVICIOS + "prize/" + id + "";
    return this.http.get(url,{headers: headers});
  }

  guardarEditarPremio(id,datos){
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', "Bearer " + localStorage.getItem('token') );
    const url = URL_SERVICIOS + "prize/" + id + "";
    return this.http.put(url,datos,{headers: headers});
  }
}
