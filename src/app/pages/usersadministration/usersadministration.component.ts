import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CrearUsuarioService, EditarUsuarioService, EliminarUsuarioService, ListaUsuariosService } from 'src/app/services/service.index';

@Component({
  selector: 'app-usersadministration',
  templateUrl: './usersadministration.component.html',
  styles: [''],
  providers: [NgbModal]
})
export class UsersadministrationComponent implements OnInit {
  frmRegistroUsuario: FormGroup;
  frmEditarUsuario: FormGroup;
  usuariosRegistrados: any = [];
  usuarioAEditar = '';
  page = 1;
  pageSize = 4;
  collectionSize = 1;

  constructor(
    private eliminarUsuarioService: EliminarUsuarioService,
    private editarUsuarioService: EditarUsuarioService,
    private listaUsuarioService: ListaUsuariosService,
    private crearUsuarioService: CrearUsuarioService,
    private modalService: NgbModal,
    private toastr: ToastrService,
  ) {
    this.frmRegistroUsuario = new FormGroup({
      id: new FormControl(),
      full_name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      discriminator: new FormControl(),
      phone: new FormControl('')
    });

    this.frmEditarUsuario = new FormGroup({
      id: new FormControl(''),
      password: new FormControl(),
      full_name: new FormControl(''),
      email: new FormControl(''),
      discriminator: new FormControl(''),
      phone: new FormControl('')
    });
  }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers(): void {
    this.listaUsuarioService.getUsuariosRegistrados().subscribe( (res: any) => {
      this.usuariosRegistrados = res;
      this.collectionSize = res.users.length;
    });
  }

  open2(content) {
    this.modalService.open(content);
  }

  abrirModalActualizacion(content) {
    this.modalService.open(content);
  }

  public save(): void {
    const postData = {
      email: this.frmRegistroUsuario.value.email,
      password: this.frmRegistroUsuario.value.password,
      full_name: this.frmRegistroUsuario.value.full_name,
      phone: this.frmRegistroUsuario.value.phone,
      discriminator: this.frmRegistroUsuario.value.discriminator
    };

    this.crearUsuarioService
    .postCrearUsuario(postData)
    .subscribe(() => {
      location.reload();
      this.toastr.success('', 'Usuario guardado correctamente');
      this.getUsers();
    }, () => {
      this.toastr.error('', 'Error al guardar usuario.');
    });
  }

  obtenerUsuario(idUsuario, content) {
    this.usuarioAEditar = idUsuario;
    this.editarUsuarioService.getListarUsuario(idUsuario).subscribe(
      (respuesta: any) => {
        const usuarioObtenidoActualizar: any = {
          id: respuesta.id,
          full_name: respuesta.full_name,
          password: '',
          email: respuesta.email,
          discriminator: respuesta.discriminator,
          phone: respuesta.phone
        };

        this.frmEditarUsuario.setValue(usuarioObtenidoActualizar);
        this.modalService.open(content);
      }
    );
  }

  guardarActualizarUsuario() {
    const datos = this.frmEditarUsuario.value;
    this.editarUsuarioService
    .guardarEditarUsuario(this.usuarioAEditar, datos)
    .subscribe(() => {
      this.toastr.success('', 'Usuario actualizado correctamente.');
      this.getUsers();
    }, () => {
      this.toastr.error('', 'Error al editar usuario.');
    });
  }

  eliminarUsuario(id) {
    if (confirm('Desea eliminar el registro?')) {
      this.eliminarUsuarioService.eliminoUsuario(id).subscribe(() => {
        this.toastr.success('', 'Usuario eliminado.');
        this.getUsers();
      }, () => {
        this.toastr.error('', 'Error al eliminar usuario.');
      });
    }
  }

}
