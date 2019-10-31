import { Injectable } from "@angular/core";
import { HttpClient ,HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { URL_SERVICIOS } from "../../config/config";

@Injectable({
  providedIn: 'root'
})
export class ListaUsuariosService {

  
  constructor(private http: HttpClient) {}



  
  getUsuariosRegistrados() {

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', "Bearer " + localStorage.getItem('token') );

    const url = URL_SERVICIOS + "user/";
    return this.http.get(url,{headers: headers});
  }
}
