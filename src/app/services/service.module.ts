import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CrearUsuarioService } from "./service.index";
import { ListaUsuariosService } from "./service.index";
import { EditarUsuarioService } from "./service.index";
import { EliminarUsuarioService } from "./service.index";
import { CrearCatalogoService } from "./service.index";
import { MostrarCatalogoProductoService } from "./service.index";
import { EditarProductoCatalogoService } from './service.index';
import { CrearPremioService } from './service.index';
import { ListarPremiosService } from './service.index';
import { EditarPremioService } from './service.index';

ListarPremiosService

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    CrearUsuarioService,
    ListaUsuariosService,
    EditarUsuarioService,
    EliminarUsuarioService,
    CrearCatalogoService,
    MostrarCatalogoProductoService,
    EditarProductoCatalogoService,
    CrearPremioService,
    ListarPremiosService,
    EditarPremioService
  ]
})
export class ServiceModule {}
