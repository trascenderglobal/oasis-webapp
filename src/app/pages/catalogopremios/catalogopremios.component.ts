import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
          <p>ID</p>
        </div>
        <div class="col-8">
          <input class="form-control" type="text">
        </div>
      </div>
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
          <p>Inventario</p>
        </div>
        <div class="col-8">
          <input class="form-control" type="number">
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <p>Puntos para canjear</p>
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
export class NgbdModalContentP {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-catalogopremios',
  templateUrl: './catalogopremios.component.html',
  styleUrls: ['./catalogopremios.component.scss']
})
export class CatalogopremiosComponent implements OnInit {

  constructor( private modalService: NgbModal ) { }

  ngOnInit() {
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContentP);
    modalRef.componentInstance.name = 'Anything';
  }

}
