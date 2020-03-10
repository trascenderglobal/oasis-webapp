import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from "@angular/common/http";
import { URL_SERVICIOS } from "../../config/config";

@Injectable({
  providedIn: 'root'
})
export class ListarStatusService {

  constructor(private http: HttpClient) {}
  getStatus() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', "Bearer " + localStorage.getItem('token') );
    const url = URL_SERVICIOS + "statusOrder/";
    return this.http.get(url,{headers: headers});
  }
}
