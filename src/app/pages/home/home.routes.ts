
import { Routes } from '@angular/router';
import { UsersadministrationComponent } from '../usersadministration/usersadministration.component';
import { CatalogoComponent } from '../catalogo/catalogo.component';
import { CatalogopremiosComponent } from '../catalogopremios/catalogopremios.component';
import { PedidosComponent } from '../pedidos/pedidos.component';
import { HelloComponent } from '../hello/hello.component';


export const HOME_ROUTES: Routes = [
    { path: 'hello', component: HelloComponent },
    { path: 'user-administration', component: UsersadministrationComponent },
    { path: 'catalogo', component: CatalogoComponent },
    { path: 'catalogo-premios', component: CatalogopremiosComponent },
    { path: 'pedidos', component: PedidosComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'hello' },
];

