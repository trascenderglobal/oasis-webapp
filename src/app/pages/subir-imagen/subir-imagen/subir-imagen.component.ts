import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-subir-imagen",
  templateUrl: "./subir-imagen.component.html",
  styleUrls: ["./subir-imagen.component.scss"]
})
export class SubirImagenComponent implements OnInit {
  selectedFile = null;
  frmSubirImagen: FormGroup;

  constructor(private http: HttpClient) {
    this.frmSubirImagen = new FormGroup({
      nombreCarpetaRuta: new FormControl(''),
      nombreImagen: new FormControl(''),
    });
  }

  ngOnInit() {}

  subirImagen(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    let headers = new HttpHeaders();
    headers = headers.set(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );
    var rutaImg = this.frmSubirImagen.get('nombreCarpetaRuta').value;
    var nombreImagen = this.frmSubirImagen.get('nombreImagen').value;
    const fd = new FormData();
    fd.append("file", this.selectedFile, this.selectedFile.name);
    this.http
      .post(
        "https://oasis-app-backend.herokuapp.com/api/image/"+ rutaImg +"/"+nombreImagen+" ",
        fd,
        { headers: headers }
      )
      .subscribe(
        (res: any) => {
          alert("CORRECTO!!! la imagen ha sido almacenada en: "+res.url+"");
          location.reload();
        },

        err => {
          switch (err.status) {
            case 401:
              alert("token caduco");
              break;
            case 404:
              alert("error 404");
              break;
            case 500:
              alert("error 404");
              break;
            default:
              alert("otro tipo de error ");
              break;
          }
        }
      );
  }
}
