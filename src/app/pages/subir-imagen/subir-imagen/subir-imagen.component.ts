import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subir-imagen',
  templateUrl: './subir-imagen.component.html',
  styleUrls: ['./subir-imagen.component.scss']
})
export class SubirImagenComponent implements OnInit {
  selectedFile = null;
  frmSubirImagen: FormGroup;

  constructor(
    private toastr: ToastrService,
    private http: HttpClient,
  ) {
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
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );
    const rutaImg = this.frmSubirImagen.get('nombreCarpetaRuta').value;
    const nombreImagen = this.frmSubirImagen.get('nombreImagen').value;
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);

    this.http.post(
      'https://oasis-app-backend.herokuapp.com/api/image/' + rutaImg + '/' + nombreImagen + ' ', fd, { headers }
    ).subscribe((res: any) => {
      this.toastr.success(`URL: ${res.url}`, 'Imagen subida con éxito');
    }, () => {
      this.toastr.error('', 'Error al subir imagen');
    });
  }

}
