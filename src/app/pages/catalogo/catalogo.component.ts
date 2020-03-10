import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl } from "@angular/forms";
import {
  CrearCatalogoService,
  MostrarCatalogoProductoService,
  EditarProductoCatalogoService,
  EliminarProductoService
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
  productoAEditar = "";
  page = 1;
  pageSize = 4;
  collectionSize = "";

  constructor(
    private modalService: NgbModal,
    private _crearCatalogoService: CrearCatalogoService,
    private _mostrarCatalogoProductoService: MostrarCatalogoProductoService,
    private _editarProductoCatalogoService: EditarProductoCatalogoService,
    private _eliminarProductoService: EliminarProductoService
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
    // this.listarProductos();
    this._mostrarCatalogoProductoService.getProductosRegistrados().subscribe(
      (res: any) => {
        this.listaProductos = res;
        this.collectionSize = res.products.length;
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

  modalAgregarProducto(content) {
    this.frmRegistroCatalogo.reset();
    this.modalService.open(content);
  }

  guardarProductoCatalogo() {
    this._crearCatalogoService
      .postCrearCatalogo(this.frmRegistroCatalogo.value)
      .subscribe(
        res => {
          alert("registro guardado");
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
            case 409:
              alert("error 409");
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

  obtenerProducto(idProducto, content) {
    this.productoAEditar = idProducto;

    this._editarProductoCatalogoService.getListarProducto(idProducto).subscribe(
      (respuesta: any) => {
        let productosObtenidosActualizar: any = {
          name: respuesta.name,
          description: respuesta.description,
          unit_value: respuesta.unit_value,
          image_url: respuesta.image_url,
          point_value: respuesta.point_value,
          available: respuesta.available
        };

        this.frmRegistroCatalogo.setValue(productosObtenidosActualizar);
        this.modalService.open(content);
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

  guardarEditarProductoCatalogo() {
    let datos = this.frmRegistroCatalogo.value;
    this._editarProductoCatalogoService
      .guardarEditarProducto(this.productoAEditar, datos)
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



  eliminarProducto(id) {
    if (confirm("Desea eliminar el registro?")) {
      this._eliminarProductoService.eliminoProducto(id).subscribe(
        res => {
          if (res) {
            alert("eliminado");
            location.reload();
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
            case 500:
              alert("error 500");
              break;
            default:
              alert("otro tipo de error");
              break;
          }
          console.log(err);
        }
      );
    }
  }
}
