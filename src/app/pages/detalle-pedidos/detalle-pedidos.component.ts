import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  DetallePedidoService,
  ListarStatusService
} from 'src/app/services/service.index';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-detalle-pedidos',
  templateUrl: './detalle-pedidos.component.html',
  styleUrls: ['./detalle-pedidos.component.scss'],
  providers: [NgbModal]
})
export class DetallePedidosComponent implements OnInit {

  frmEditarStatus: FormGroup;
  datosPrimerTabla: any = {};
  productos: any = [];
  listadoStatus: any = [];
  orderAEditar = '';

  constructor(
    private router: ActivatedRoute,
    private detallePedidoService: DetallePedidoService,
    private listarStatusService: ListarStatusService,
    private modalService: NgbModal
  ) {
    this.router.params.subscribe(params => {
      this.getDetallePedido(params.id);
    });

    this.frmEditarStatus = new FormGroup({
      status_id: new FormControl(null)
    });
  }

  ngOnInit() {
    this.listarStatus();
  }

  getDetallePedido(id: any) {
    this.orderAEditar = id;
    this.detallePedidoService.getListarPedido(id).subscribe(
      (res: any) => {
        this.datosPrimerTabla = {
          numPedido: res.id,
          fecha: res.created,
          nombre: res.user.full_name,
          estado: res.status.name,
          id_estado: res.status.id,
          observaciones: res.comments,
          direccion: res.location ? res.location.address : ''
        };

        this.productos = res.order_products;
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
            alert('otro tipo de error');
            break;
        }
      }
    );
  }

  editarStatus(content: any, id: any) {
    this.frmEditarStatus.controls.status_id.setValue(id);
    this.modalService.open(content);
  }

  listarStatus() {
    this.listarStatusService.getStatus().subscribe(
      (resData: any) => {
        this.listadoStatus = resData;
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
            alert('otro tipo de error');
            break;
        }
      }
    );
  }

  guardarEditarStatus() {
    const datos = this.frmEditarStatus.value;
    this.detallePedidoService
      .guardarEditarStatus(this.orderAEditar, datos)
      .subscribe(
        res => {
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
              alert('error 500');
              break;
            default:
              alert('otro tipo de error');
              break;
          }
        }
      );
  }
}
