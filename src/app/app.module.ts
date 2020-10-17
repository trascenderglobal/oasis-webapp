import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// FIREBASE
import * as firebase from 'firebase';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
// Firebase services + enviorment module
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireAuthModule } from '@angular/fire/auth';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AuthGuard } from './auth/auth.guard';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { CatalogopremiosComponent } from './pages/catalogopremios/catalogopremios.component';
import { DetallePedidosComponent } from './pages/detalle-pedidos/detalle-pedidos.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { SubirImagenComponent } from './pages/subir-imagen/subir-imagen/subir-imagen.component';
import { UsersadministrationComponent } from './pages/usersadministration/usersadministration.component';
import { LoginService } from './services/login.service';
import { ServiceModule } from './services/service.module';
import { UserService } from './services/user.service';
import { BannerComponent } from './shared/banner/banner.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

// FIREBASE INITI
// firebase.initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BannerComponent,
    SidebarComponent,
    UsersadministrationComponent,
    PedidosComponent,
    CatalogoComponent,
    CatalogopremiosComponent,
    DetallePedidosComponent,
    SubirImagenComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: false }),
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    MatDialogModule,
    HttpClientModule,
    NgxSpinnerModule,
    ServiceModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    LoginService,
    UserService,
    AuthGuard,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
