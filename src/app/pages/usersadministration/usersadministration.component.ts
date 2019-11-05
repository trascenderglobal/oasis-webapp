import { Component, OnInit, Input } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import {
  CrearUsuarioService,
  ListaUsuariosService,
  EditarUsuarioService,
  EliminarUsuarioService
} from "src/app/services/service.index";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  // tslint:disable-next-line: component-selector
  selector: "ngbd-modal-content",
  templateUrl: "./usersadministration.component.html",
  providers: [NgbModal]
})
// tslint:disable-next-line: component-class-suffix
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: "app-usersadministration",
  templateUrl: "./usersadministration.component.html",
  styleUrls: ["./usersadministration.component.scss"]
})
export class UsersadministrationComponent implements OnInit {
  frmRegistroUsuario: FormGroup;
  frmEditarUsuario: FormGroup;
  usuariosRegistrados: any = [];
  usuarioAEditar = '';

  constructor(
    private modalService: NgbModal,
    private _crearUsuarioService: CrearUsuarioService,
    private _listaUsuarioService: ListaUsuariosService,
    private _editarUsuarioService: EditarUsuarioService,
    private _eliminarUsuario: EliminarUsuarioService
  ) {
    this.frmRegistroUsuario = new FormGroup({
      id: new FormControl(),
      full_name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      discriminator: new FormControl(),
      phone: new FormControl("")
    });

    this.frmEditarUsuario = new FormGroup({
      id: new FormControl(""),
      full_name: new FormControl(""),
      email: new FormControl(""),
      discriminator: new FormControl(""),
      phone: new FormControl("")
    });
  }

  ngOnInit() {
    this._listaUsuarioService.getUsuariosRegistrados().subscribe(res => {
      this.usuariosRegistrados = res;
    });
  }

  // open() {
  //   const modalRef = this.modalService.open(NgbdModalContent);
  //   modalRef.componentInstance.name = 'Anything';
  // }

  open2(content) {
    this.modalService.open(content);
  }

  abrirModalActualizacion(content) {
    this.modalService.open(content);
  }

  Save() {
    let postData = {
      email: this.frmRegistroUsuario.value.email,
      password: this.frmRegistroUsuario.value.password,
      full_name: this.frmRegistroUsuario.value.full_name,
      phone: this.frmRegistroUsuario.value.phone,
      discriminator: this.frmRegistroUsuario.value.discriminator
    };

    console.log(postData);

    // let prueba = JSON.stringify({ username, password, })

    this._crearUsuarioService
      .postCrearUsuario(this.frmRegistroUsuario.value.id, postData)
      .subscribe(res => {
        console.log("respuestaaaaaa", res);
      });
  }

  obtenerUsuario(idUsuario, content) {
      this.usuarioAEditar = idUsuario;
    console.log("identificacion usuario ", idUsuario);
    this._editarUsuarioService
      .getListarUsuario(idUsuario)
      .subscribe((respuesta: any) => {
        let usuarioObtenidoActualizar: any = {
          id: respuesta.id,
          full_name: respuesta.full_name,
          email: respuesta.email,
          discriminator: respuesta.discriminator,
          phone: respuesta.phone,

        };

        this.frmEditarUsuario.setValue(usuarioObtenidoActualizar);

        // console.log("respuesta",respuesta.id)

        console.log(usuarioObtenidoActualizar);

        // this.usuarioObtenidoActualizar = respuesta;
        // console.log("resultado obtenido",this.usuarioObtenidoActualizar);
        this.modalService.open(content);
      });
  }

  guardarActualizarUsuario() {
    let datos = this.frmEditarUsuario.value;
    console.log("nuevo nombre", datos);
    this._editarUsuarioService.guardarEditarUsuario(this.usuarioAEditar,datos).subscribe(res=>{
        console.log(res);
    });
  }

  eliminarUsuario(id) {
    if (confirm("Desea eliminar el registro?")) {
      this._eliminarUsuario.eliminoUsuario(id).subscribe(res => {
        if (res) {
          alert("eliminado");
        }
      });
    }
  }
}
