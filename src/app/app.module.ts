import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Firebase services + enviorment module
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireAuthModule } from '@angular/fire/auth';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { NgbdModalContent } from './pages/usersadministration/usersadministration.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { BannerComponent } from './shared/banner/banner.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { UsersadministrationComponent } from './pages/usersadministration/usersadministration.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { CatalogoComponent, NgbdModalContentC } from './pages/catalogo/catalogo.component';
import { CatalogopremiosComponent, NgbdModalContentP } from './pages/catalogopremios/catalogopremios.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { AuthService } from './services/auth.service';
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';

// ANGULAR MATERIAL
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// FIREBASE
import * as firebase from 'firebase';
import { HttpClientModule } from '@angular/common/http';
import { HelloComponent } from './pages/hello/hello.component';

// FIREBASE INITI
firebase.initializeApp(environment.firebaseConfig);

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
    NgbdModalContent,
    DetalleComponent,
    NgbdModalContentC,
    NgbdModalContentP,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    LoginService,
    UserService
  ],
  bootstrap: [
    AppComponent,
    NgbdModalContent,
    NgbdModalContentC,
    NgbdModalContentP
  ]
})
export class AppModule { }
