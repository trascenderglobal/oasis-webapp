import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { URL_SERVICIOS } from "../../config/config";
@Injectable({
  providedIn: "root"
})
export class CrearUsuarioService {
  constructor(private http: HttpClient) {}

  postCrearUsuario(id, datos) {
    const url = URL_SERVICIOS + "user/" + id + "";
    return this.http.post(url, datos);
  }
}
