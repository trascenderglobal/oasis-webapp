import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import {
  CrearPremioService,
  EditarPremioService,
  EliminarPremioService,
  ListarPremiosService
} from 'src/app/services/service.index';

@Component({
  selector: 'app-catalogopremios',
  templateUrl: './catalogopremios.component.html',
  styles: [''],
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
    private eliminarPremioService: EliminarPremioService,
    private listarPremiosService: ListarPremiosService,
    private editarPremioService: EditarPremioService,
    private crearPremioService: CrearPremioService,
    private toastr: ToastrService,
    private modalService: NgbModal,
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
    this.getPrices();
  }

  private getPrices(): void {
    this.listarPremiosService.getPremiosRegistrados()
    .subscribe((res: any) => {
      this.listaPremios = res;
      this.collectionSize = res.prizes.length;
    }, () => {
      this.toastr.error('', 'Error al cargar premios.');
    });
  }

  guardarPremioCatalogo() {
    this.crearPremioService
    .postCrearPremio(this.frmRegistroPremio.value)
    .subscribe(() => {
      this.toastr.success('', 'Registro guardado correctamente');
      this.getPrices();
    }, () => {
      this.toastr.error('', 'Error al guardar registro.');
    });
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
      });
  }

  guardarEditarPremiosCatalogo() {
    const datos = this.frmRegistroPremio.value;
    this.editarPremioService
    .guardarEditarPremio(this.premioAEditar, datos)
    .subscribe(() => {
      this.toastr.success('', 'Registro editado correctamente');
      this.getPrices();
    }, () => {
      this.toastr.error('', 'Error al guardar cambios.');
    });
  }

  eliminarPremio(id: any) {
    if (confirm('Desea eliminar el registro?')) {
      this.eliminarPremioService.eliminoPremio(id)
      .subscribe(() => {
        this.toastr.success('', 'Registro eliminado correctamente.');
        this.getPrices();
      }, () => {
        this.toastr.error('', 'Error al eliminar registro.');
      });
    }
  }

  modalAgregarPremio(content: any) {
    this.frmRegistroPremio.reset();
    this.modalService.open(content);
  }

}
