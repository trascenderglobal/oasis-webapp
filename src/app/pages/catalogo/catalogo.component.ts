import { Component, OnInit, Input } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl } from "@angular/forms";
import {
  CrearCatalogoService,
  MostrarCatalogoProductoService,
  EditarProductoCatalogoService
} from "src/app/services/service.index";

// import { DatabaseService } from 'src/app/services/database.service';
@Component({
  selector: "app-catalogo",
  templateUrl: "./catalogo.component.html",
  styleUrls: ["./catalogo.component.scss"],
  providers: [NgbModal]
})
export class CatalogoComponent implements OnInit {
  // productos = [];
  frmRegistroCatalogo: FormGroup;
  listaProductos: any = [];
  productoAEditar = '';

  constructor(
    private modalService: NgbModal,
    private _crearCatalogoService: CrearCatalogoService,
    private _mostrarCatalogoProductoService: MostrarCatalogoProductoService,
    private _editarProductoCatalogoService: EditarProductoCatalogoService
  ) {
    this.frmRegistroCatalogo = new FormGroup({
      description: new FormControl(),
      unit_value: new FormControl(),
      image_url: new FormControl(),
      point_value: new FormControl(),
      available: new FormControl()
    });
  }

  ngOnInit() {
    // this.listarProductos();
    this._mostrarCatalogoProductoService
      .getProductosRegistrados()
      .subscribe(res => {
        this.listaProductos = res;
        console.log(res);
      });
  }

  modalAgregarProducto(content) {
    this.modalService.open(content);
  }

  guardarProductoCatalogo() {
    this._crearCatalogoService
      .postCrearCatalogo(this.frmRegistroCatalogo.value)
      .subscribe(res => {
        alert("registro guardado");
      });
  }

  obtenerProducto(idProducto, content) {
    console.log(idProducto);

    this.productoAEditar = idProducto;

    console.log("identificacion del producto ", idProducto);

    this._editarProductoCatalogoService
      .getListarProducto(idProducto)
      .subscribe((respuesta: any) => {
        console.log(respuesta);
        let productosObtenidosActualizar: any = {
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

  guardarEditarProductoCatalogo(){


    let datos = this.frmRegistroCatalogo.value;
    // console.log("nuevos datosss", datos);
    this._editarProductoCatalogoService.guardarEditarProducto(this.productoAEditar,datos).subscribe(res=>{
        console.log(res);
    });

  }

  eliminarProducto(id) {
    // if (confirm("Desea eliminar el registro?")) {
    //   this._eliminarUsuario.eliminoUsuario(id).subscribe(res => {
    //     if (res) {
    //       alert("eliminado");
    //     }
    //   });
    // }
  }
}
