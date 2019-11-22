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
import { EliminarProductoService } from './service.index';
import { EliminarPremioService } from './eliminar-premio/eliminar-premio.service';
import { ListarPerdidosService } from './listar-pedidos/listar-perdidos.service';
import { DetallePedidoService } from './detalle-pedido/detalle-pedido.service';

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
    EditarPremioService,
    EliminarProductoService,
    EliminarPremioService,
    ListarPerdidosService,
    DetallePedidoService
  ]
})
export class ServiceModule {}
