import { Routes } from "@angular/router";
import { UsersadministrationComponent } from "./pages/usersadministration/usersadministration.component";
import { CatalogoComponent } from "./pages/catalogo/catalogo.component";
import { CatalogopremiosComponent } from "./pages/catalogopremios/catalogopremios.component";
import { PedidosComponent } from "./pages/pedidos/pedidos.component";
import { HelloComponent } from "./pages/hello/hello.component";
import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from './pages/home/home.component';
import { DetallePedidosComponent } from './pages/detalle-pedidos/detalle-pedidos.component';
import { SubirImagenComponent } from './pages/subir-imagen/subir-imagen/subir-imagen.component';



export const ROUTES: Routes = [
  { path: "hello", component: HelloComponent },

  { path: "login", component: LoginComponent },
  { path: "home", 
  component: HomeComponent ,
  children: [
    { path: "user-administration", 
      component: UsersadministrationComponent
    },
    { path: "pedidos", component: PedidosComponent },
    { path: "catalogo", component: CatalogoComponent },
    { path: "catalogo-premios", component: CatalogopremiosComponent },
    { path: "detalle-pedidos/:id", component: DetallePedidosComponent },
    { path: "cargar-imagenes", component: SubirImagenComponent },
  ]
},



  { path: "**", pathMatch: "full", redirectTo: "login" }
];
