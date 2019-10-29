import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header animated fadeIn">
      <p class="modal-title"><b>Registrar Usuario</b></p>
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
          <input class="form-control">
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <p>Nombre</p>
        </div>
        <div class="col-8">
          <input class="form-control" placeholder="Nombre o Cargo">
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <p>Email</p>
        </div>
        <div class="col-8">
          <input class="form-control">
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <p>Contraseña</p>
        </div>
        <div class="col-8">
          <input class="form-control" type="password">
        </div>
      </div>
      <div class="row input-group">
        <div class="col-4">
            <label for="roles">Rol</label>
        </div>
        <div class="col-8" style="padding-left: 25px;">
          <select class="custom-select" id="roles">
            <option selected>Seleccione</option>
            <option value="1">Administrador</option>
            <option value="2">Delivery</option>
          </select>
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
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-usersadministration',
  templateUrl: './usersadministration.component.html',
  styleUrls: ['./usersadministration.component.scss']
})
export class UsersadministrationComponent implements OnInit {

  constructor( private modalService: NgbModal ) { }

  ngOnInit() {
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'Anything';
  }

}
