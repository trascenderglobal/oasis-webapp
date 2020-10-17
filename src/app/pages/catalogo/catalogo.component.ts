import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import {
  CrearCatalogoService,
  MostrarCatalogoProductoService,
  EditarProductoCatalogoService,
  EliminarProductoService
} from 'src/app/services/service.index';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styles: [''],
  providers: [NgbModal]
})
export class CatalogoComponent implements OnInit {
  frmRegistroCatalogo: FormGroup;
  listaProductos: any = [];
  productoAEditar = '';
  page = 1;
  pageSize = 5;
  collectionSize = '';

  constructor(
    private mostrarCatalogoProductoService: MostrarCatalogoProductoService,
    private editarProductoCatalogoService: EditarProductoCatalogoService,
    private eliminarProductoService: EliminarProductoService,
    private crearCatalogoService: CrearCatalogoService,
    private modalService: NgbModal,
    private toastr: ToastrService,
  ) {
    this.frmRegistroCatalogo = new FormGroup({
      name: new FormControl(),
      description: new FormControl(),
      unit_value: new FormControl(),
      image_url: new FormControl(),
      point_value: new FormControl(),
      available: new FormControl()
    });
  }

  ngOnInit() {
    this.loadProducts();
  }

  private loadProducts(): void {
    this.mostrarCatalogoProductoService.getProductosRegistrados()
    .subscribe((res: any) => {
      this.listaProductos = res;
      this.collectionSize = res.products.length;
    }, () => {
      this.toastr.error('', 'Error al cargar productos.');
    });
  }

  modalAgregarProducto(content) {
    this.frmRegistroCatalogo.reset();
    this.modalService.open(content);
  }

  guardarProductoCatalogo() {
    this.crearCatalogoService
    .postCrearCatalogo(this.frmRegistroCatalogo.value)
    .subscribe(() => {
      this.loadProducts();
      this.toastr.success('', 'Registro guardado');
    }, () => {
      this.toastr.error('', 'Error al guardar');
    });
  }

  obtenerProducto(idProducto, content) {
    this.productoAEditar = idProducto;

    this.editarProductoCatalogoService.getListarProducto(idProducto)
    .subscribe((respuesta: any) => {
      const productosObtenidosActualizar: any = {
        name: respuesta.name,
        description: respuesta.description,
        unit_value: respuesta.unit_value,
        image_url: respuesta.image_url,
        point_value: respuesta.point_value,
        available: respuesta.available
      };

      this.frmRegistroCatalogo.setValue(productosObtenidosActualizar);
      this.modalService.open(content);
    });
  }

  guardarEditarProductoCatalogo() {
    const datos = this.frmRegistroCatalogo.value;
    this.editarProductoCatalogoService
    .guardarEditarProducto(this.productoAEditar, datos)
    .subscribe(() => {
      this.toastr.success('', 'Registro editado correctamente.');
      this.loadProducts();
    }, () => {
      this.toastr.error('', 'Error al guardar los cambios.');
    });
  }

  eliminarProducto(id) {
    if (confirm('Desea eliminar el registro?')) {
      this.eliminarProductoService.eliminoProducto(id)
      .subscribe(() => {
        this.toastr.success('', 'Producto eliminado');
        this.loadProducts();
      }, () => {
        this.toastr.error('', 'Error al eliminar producto');
      });
    }
  }

}
