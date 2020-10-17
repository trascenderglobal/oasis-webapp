import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DetallePedidoService, ListarStatusService } from 'src/app/services/service.index';

@Component({
  selector: 'app-detalle-pedidos',
  templateUrl: './detalle-pedidos.component.html',
  styleUrls: ['./detalle-pedidos.component.scss'],
  providers: [NgbModal]
})
export class DetallePedidosComponent implements OnInit {

  frmEditarStatus: FormGroup;
  order: any = {};
  listadoStatus: any = [];
  orderAEditar = '';

  constructor(
    private detallePedidoService: DetallePedidoService,
    private listarStatusService: ListarStatusService,
    private router: ActivatedRoute,
    private modalService: NgbModal,
    private toastr: ToastrService,
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
    this.detallePedidoService.getListarPedido(id).subscribe((res: any) => this.order = res);
  }

  editarStatus(content: any, id: any) {
    this.frmEditarStatus.controls.status_id.setValue(id);
    this.modalService.open(content);
  }

  listarStatus() {
    this.listarStatusService.getStatus().subscribe(resData => this.listadoStatus = resData);
  }

  guardarEditarStatus() {
    const datos = this.frmEditarStatus.value;
    this.detallePedidoService.guardarEditarStatus(this.orderAEditar, datos)
    .subscribe(() => {
      this.toastr.success('', 'Registro editado');
      this.getDetallePedido(this.orderAEditar);
    }, () => {
      this.toastr.error('', 'Error al guardar cambios');
    });
  }
}
