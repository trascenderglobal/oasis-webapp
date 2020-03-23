import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import {
  CrearPremioService,
  ListarPremiosService,
  EditarPremioService,
  EliminarPremioService
} from 'src/app/services/service.index';

@Component({
  selector: 'app-catalogopremios',
  templateUrl: './catalogopremios.component.html',
  styleUrls: ['./catalogopremios.component.scss'],
  providers: [NgbModal]
})
export class CatalogopremiosComponent implements OnInit {
  frmRegistroPremio: FormGroup;
  listaPremios: any = [];
  premioAEditar = '';
  page = 1;
  pageSize = 4;
  collectionSize = '';

  constructor(
    private modalService: NgbModal,
    private crearPremioService: CrearPremioService,
    private listarPremiosService: ListarPremiosService,
    private editarPremioService: EditarPremioService,
    private eliminarPremioService: EliminarPremioService
  ) {
    this.frmRegistroPremio = new FormGroup({
      name: new FormControl(),
      description: new FormControl(),
      unit_value: new FormControl(),
      image_url: new FormControl(),
      available: new FormControl()
    });
  }

  ngOnInit() {
    this.listarPremiosService.getPremiosRegistrados().subscribe(
      (res: any) => {
        this.listaPremios = res;
        this.collectionSize = res.prizes.length;
      },
      err => {
        switch (err.status) {
          case 401:
            alert('token caduco');
            break;
          case 404:
            alert('error 404');
            break;
          default:
            alert('otro tipo de error ');
            break;
        }
      }
    );
  }

  guardarPremioCatalogo() {

    console.log(this.frmRegistroPremio.value);

    this.crearPremioService
      .postCrearPremio(this.frmRegistroPremio.value)
      .subscribe(
        (res: any) => {
          alert('registro guardado');
          location.reload();
        },
        err => {
          switch (err.status) {
            case 401:
              alert('token caduco');
              break;
            case 404:
              alert('error 404');
              break;
            case 409:
              alert('error 404');
              break;
            case 500:
              alert('error 404');
              break;

            default:
              alert('otro tipo de error ');
              break;
          }
        }
      );
  }

  obtenerPremio(idPremio: any, content: any) {
    this.premioAEditar = idPremio;
    this.editarPremioService.getListarPremio(idPremio).subscribe(
      (respuesta: any) => {
        const premiosObtenidosActualizar: any = {
          description: respuesta.description,
          unit_value: respuesta.unit_value,
          image_url: respuesta.image_url,
          available: respuesta.available,
          name: respuesta.name
        };
        this.frmRegistroPremio.setValue(premiosObtenidosActualizar);
        this.modalService.open(content);
      },
      err => {
        switch (err.status) {
          case 401:
            alert('token caduco');
            break;
          case 404:
            alert('error 404');
            break;
          default:
            alert('otro tipo de error ');
            break;
        }
      }
    );
  }

  guardarEditarPremiosCatalogo() {
    const datos = this.frmRegistroPremio.value;

    console.log(datos);

    this.editarPremioService
      .guardarEditarPremio(this.premioAEditar, datos)
      .subscribe(
        (res: any) => {
          alert('registro editado');
          location.reload();
        },
        err => {
          switch (err.status) {
            case 401:
              alert('token caduco');
              break;
            case 404:
              alert('error 404');
              break;

            case 500:
              alert('error 404');
              break;

            default:
              alert('otro tipo de error ');
              break;
          }
        }
      );
  }

  eliminarPremio(id: any) {
    if (confirm('Desea eliminar el registro?')) {
      this.eliminarPremioService.eliminoPremio(id).subscribe(
        res => {
          if (res) {
            alert('eliminado');
            location.reload();
          }
        },
        err => {
          switch (err.status) {
            case 401:
              alert('token caduco');
              break;
            case 404:
              alert('error 404');
              break;
            case 500:
              alert('error 500');
              break;
            default:
              alert('otro tipo de error');
              break;
          }
          console.log(err);
        }
      );
    }
  }

  modalAgregarPremio(content: any) {
    this.frmRegistroPremio.reset();
    this.modalService.open(content);
  }
}
