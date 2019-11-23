import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {
  DetallePedidoService,
  ListarStatusService
} from "src/app/services/service.index";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-detalle-pedidos",
  templateUrl: "./detalle-pedidos.component.html",
  styleUrls: ["./detalle-pedidos.component.scss"],
  providers: [NgbModal]
})
export class DetallePedidosComponent implements OnInit {
  frmEditarStatus: FormGroup;
  datosPrimerTabla: any = {};
  productos: any = [];
  listadoStatus: any = [];
  orderAEditar = "";
  constructor(
    private router: ActivatedRoute,
    private _detallePedidoService: DetallePedidoService,
    private _listarStatusService: ListarStatusService,
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

  listarProductos(idCliente) {
    this._detallePedidoService.getListarProductosCliente(idCliente).subscribe(
      (res2: any) => {
        for (var i = 0; i < res2.orders.length; i++) {
          var data2 = {};
          for (var t = 0; t < res2.orders[i].order_products.length; t++) {
            data2 = {
              items: res2.orders[i].order_products[t].product,
              cantidad: res2.orders[i].order_products[t].quantity
            };
            this.productos.push(data2);
          }
        }
      },
      err => {
        switch (err.status) {
          case 401:
            alert("token caduco");
            break;
          case 404:
            alert("error 404");
            break;
          default:
            alert("otro tipo de error ");
            break;
        }
      }
    );
  }

  getDetallePedido(id) {
    this.orderAEditar = id;
    this._detallePedidoService.getListarPedido(id).subscribe(
      (res: any) => {
        this.datosPrimerTabla = {
          numPedido: res.id,
          fecha: res.created,
          nombre: res.user.full_name,
          estado: res.status.name,
          id_estado: res.status.id,
          observaciones: res.comments,
          direccion: res.location ? res.location.address : ""
        };

        this.listarProductos(res.responsible_id);
      },
      err => {
        switch (err.status) {
          case 401:
            alert("token caduco");
            break;
          case 404:
            alert("error 404");
            break;
          default:
            alert("otro tipo de error ");
            break;
        }
      }
    );
  }

  editarStatus(content, id) {
    this.frmEditarStatus.controls.status_id.setValue(id);
    this.modalService.open(content);
  }

  listarStatus() {
    this._listarStatusService.getStatus().subscribe(
      (resData: any) => {
        this.listadoStatus = resData;
      },
      err => {
        switch (err.status) {
          case 401:
            alert("token caduco");
            break;
          case 404:
            alert("error 404");
            break;
          default:
            alert("otro tipo de error ");
            break;
        }
      }
    );
  }

  guardarEditarStatus() {
    let datos = this.frmEditarStatus.value;
    this._detallePedidoService
      .guardarEditarStatus(this.orderAEditar, datos)
      .subscribe(
        res => {
          alert("registro editado");
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
              alert("error 500");
              break;
            default:
              alert("otro tipo de error ");
              break;
          }
        }
      );
  }
}
