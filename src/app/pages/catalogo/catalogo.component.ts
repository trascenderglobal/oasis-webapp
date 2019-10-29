import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatabaseService } from 'src/app/services/database.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header animated fadeIn">
      <p class="modal-title"><b>Agregar Producto</b></p>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body animated fadeIn">
      <div class="row">
        <div class="col-4">
          <p>Descripción</p>
        </div>
        <div class="col-8">
          <input class="form-control" type="text">
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <p>Precio</p>
        </div>
        <div class="col-8">
          <input class="form-control" type="number">
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <p>Puntos por compra</p>
        </div>
        <div class="col-8">
          <input class="form-control" type="number">
        </div>
      </div>
    </div>
    <div class="row animated fadeIn mb-5">
      <div class="col-6 d-flex justify-content-center">
        <button type="button" class="btn btn-outline-dark btn-primary">
          <i style="color: white;">Guardar</i>
        </button>
      </div>
      <div class="col-6 d-flex justify-content-center">
        <button type="button" class="btn btn-outline-dark btn-primary" (click)="activeModal.close('Close click')">
          <i style="color: white;">Cancelar</i>
        </button>
      </div>
    </div>
  `
})
// tslint:disable-next-line: component-class-suffix
export class NgbdModalContentC {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

  productos = [];

  constructor(  private modalService: NgbModal,
                private database: DatabaseService,
                private router: ActivatedRoute ) {
                  this.router.parent.params.subscribe( parametros => {
                    console.log('Ruta Hija usuario nuevo');
                    console.log(parametros);
                  });
                }

  ngOnInit() {
    this.listarProductos();
  }

  listarProductos() {
    this.database.getProductos().subscribe((res: any[]) => {
      console.log(res);
      this.productos = res;
    });
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContentC);
    modalRef.componentInstance.name = 'Anything';
  }

}
