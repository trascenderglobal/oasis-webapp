import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { CatalogopremiosComponent } from './pages/catalogopremios/catalogopremios.component';
import { DetallePedidosComponent } from './pages/detalle-pedidos/detalle-pedidos.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { SubirImagenComponent } from './pages/subir-imagen/subir-imagen/subir-imagen.component';
import { UsersadministrationComponent } from './pages/usersadministration/usersadministration.component';

export const ROUTES: Routes = [
 { path: 'login', component: LoginComponent },
  { path: 'home',
    component: HomeComponent ,
    canActivate: [AuthGuard],
    children: [
      { path: 'user-administration', component: UsersadministrationComponent },
      { path: 'pedidos', component: PedidosComponent },
      { path: 'catalogo', component: CatalogoComponent },
      { path: 'catalogo-premios', component: CatalogopremiosComponent },
      { path: 'detalle-pedidos/:id', component: DetallePedidosComponent },
      { path: 'cargar-imagenes', component: SubirImagenComponent },
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];
