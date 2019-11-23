import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from "@angular/common/http";
import { URL_SERVICIOS } from "../../config/config";

@Injectable({
  providedIn: 'root'
})
export class DetallePedidoService {


  constructor(private http: HttpClient) {}

  getListarPedido(id) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', "Bearer " + localStorage.getItem('token') );
    const url = URL_SERVICIOS + "order/" + id + "";
    return this.http.get(url,{headers: headers});
  }

  getListarProductosCliente(idCliente) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', "Bearer " + localStorage.getItem('token') );
    const url = URL_SERVICIOS + "order/user/" + idCliente + "";
    return this.http.get(url,{headers: headers});
  }

  guardarEditarStatus(id,datos){
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', "Bearer " + localStorage.getItem('token') );
    const url = URL_SERVICIOS + "order/" + id + "";
    return this.http.patch(url,datos,{headers: headers});
  }

}
